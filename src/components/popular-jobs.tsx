"use client"

import Link from "next/link"

const popularJobs = [
  { title: "Software Engineer", url: "/salary/job-functions/software-engineering" },
  { title: "Product Manager", url: "/salary/job-functions/product-management" },
  { title: "Data Scientist", url: "/salary/job-functions/data-science" },
  { title: "Product Designer", url: "/salary/job-functions/product-design" },
  { title: "Sales & Account Management", url: "/salary/job-functions/sales-account-management" },
  { title: "Investment Banker", url: "/salary/job-functions/investment-banking" },
  { title: "Management Consultant", url: "/salary/job-functions/management-consulting" },
  { title: "Business Analyst", url: "/salary/job-functions/business-analysis" },
  { title: "Accountant", url: "/salary/job-functions/accounting" },
  { title: "Solutions Architecture", url: "/salary/job-functions/solutions-architecture" },
]

export function PopularJobs() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Popular Jobs</h2>
          <Link
            href="/salary/job-functions"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            All job functions
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {popularJobs.map((job) => (
            <Link
              key={job.title}
              href={job.url}
              className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
            >
              {job.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
