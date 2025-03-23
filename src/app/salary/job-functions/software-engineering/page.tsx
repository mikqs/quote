import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Software Engineer Salary in United States - Blind",
  description: "Curious about Software Engineer salary in United States? Explore the average Software Engineer salary. ✓ Get full access to compensation data!",
}

const salaryPosts = [
  {
    id: 1,
    company: "Microsoft",
    logo: "https://ext.same-assets.com/1247681252/984414008.png",
    timeAgo: "2h ago",
    position: "Software Engineer",
    level: "Back-End",
    levelNum: "61",
    yoe: "4 YOE",
    location: "Redmond, WA",
    workStyle: "Fully Remote",
    totalCompensation: "$228k",
    base: "$147k",
    equity: "$56k",
    bonus: "$25k",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://ext.same-assets.com/1247681252/984414008.png",
    timeAgo: "4h ago",
    position: "Software Engineer",
    level: "Back-End",
    levelNum: "63",
    yoe: "10 YOE",
    location: "Seattle, WA",
    workStyle: "Hybrid",
    totalCompensation: "$342k",
    base: "$192k",
    equity: "$130k",
    bonus: "$20k",
  },
  {
    id: 3,
    company: "Amazon",
    logo: "https://ext.same-assets.com/1247681252/2731569888.png",
    timeAgo: "7h ago",
    position: "Software Engineer",
    level: "Back-End",
    levelNum: "L5",
    yoe: "5 YOE",
    location: "New York, NY",
    workStyle: "Hybrid",
    totalCompensation: "$300k",
    base: "$200k",
    equity: "$100k",
    bonus: "$0",
  },
]

export default function SoftwareEngineerSalaryPage() {
  return (
    <main className="min-h-screen">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/salary"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Salary
          </Link>
          <span className="text-sm text-gray-400">&gt;</span>
          <Link
            href="/salary/job-functions"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Job Functions
          </Link>
          <span className="text-sm text-gray-400">&gt;</span>
          <div className="relative inline-block">
            <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              Software Engineer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
          <span className="text-sm text-gray-400">&gt;</span>
          <div className="relative inline-block">
            <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              United States
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-white py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Software Engineer Salary and Total Compensation in United States
          </h1>

          <div className="mt-8 rounded-lg border border-gray-200 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-around">
              <div className="mb-6 md:mb-0">
                <div className="text-3xl font-bold text-blue-600">US$ 175,029</div>
                <div className="text-sm text-gray-500">Median Total Comp</div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-lg font-semibold text-gray-900">$126K</div>
                  <div className="text-xs text-gray-500">25TH%</div>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 w-[25%] rounded-full bg-blue-200"></div>
                  </div>
                </div>

                <div>
                  <div className="text-lg font-semibold text-gray-900">$225K</div>
                  <div className="text-xs text-gray-500">70TH%</div>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 w-[70%] rounded-full bg-blue-400"></div>
                  </div>
                </div>

                <div>
                  <div className="text-lg font-semibold text-gray-900">$325K</div>
                  <div className="text-xs text-gray-500">90TH%</div>
                  <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                    <div className="h-2 w-[90%] rounded-full bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-600">
              Software Engineer in United States salary ranges from $126,043.00 in total compensation per year for employees in the 25th percentile to $324,607.00 for employees in the 90th percentile. Blind compiles anonymous and verified salary data from both present and past employees. This information was last updated on Mar 22, 2025.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center rounded-lg border border-gray-200 p-6 text-center">
            <div className="mb-4 h-40 w-full max-w-md bg-gray-100 relative">
              <Image
                src="https://ext.same-assets.com/1935187223/1898265949.jpeg"
                alt="Blurred salary distribution curve"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mb-6 mt-2 text-xl font-bold text-gray-900">
              Add your salary to see distribution curve
            </h2>
            <Button size="lg" className="w-full max-w-xs rounded-md bg-blue-600 hover:bg-blue-700">
              Add Salary
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Related Posts</h2>
          <div className="mt-8">
            {/* Related posts would go here */}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Recent Salary Submissions</h2>
          <div className="mt-8 space-y-6">
            {salaryPosts.map((post) => (
              <div key={post.id} className="rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3 border-b border-gray-200 p-4">
                  <div className="relative h-8 w-8">
                    <Image
                      src={post.logo}
                      alt={`${post.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-md object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{post.position}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                      <span>{post.timeAgo}</span>
                      <span>•</span>
                      <span>{post.company}</span>
                      <span>•</span>
                      <span>{post.level}</span>
                      <span>•</span>
                      <span>{post.levelNum}</span>
                      <span>•</span>
                      <span>{post.yoe}</span>
                      <span>•</span>
                      <span>{post.location}</span>
                      <span>•</span>
                      <span>{post.workStyle}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 divide-x divide-gray-200">
                  <div className="p-4 text-center">
                    <div className="font-medium text-gray-900">{post.totalCompensation}</div>
                    <div className="text-xs text-gray-500">Yearly Total</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-medium text-gray-900">{post.base}</div>
                    <div className="text-xs text-gray-500">Base</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-medium text-gray-900">{post.equity}</div>
                    <div className="text-xs text-gray-500">Yearly Equity</div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="font-medium text-gray-900">{post.bonus}</div>
                    <div className="text-xs text-gray-500">Bonus</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700">
              View more
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
                className="ml-2 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
