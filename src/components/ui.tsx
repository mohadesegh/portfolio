import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  //fsefedsfrd
  return (
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.34em] text-white/35">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl">{title}</h2>
      {text ? <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/50">{text}</p> : null}
    </div>
  );
}
