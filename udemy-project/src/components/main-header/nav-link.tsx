"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavLink({href, children}){
    const pathname = usePathname();
    const isActive = pathname === href
    return(
        <>
        <Link
                href={href}
                className={`relative transition-colors duration-200 pb-1 group ${isActive ? "text-amber-300" : "hover:text-amber-200"
                  }`}
              >
                {children}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-amber-300 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </Link>
        </>
    )
}