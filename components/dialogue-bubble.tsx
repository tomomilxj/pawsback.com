"use client"

interface DialogueBubbleProps {
  text: string
  personality: "warm" | "playful" | "calm"
}

export default function DialogueBubble({ text, personality }: DialogueBubbleProps) {
  const getAnimationClass = () => {
    switch (personality) {
      case "playful":
        return "animate-bounce-gentle"
      case "calm":
        return "animate-fade-in-slow"
      default:
        return "animate-fade-in"
    }
  }

  return (
    <div className={`absolute top-24 left-1/2 -translate-x-1/2 z-20 ${getAnimationClass()}`}>
      <div className="relative bg-white rounded-2xl px-6 py-4 shadow-lg border border-zinc-200 max-w-md">
        <p className="text-zinc-900 text-center text-balance">{text}</p>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-zinc-200 rotate-45" />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @keyframes fade-in-slow {
          from {
            opacity: 0;
            transform: translate(-50%, -5px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @keyframes bounce-gentle {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -5px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 0.5s ease-out;
        }
        .animate-bounce-gentle {
          animation: bounce-gentle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
