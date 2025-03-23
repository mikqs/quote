"use client"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b2b-gray-200 bg-b2b-dark-primary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image
                src="/favicon.png"
                alt="quote.dev logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-b2b-yellow-500">quote.dev</span>
          </Link>
          <div className="hidden md:block lg:w-64">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-b2b-gray-400" />
              </div>
              <Input
                type="search"
                placeholder="Search quotes, products, vendors..."
                className="w-full bg-b2b-dark-secondary border-b2b-dark-tertiary text-white pl-10 text-sm placeholder:text-b2b-gray-400"
              />
            </div>
          </div>
        </div>
        <nav className="flex-1 items-center justify-center md:flex">
          <ul className="flex items-center justify-center space-x-1 md:space-x-2 lg:space-x-8">
            <li>
              <Link
                href="/"
                className="flex flex-col items-center justify-center px-2 py-2 text-sm font-medium text-b2b-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span className="hidden md:inline-block">Community</span>
              </Link>
            </li>
            <li>
              <Link
                href="/quotes"
                className="flex flex-col items-center justify-center px-2 py-2 text-sm font-medium text-b2b-yellow-500 hover:text-b2b-yellow-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
                <span className="hidden md:inline-block">Quotes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/vendors"
                className="flex flex-col items-center justify-center px-2 py-2 text-sm font-medium text-b2b-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M19 22H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2z" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="hidden md:inline-block">Vendors</span>
              </Link>
            </li>
            <li>
              <Link
                href="/discussions"
                className="flex flex-col items-center justify-center px-2 py-2 text-sm font-medium text-b2b-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span className="hidden md:inline-block">Discussions</span>
              </Link>
            </li>
            <li>
              <Link
                href="/leaderboard"
                className="flex flex-col items-center justify-center px-2 py-2 text-sm font-medium text-b2b-gray-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
                <span className="hidden md:inline-block">Leaderboard</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/sign-in"
            className="hidden items-center justify-center whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-b2b-yellow-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-b2b-yellow-500 disabled:pointer-events-none disabled:opacity-50 md:block"
          >
            Sign in
          </Link>
          <Button
            className="rounded-md bg-b2b-yellow-500 text-black hover:bg-b2b-yellow-400"
          >
            Add Quote
          </Button>
        </div>
      </div>
    </header>
  )
}
