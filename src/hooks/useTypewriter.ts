import { useState, useEffect, useCallback } from "react";

interface TypewriterLine {
  prefix: string;
  text: string;
  delay?: number;
  charSpeed?: number;
}

export function useTypewriter(lines: TypewriterLine[]) {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const animate = useCallback(async () => {
    const result: string[] = [];

    for (const line of lines) {
      await new Promise<void>((resolve) => setTimeout(resolve, line.delay ?? 400));
      result.push(line.prefix);
      setDisplayed([...result]);

      let typed = "";
      const chars = line.text.split("");
      for (let i = 0; i < chars.length; i++) {
        typed += chars[i]!;
        result[result.length - 1] = line.prefix + typed;
        setDisplayed([...result]);
        await new Promise((resolve) => setTimeout(resolve, line.charSpeed ?? 30));
      }
    }

    setDone(true);
  }, [lines]);

  useEffect(() => {
    animate();
  }, [animate]);

  return { displayed, done };
}
