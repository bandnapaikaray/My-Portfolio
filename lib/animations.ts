'use client';

import { useEffect, useState } from 'react';

// Intersection Observer hook for scroll animations
export const useInView = (threshold = 0.1) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, inView };
};

// Typing effect hook
export const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

// Counter animation hook
export const useCounter = (end: number, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const increment = end / (duration / 16);
        if (prevCount < end) {
          return Math.min(prevCount + increment, end);
        }
        return end;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return Math.floor(count);
};
