import Image from "next/image";
import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-amber-700 to-amber-800 text-white shadow-lg border-b border-amber-600">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-amber-300 shadow-md">
            <Image
              src="/logo.jpg"
              fill
              sizes="48px"
              alt="Logo"
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">Next Level Food</span>
        </Link>

        <nav>
          <ul className="flex gap-6 text-lg font-medium">
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}