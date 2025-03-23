import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Job Function Directory | Blind",
  description: "Browse salary information for various job functions on Blind. Compare salaries across different industries and roles.",
}

type JobCategory = {
  title: string
  count: number
  jobs: {
    title: string
    slug: string
  }[]
}

const jobCategories: JobCategory[] = [
  {
    title: "Technology",
    count: 5,
    jobs: [
      { title: "Software Engineer", slug: "software-engineering" },
      { title: "Data Analyst", slug: "data-science-analytics" },
      { title: "Information & Technology", slug: "information-technology" },
      { title: "Research", slug: "research" },
      { title: "Data Scientist", slug: "data-science" },
    ],
  },
  {
    title: "Product",
    count: 3,
    jobs: [
      { title: "Product Manager", slug: "product-management" },
      { title: "Program Manager", slug: "program-management" },
      { title: "Project Manager", slug: "project-management" },
    ],
  },
  {
    title: "Design",
    count: 3,
    jobs: [
      { title: "Content/Creative & Design", slug: "creative-design" },
      { title: "Product Designer", slug: "product-design" },
      { title: "UX/UI Designer", slug: "ux-ui-design" },
    ],
  },
  {
    title: "Finance",
    count: 9,
    jobs: [
      { title: "Finance", slug: "finance" },
      { title: "Real Estate", slug: "real-estate" },
      { title: "Quant", slug: "quant" },
      { title: "Sales and Trading", slug: "sales-and-trading" },
      { title: "Equity Research", slug: "equity-research" },
      { title: "Asset Management", slug: "asset-management" },
      { title: "Venture Capital", slug: "venture-capital" },
      { title: "Investment Banker", slug: "investment-banking" },
      { title: "Private Equity", slug: "private-equity" },
    ],
  },
]

export default async function JobFunctionsPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Job Function Directory</h1>
        <p className="mt-2 text-gray-600">Select a job function below to see its salaries</p>

        <div className="mt-12 space-y-16">
          {jobCategories.map((category) => (
            <section key={category.title} className="border-t border-gray-200 pt-8">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-700">
                  {category.count}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {category.jobs.map((job) => (
                  <Link
                    key={job.slug}
                    href={`/salary/job-functions/${job.slug}`}
                    className="flex h-12 items-center justify-center rounded-md bg-gray-100 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    {job.title}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
