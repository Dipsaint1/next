"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [ input, setInput] = useState("");
  
  return (
    <div>
      <div>
        <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            style={{ color: isActive ? "red" : "blue" }}
            href={link.href}
            key={link.name}
          > {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
