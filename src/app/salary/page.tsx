import { SalaryHeader } from "@/components/salary-header"
import { PopularJobs } from "@/components/popular-jobs"
import { PopularCompanies } from "@/components/popular-companies"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blind Salary Database: Uncover pay transparency insights with our comparison tool",
  description: "Discover comprehensive salary data and insights on Blind. Gain transparency into professional compensation across various industries and roles.",
}

export default async function SalaryPage() {
  return (
    <main className="min-h-screen">
      <SalaryHeader />
      <div className="border-t border-gray-200"></div>
      <PopularJobs />
      <div className="border-t border-gray-200"></div>
      <PopularCompanies />
    </main>
  )
}
