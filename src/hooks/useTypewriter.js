import { useEffect, useState } from "react";

export default function useTypewriter(phrases, { type = 55, erase = 28, hold = 1700, still = false } = {}) {
  const [text, setText] = useState(still ? phrases[0] : "");

  useEffect(() => {
    if (still) {
      setText(phrases[0]);
      return undefined;
    }
    let i = 0;
    let j = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const full = phrases[i];
      if (!deleting) {
        j += 1;
        setText(full.slice(0, j));
        if (j === full.length) {
          deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, type);
      } else {
        j -= 1;
        setText(full.slice(0, j));
        if (j === 0) {
          deleting = false;
          i = (i + 1) % phrases.length;
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, erase);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [still]);

  return text;
}
