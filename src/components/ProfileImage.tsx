// src/components/ProfileImage.tsx
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border border-kostas-blue/70 bg-slate-900/40 shadow-[0_0_40px_rgba(59,130,246,0.65)] sm:h-48 sm:w-48">
      <Image
        src="/images/profile.jpg"
        alt="Kostas profile"
        fill
        sizes="192px"
        className="object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
    </div>
  );
}