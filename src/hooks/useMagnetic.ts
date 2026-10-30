import { useRef } from "react";
import type { MouseEvent } from "react";

export function useMagnetic(strength = 12) {
  const elementRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * strength;
    const rotateX = (0.5 - y) * strength;

    element.style.setProperty("--rotate-x", `${rotateX}deg`);
    element.style.setProperty("--rotate-y", `${rotateY}deg`);
  }

  function handleMouseLeave() {
    const element = elementRef.current;
    if (!element) return;

    element.style.setProperty("--rotate-x", "0deg");
    element.style.setProperty("--rotate-y", "0deg");
  }

  return { elementRef, handleMouseMove, handleMouseLeave };
}
