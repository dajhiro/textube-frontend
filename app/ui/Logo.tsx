export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="30"
        fontFamily="Georgia, serif"
        fontSize="28"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        TexTube
      </text>
    </svg>
  );
}
