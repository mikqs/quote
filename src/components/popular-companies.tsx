"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const popularCompanies = [
  {
    name: "Amazon",
    url: "/company/Amazon/salaries",
    logo: "https://ext.same-assets.com/1247681252/2731569888.png"
  },
  {
    name: "Microsoft",
    url: "/company/Microsoft/salaries",
    logo: "https://ext.same-assets.com/1247681252/984414008.png"
  },
  {
    name: "Google",
    url: "/company/Google/salaries",
    logo: "https://ext.same-assets.com/1247681252/1879672400.png"
  },
  {
    name: "Meta",
    url: "/company/Meta/salaries",
    logo: "https://ext.same-assets.com/1247681252/2481992350.png"
  },
  {
    name: "Apple",
    url: "/company/Apple/salaries",
    logo: "https://ext.same-assets.com/2814913035/935652156.png"
  },
  {
    name: "Salesforce",
    url: "/company/Salesforce/salaries",
    logo: "https://ext.same-assets.com/2814913035/581555300.png"
  },
  {
    name: "Intel",
    url: "/company/Intel/salaries",
    logo: "https://ext.same-assets.com/1247681252/3547359005.png"
  },
  {
    name: "Uber",
    url: "/company/Uber/salaries",
    logo: "https://ext.same-assets.com/1247681252/3640469757.png"
  },
  {
    name: "Capital One",
    url: "/company/Capital-One/salaries",
    logo: "https://ext.same-assets.com/2814913035/3828787796.png"
  },
  {
    name: "LinkedIn",
    url: "/company/LinkedIn/salaries",
    logo: "https://ext.same-assets.com/2814913035/911632696.png"
  },
]

export function PopularCompanies() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Companies</h2>
        </div>
        <div className="mb-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search for the company name"
              className="w-full rounded-full bg-gray-100 pl-10 text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {popularCompanies.map((company) => (
            <Link
              key={company.name}
              href={company.url}
              className="flex flex-col items-center justify-center rounded-md border border-gray-200 p-4 transition-colors hover:bg-gray-50"
            >
              <div className="relative mb-3 h-12 w-12">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-center text-sm font-medium text-gray-900">{company.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
