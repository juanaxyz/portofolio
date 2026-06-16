import { useState, useRef, useCallback } from "react";
import { sendMessage } from "../agent/agent";
import type { Message } from "../agent/agent";

export function useAgent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo. Saya JARVIS — asisten personal Budi. Tanya apapun tentang project, skill, atau cara kerjanya.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const sendUserMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMsg: Message = { role: "user", content: text };
      setMessages((prev) => [...prev, userMsg]);
      setIsLoading(true);
      setError(null);
      scrollToBottom();

      try {
        const updated = [...messages, userMsg];
        const reply = await sendMessage(updated);
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      } catch {
        setError("Gagal terhubung ke JARVIS");
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Untuk itu, mungkin lebih baik langsung tanya Budi via kontak di bawah — saya hanya tahu apa yang dia ceritakan ke saya.",
          },
        ]);
      } finally {
        setIsLoading(false);
        scrollToBottom();
      }
    },
    [messages, isLoading, scrollToBottom],
  );

  return {
    messages,
    isLoading,
    error,
    bottomRef,
    sendMessage: sendUserMessage,
  };
}
