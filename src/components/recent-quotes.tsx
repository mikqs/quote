"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

const recentQuotes = [
  {
    id: 1,
    equipmentType: "CNC 5-Axis Milling Machine",
    manufacturer: "DMG MORI",
    model: "DMU 50 3rd Generation",
    price: "$158,000",
    currency: "USD",
    includesInstallation: true,
    includesTraining: true,
    includedAccessories: "Standard package + tool changer (20 positions)",
    leadTime: "12-14 weeks",
    category: "CNC Machines",
    validations: {
      accurate: 18,
      tooHigh: 2,
      tooLow: 0
    },
    user: "Anonymous_Machinist_42",
    submittedAt: new Date(2025, 2, 10),
    region: "North America",
    vendorResponseTime: "Fast",
  },
  {
    id: 2,
    equipmentType: "Industrial 6-Axis Robot Arm",
    manufacturer: "FANUC",
    model: "R-2000iC/165F",
    price: "$87,500",
    currency: "USD",
    includesInstallation: true,
    includesTraining: false,
    includedAccessories: "Controller, teach pendant, cables",
    leadTime: "8-10 weeks",
    category: "Industrial Robots",
    validations: {
      accurate: 12,
      tooHigh: 5,
      tooLow: 1
    },
    user: "RoboticsEngineer_87",
    submittedAt: new Date(2025, 2, 14),
    region: "Europe",
    vendorResponseTime: "Medium",
  },
  {
    id: 3,
    equipmentType: "Hydraulic Injection Molding Machine",
    manufacturer: "ARBURG",
    model: "ALLROUNDER 570 A",
    price: "$210,000",
    currency: "USD",
    includesInstallation: true,
    includesTraining: true,
    includedAccessories: "Standard control package, integrated robot interface",
    leadTime: "16-18 weeks",
    category: "Injection Molders",
    validations: {
      accurate: 9,
      tooHigh: 1,
      tooLow: 3
    },
    user: "Plastics_Pro_65",
    submittedAt: new Date(2025, 2, 18),
    region: "Asia Pacific",
    vendorResponseTime: "Slow",
  },
]

type QuoteWithValidations = {
  validations: {
    accurate: number;
    tooHigh: number;
    tooLow: number;
  }
}

const getValidationClass = (quote: QuoteWithValidations) => {
  const total = quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow
  if (total === 0) return ""

  const accuratePercentage = (quote.validations.accurate / total) * 100

  if (accuratePercentage >= 75) return "border-l-4 border-b2b-success"
  if (accuratePercentage >= 50) return "border-l-4 border-b2b-warning"
  return "border-l-4 border-b2b-danger"
}

export function RecentQuotes() {
  return (
    <section className="bg-b2b-dark-primary py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Recently Shared Quotes</h2>
            <p className="mt-2 text-sm text-b2b-gray-300">
              Anonymous quotes submitted by the community with price transparency validation
            </p>
          </div>
          <Button className="mt-4 bg-b2b-yellow-500 text-black hover:bg-b2b-yellow-400 md:mt-0">
            Submit a Quote
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentQuotes.map((quote) => (
            <Card key={quote.id} className={`overflow-hidden transition-shadow hover:shadow-md bg-b2b-dark-secondary text-white border-b2b-dark-tertiary ${getValidationClass(quote)}`}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-b2b-yellow-500 text-black font-medium">{quote.category}</Badge>
                  <Badge variant="outline" className="border-b2b-dark-tertiary text-b2b-gray-300">
                    {formatDistanceToNow(quote.submittedAt, { addSuffix: true })}
                  </Badge>
                </div>
                <CardTitle className="mt-3 line-clamp-2 text-lg text-white">
                  {quote.equipmentType}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-b2b-gray-300">Manufacturer:</span>
                    <span className="font-medium text-white">{quote.manufacturer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-b2b-gray-300">Model:</span>
                    <span className="font-medium text-white">{quote.model}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-b2b-gray-300">Price:</span>
                    <span className="font-bold text-b2b-yellow-500">{quote.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-b2b-gray-300">Lead Time:</span>
                    <span className="font-medium text-white">{quote.leadTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-b2b-gray-300">Region:</span>
                    <span className="font-medium text-white">{quote.region}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {quote.includesInstallation && (
                      <Badge variant="outline" className="bg-b2b-dark-tertiary border-b2b-dark-tertiary text-b2b-gray-300">Installation</Badge>
                    )}
                    {quote.includesTraining && (
                      <Badge variant="outline" className="bg-b2b-dark-tertiary border-b2b-dark-tertiary text-b2b-gray-300">Training</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-b2b-dark-tertiary pt-4">
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center text-xs text-b2b-gray-300">
                      <svg
                        className="mr-1 h-4 w-4 text-b2b-success"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {quote.validations.accurate}
                    </span>
                    <span className="flex items-center text-xs text-b2b-gray-300">
                      <svg
                        className="mr-1 h-4 w-4 text-b2b-warning"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      {quote.validations.tooHigh}
                    </span>
                    <span className="flex items-center text-xs text-b2b-gray-300">
                      <svg
                        className="mr-1 h-4 w-4 text-b2b-danger"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      {quote.validations.tooLow}
                    </span>
                  </div>
                  <Link
                    href={`/quotes/${quote.id}`}
                    className="text-xs font-medium text-b2b-yellow-500 hover:text-b2b-yellow-300"
                  >
                    View Details
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/quotes"
            className="text-b2b-yellow-500 hover:text-b2b-yellow-300"
          >
            View all quotes
          </Link>
        </div>
      </div>
    </section>
  )
}
