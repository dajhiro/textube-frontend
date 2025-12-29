export default function Header() {
  return (
    <header className="w-full h-14 px-6 flex items-center justify-between border-b border-gray-200">
      <div className="text-lg font-semibold">
        <a href="/">TexTube</a>
      </div>

      <nav className="flex items-center gap-4 text-sm text-gray-600">
        <a href="#" className="hover:text-black">Login</a>
      </nav>
    </header>
  );
}
