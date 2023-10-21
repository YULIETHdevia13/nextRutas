import Link from "next/link";
import "@/components/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Nextjs Curso</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
