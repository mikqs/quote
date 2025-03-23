"use client"

import { Button } from "@/components/ui/button"

export function SalaryHeader() {
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Compare Your Salary Across the Job Market
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Discover comprehensive salary data and insights on Blind. Gain transparency into
            professional compensation across various industries and roles. Join our community for
            candid discussions and valuable information on salaries.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 md:text-base"
            >
              Get started
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="h-full w-full">
            <div className="absolute inset-0">
              <svg
                className="h-full w-full"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="20" width="20" height="160" rx="4" fill="#f3f4f6" />
                <rect x="30" y="50" width="20" height="130" rx="4" fill="#f3f4f6" />
                <rect x="60" y="80" width="20" height="100" rx="4" fill="#f3f4f6" />
                <rect x="90" y="40" width="20" height="140" rx="4" fill="#f3f4f6" />
                <rect x="120" y="30" width="20" height="150" rx="4" fill="#f3f4f6" />
                <rect x="150" y="10" width="20" height="170" rx="4" fill="#f3f4f6" />
                <rect x="180" y="30" width="20" height="150" rx="4" fill="#f3f4f6" />
                <rect x="210" y="50" width="20" height="130" rx="4" fill="#f3f4f6" />
                <rect x="240" y="70" width="20" height="110" rx="4" fill="#f3f4f6" />
                <rect x="270" y="60" width="20" height="120" rx="4" fill="#f3f4f6" />

                {/* Chat bubbles */}
                <rect x="145" y="30" width="30" height="20" rx="4" fill="#000" />
                <rect x="180" y="70" width="40" height="30" rx="4" fill="#000" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
