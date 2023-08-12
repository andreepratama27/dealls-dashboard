"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const activeClassname = (currentPath: string) => {
    if (currentPath === pathname) return `border-l-4 border-l-violet-600`;
  };

  return (
    <aside className="bg-gray-100 h-screen w-1/4 px-4 py-10">
      <ul>
        <li className={`py-2 px-4 ${activeClassname("/")}`}>
          <Link href="/">Products</Link>
        </li>
        <li className={`py-2 px-4 ${activeClassname("/cart")}`}>
          <Link href="/cart">Carts</Link>
        </li>
      </ul>
    </aside>
  );
}
