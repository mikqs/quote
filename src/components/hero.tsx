"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-white py-12 md:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            Compare Industrial Machinery Quotes Anonymously
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Discover real pricing data for industrial equipment and machinery on quote.dev. Gain transparency
            into vendor quotes across various industries. Join our anonymous community to share and
            validate quotes, helping everyone make informed purchasing decisions.
          </p>
          <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="bg-b2b-primary text-white hover:bg-b2b-secondary md:text-base"
            >
              Submit a Quote
            </Button>
            <Button
              size="lg"
              className="bg-white text-b2b-primary hover:bg-gray-50 border border-b2b-primary md:text-base"
              variant="outline"
            >
              Browse Quotes
            </Button>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="h-full w-full rounded-lg bg-gray-100 p-6">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="w-full space-y-6">
                <div className="space-y-2">
                  <div className="h-2.5 w-24 rounded-full bg-b2b-gray-300"></div>
                  <div className="h-3 w-48 rounded-full bg-b2b-gray-300"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-4">
                    <div>
                      <div className="h-2.5 w-24 rounded-full bg-b2b-gray-300"></div>
                      <div className="mt-2 h-5 w-32 rounded-full bg-b2b-primary"></div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-b2b-gray-200">
                      <div className="h-5 w-5 rounded-full bg-b2b-accent"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-4">
                    <div>
                      <div className="h-2.5 w-20 rounded-full bg-b2b-gray-300"></div>
                      <div className="mt-2 h-5 w-40 rounded-full bg-b2b-primary"></div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-b2b-gray-200">
                      <div className="h-5 w-5 rounded-full bg-b2b-warning"></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-4">
                    <div>
                      <div className="h-2.5 w-32 rounded-full bg-b2b-gray-300"></div>
                      <div className="mt-2 h-5 w-36 rounded-full bg-b2b-primary"></div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-b2b-gray-200">
                      <div className="h-5 w-5 rounded-full bg-b2b-success"></div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-8 w-32 rounded-full bg-b2b-accent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
