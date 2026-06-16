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
    while (true) {
      const result: string[] = [];

      // TYPE PHASE
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

      // PAUSE after typing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // DELETE PHASE
      while (result.length > 0) {
        let lastLine = result[result.length - 1]!;

        // Delete character by character
        for (let i = lastLine.length; i > lastLine.indexOf(" "); i--) {
          lastLine = lastLine.slice(0, i - 1);
          result[result.length - 1] = lastLine;
          setDisplayed([...result]);
          await new Promise((resolve) => setTimeout(resolve, 15));
        }

        // Remove line entirely
        result.pop();
        setDisplayed([...result]);
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setDone(false);

      // PAUSE before looping
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }, [lines]);

  useEffect(() => {
    animate();
  }, [animate]);

  return { displayed, done };
}
