"use client"

import Link from "next/link"

const popularCategories = [
  { title: "CNC Machines", url: "/quotes/categories/cnc-machines" },
  { title: "Industrial Robots", url: "/quotes/categories/industrial-robots" },
  { title: "Injection Molders", url: "/quotes/categories/injection-molders" },
  { title: "Assembly Lines", url: "/quotes/categories/assembly-lines" },
  { title: "Packaging Equipment", url: "/quotes/categories/packaging-equipment" },
  { title: "Conveyor Systems", url: "/quotes/categories/conveyor-systems" },
  { title: "Industrial Ovens", url: "/quotes/categories/industrial-ovens" },
  { title: "Welding Equipment", url: "/quotes/categories/welding-equipment" },
  { title: "Material Handling", url: "/quotes/categories/material-handling" },
  { title: "Testing Equipment", url: "/quotes/categories/testing-equipment" },
]

export function PopularCategories() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Popular Equipment Categories</h2>
          <Link
            href="/quotes/categories"
            className="text-sm font-medium text-b2b-primary hover:text-b2b-secondary"
          >
            All categories
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularCategories.map((category) => (
            <Link
              key={category.title}
              href={category.url}
              className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
