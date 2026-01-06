export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fontFamily: 'var(--font-playfair), Garamond, Georgia, Times New Roman, serif' }}
    >
      <text
        x="0"
        y="38"
        fontSize="36"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-1"
      >
        TexTube
      </text>
    </svg>
  );
}
