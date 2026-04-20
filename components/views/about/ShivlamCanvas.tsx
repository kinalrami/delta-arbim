import Image from 'next/image';

export default function ShivlamLogo() {
    return (
        <div className="relative w-full h-80 overflow-hidden flex items-center justify-center">

            {/* In Tailwind v4, we can inject keyframes using the arbitrary property syntax 
        directly on a style tag if we want to keep the TSX file clean.
      */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes s-float {
          0%, 100% { transform: translate(-50%, -54%) translateY(0px); }
          50% { transform: translate(-50%, -54%) translateY(-10px); }
        }
        @keyframes s-scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes s-ring {
          0%, 100% { transform: translate(-50%, -50%) scale(0.9); opacity: 0.2; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.5; }
        }
      `}} />

            {/* Glow Ring - Using Tailwind v4 Arbitrary Animation */}
            <div
                className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full border border-orange-500/30"
                style={{ animation: 's-ring 3s ease-in-out infinite' }}
            />

            {/* Main Logo Image */}
            <div
                className="absolute top-1/2 left-1/2 w-3/5 aspect-square z-20"
                style={{ animation: 's-float 4s ease-in-out infinite' }}
            >
                <Image
                    src="/shivlam.png" // Ensure this is in your /public folder
                    alt="Shivlam Logo"
                    fill
                    className="object-contain filter drop-shadow-[0_0_15px_rgba(255,153,51,0.6)]"
                    priority
                />
            </div>

            {/* Scan Line - Pure Tailwind v4 classes for styling */}
            <div
                className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-orange-400 to-transparent z-30 pointer-events-none shadow-[0_0_10px_rgba(255,153,51,0.8)]"
                style={{ animation: 's-scan 3s linear infinite' }}
            />
        </div>
    );
}