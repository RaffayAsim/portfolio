"use client";

import { useEffect, useState } from "react";

export function useIsTouch() {
  const [touch, setTouch] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setTouch(!mq.matches);
    const onChange = (e: MediaQueryListEvent) => setTouch(!e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return touch;
}
