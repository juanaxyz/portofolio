import { useState } from "react";
import { motion } from "framer-motion";
import { SectionEyebrow } from "../ui/SectionEyebrow";
import { Card } from "../ui/Card";
import { useAgent } from "../../hooks/useAgent";
import { suggestedPrompts } from "../../agent/prompts";

export function JarvisChat() {
  const { messages, isLoading, bottomRef, sendMessage } = useAgent();
  const [input, setInput] = useState("");

  return (
    <section id="jarvis" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <SectionEyebrow label="AI ASSISTANT" />

        <h2 className="mb-2 text-heading-lg font-medium leading-tight tracking-[-0.84px] text-bone">
          Ada yang mau kamu tanyakan?
        </h2>

        <p className="mb-8 text-body text-ash">
          JARVIS tahu semua tentang project dan cara kerja aku. Tanya apapun.
        </p>

        <Card className="text-left">
          <div className="-m-6 mb-0 flex items-center gap-2 rounded-t-lg bg-iron px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-soft-indigo" />
            <span className="font-jetbrains-mono text-body-sm text-soft-indigo">
              JARVIS
            </span>
            <span className="ml-auto font-jetbrains-mono text-caption text-ash">
              online
            </span>
          </div>

          <div className="mb-4 mt-4 flex max-h-[400px] flex-col gap-3 overflow-y-auto">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 text-body-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-iron text-bone"
                      : "border border-slate-edge bg-graphite text-ash"
                  }`}
                >
                  {msg.content}
                  {msg.role === "assistant" && (
                    <span className="ml-1 font-jetbrains-mono text-caption text-soft-indigo">
                      [JARVIS]
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="rounded-lg border border-slate-edge bg-graphite px-4 py-2 text-body-sm text-ash">
                  JARVIS sedang mengetik
                  <span className="animate-pulse">...</span>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="mb-4 flex flex-wrap gap-2">
            {suggestedPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                disabled={isLoading}
                className="rounded-lg border border-slate-edge px-3 py-1.5 text-body-sm text-ash transition-colors hover:border-soft-indigo hover:text-soft-indigo disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          <div className="-mx-6 -mb-6 flex items-center border-t border-slate-edge bg-carbon px-4 py-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage(input);
                  setInput("");
                }
              }}
              placeholder="Ketik pertanyaan kamu..."
              disabled={isLoading}
              className="flex-1 bg-transparent text-body-sm text-bone outline-none placeholder:text-smoke"
            />
            <button
              onClick={() => {
                sendMessage(input);
                setInput("");
              }}
              disabled={isLoading || !input.trim()}
              className="ml-2 text-soft-indigo transition-opacity hover:opacity-80 disabled:opacity-40"
            >
              &rarr;
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
