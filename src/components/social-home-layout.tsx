"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const popularCategories = [
  { title: "CNC Machines", url: "/quotes/categories/cnc-machines" },
  { title: "Industrial Robots", url: "/quotes/categories/industrial-robots" },
  { title: "Injection Molders", url: "/quotes/categories/injection-molders" },
  { title: "Assembly Lines", url: "/quotes/categories/assembly-lines" },
  { title: "Packaging Equipment", url: "/quotes/categories/packaging-equipment" },
]

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
    leadTime: "12-14 weeks",
    category: "CNC Machines",
    validations: {
      accurate: 18,
      tooHigh: 2,
      tooLow: 0
    },
    user: "Anonymous_Machinist_42",
    submittedAt: "2025-03-10", // Fixed: String instead of Date object
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
    leadTime: "8-10 weeks",
    category: "Industrial Robots",
    validations: {
      accurate: 12,
      tooHigh: 5,
      tooLow: 1
    },
    user: "RoboticsEngineer_87",
    submittedAt: "2025-03-14", // Fixed: String instead of Date object
    region: "Europe",
    vendorResponseTime: "Medium",
  },
]

const popularPosts = [
  {
    id: 1,
    title: "Can I ask for a breakdown of shipping costs?",
    user: "Machine_Buyer_23",
    submittedAt: "2025-03-20", // Fixed: String instead of Date object
    category: "General",
    comments: 36,
    views: 245,
  },
  {
    id: 2,
    title: "Are maintenance contracts negotiable after purchase?",
    user: "IndustrialManager_77",
    submittedAt: "2025-03-18", // Fixed: String instead of Date object
    category: "Maintenance",
    comments: 28,
    views: 192,
  },
  {
    id: 3,
    title: "Has anyone compared Haas vs DMG MORI pricing?",
    user: "CNCSupervisor_12",
    submittedAt: "2025-03-15", // Fixed: String instead of Date object
    category: "CNC Machines",
    comments: 42,
    views: 327,
  },
]

// Helper function to format the date string for display
function formatDate(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  return `${Math.floor(diffInDays / 30)} months ago`;
}

export function SocialHomeLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-12 md:gap-6 px-4 py-6 sm:px-6 lg:px-8">
        {/* Left Sidebar */}
        <div className="md:col-span-3 md:block">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium bg-b2b-primary text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Feed
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <line x1="10" y1="9" x2="8" y2="9" />
                    </svg>
                    My Company
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    Polls
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                    All Channels
                  </Link>
                </nav>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">INDUSTRIES</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <nav className="space-y-1">
                  {["Tech", "Healthcare", "Retail"].map((industry) => (
                    <Link
                      key={industry}
                      href="#"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      {industry}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-b2b-primary hover:bg-gray-100"
                  >
                    Show more
                  </Link>
                </nav>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">JOB GROUPS</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <nav className="space-y-1">
                  {["Software Engineering", "Product Management", "Accounting"].map((job) => (
                    <Link
                      key={job}
                      href="#"
                      className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      {job}
                    </Link>
                  ))}
                  <Link
                    href="#"
                    className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-b2b-primary hover:bg-gray-100"
                  >
                    Show more
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Center Content - Posts/Quotes Feed */}
        <div className="mt-4 md:col-span-6 md:mt-0">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Quotes</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm font-medium bg-transparent">
                <option>Popular</option>
                <option>Recent</option>
                <option>Recommended</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            {/* Quote Post Items */}
            {recentQuotes.map((quote) => (
              <Card key={quote.id} className="overflow-hidden hover:shadow-md">
                <CardHeader className="pb-2 flex flex-row justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-shrink-0 h-8 w-8 bg-b2b-primary rounded-full flex items-center justify-center text-white font-bold">
                        {quote.user.charAt(0)}
                      </div>
                      <div>
                        <span className="text-sm font-medium">{quote.manufacturer}</span>
                        <span className="text-xs text-gray-500 ml-2">• {formatDate(quote.submittedAt)}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">
                      {quote.equipmentType}
                    </CardTitle>
                  </div>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Model:</span>
                      <span className="font-medium">{quote.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-bold text-b2b-primary">{quote.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Lead Time:</span>
                      <span className="font-medium">{quote.leadTime}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" className="bg-b2b-gray-100">{quote.category}</Badge>
                      {quote.includesInstallation && (
                        <Badge variant="outline" className="bg-b2b-gray-100">Installation</Badge>
                      )}
                      {quote.includesTraining && (
                        <Badge variant="outline" className="bg-b2b-gray-100">Training</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-3 flex justify-between">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-b2b-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      <span className="text-sm">{quote.validations.accurate}</span>
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-b2b-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span className="text-sm">{quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow}</span>
                    </button>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-b2b-primary flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 15h-6v4l-8-8 8-8v4h6a4 4 0 0 1 0 8Z"></path>
                    </svg>
                    Share
                  </button>
                </CardFooter>
              </Card>
            ))}

            <div className="flex justify-center mt-6">
              <Button className="bg-b2b-primary hover:bg-b2b-secondary">
                View More Quotes
              </Button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="mt-4 md:col-span-3 md:mt-0">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Sponsored</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="bg-gray-200 rounded-md h-48 flex items-center justify-center">
                  <span className="text-gray-500">Advertisement</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Most Read</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  {popularPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <Link href={`/discussions/${post.id}`} className="block">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs text-gray-500">{post.category}</span>
                          <span className="text-xs text-gray-500">{post.views}</span>
                        </div>
                        <h3 className="text-sm font-medium line-clamp-2 hover:text-b2b-primary">
                          {post.title}
                        </h3>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-900">Popular Categories</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {popularCategories.map((category) => (
                    <Link
                      key={category.title}
                      href={category.url}
                      className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200"
                    >
                      {category.title}
                    </Link>
                  ))}
                  <Link
                    href="/quotes/categories"
                    className="text-xs font-medium text-b2b-primary hover:underline"
                  >
                    See all →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
