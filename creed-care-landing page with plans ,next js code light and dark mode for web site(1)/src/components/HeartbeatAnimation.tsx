"use client"

const HeartbeatAnimation = () => {
  return (
    <div className="flex items-center justify-center p-8 mt-16">
      <div className="relative">
        <svg width="240" height="120" viewBox="0 0 240 120" className="heartbeat-svg">
          <defs>
            <linearGradient id="heartbeatGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-secondary-500)" />
              <stop offset="50%" stopColor="var(--color-secondary-400)" />
              <stop offset="100%" stopColor="var(--color-secondary-500)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path
            d="M20,60 L60,60 L80,30 L100,90 L120,20 L140,100 L160,60 L220,60"
            stroke="url(#heartbeatGradient)"
            strokeWidth="4"
            fill="none"
            className="heartbeat-line"
            filter="url(#glow)"
          />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 text-center">
          <div className="inline-block bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 px-4 py-2 rounded-full shadow-sm text-secondary-500 dark:text-secondary-400 text-sm font-medium animate-pulse">
            Your unique rhythm
          </div>
        </div>
      </div>
      <style jsx>{`
        :root {
          --color-secondary-400: #EF5350;
          --color-secondary-500: #E53935;
        }
        
        .dark {
          --color-secondary-400: #EF5350;
          --color-secondary-500: #E53935;
        }
        
        .heartbeat-line {
          stroke-dasharray: 500;
          stroke-dashoffset: 500;
          animation: heartbeat 3s ease-in-out infinite;
        }
        
        @keyframes heartbeat {
          0% {
            stroke-dashoffset: 500;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -500;
          }
        }
      `}</style>
    </div>
  )
}

export default HeartbeatAnimation
