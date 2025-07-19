"use client";

export default function BackgroundSparkles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${(Math.random() * 3).toFixed(2)}s`,
          }}
        />
      ))}
    </div>
  );
}
