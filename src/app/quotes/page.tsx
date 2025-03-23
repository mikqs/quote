import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Search, Filter, BarChart2, TrendingUp, Users, DollarSign } from "lucide-react"

export const metadata: Metadata = {
  title: "Industrial Machinery Quotes | quote.dev",
  description: "Browse anonymous quotes for industrial machinery and equipment. Filter by category, compare prices, and make better purchasing decisions."
}

// Mock data for dashboard stats
const dashboardStats = [
  {
    id: 1,
    title: "Total Quotes",
    value: "2,547",
    change: "+12.5%",
    trend: "up",
    icon: <BarChart2 className="h-8 w-8 text-b2b-primary" />
  },
  {
    id: 2,
    title: "Average Price",
    value: "$187,340",
    change: "-3.2%",
    trend: "down",
    icon: <DollarSign className="h-8 w-8 text-b2b-accent" />
  },
  {
    id: 3,
    title: "Active Contributors",
    value: "843",
    change: "+8.7%",
    trend: "up",
    icon: <Users className="h-8 w-8 text-b2b-success" />
  },
  {
    id: 4,
    title: "Price Trend",
    value: "Stable",
    change: "0.5%",
    trend: "stable",
    icon: <TrendingUp className="h-8 w-8 text-b2b-warning" />
  }
]

// Mock data for categories
const categories = [
  { id: 1, name: "CNC Machines", count: 463 },
  { id: 2, name: "Industrial Robots", count: 359 },
  { id: 3, name: "Injection Molders", count: 221 },
  { id: 4, name: "Assembly Lines", count: 189 },
  { id: 5, name: "Packaging Equipment", count: 175 },
  { id: 6, name: "Conveyor Systems", count: 168 },
  { id: 7, name: "Industrial Ovens", count: 145 },
  { id: 8, name: "Welding Equipment", count: 134 },
  { id: 9, name: "Material Handling", count: 123 },
  { id: 10, name: "Testing Equipment", count: 112 },
  { id: 11, name: "Others", count: 458 }
]

// Mock data for quotes
const quotes = [
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
  {
    id: 4,
    equipmentType: "Automated Assembly Line System",
    manufacturer: "ABB",
    model: "FlexLine S4",
    price: "$685,000",
    currency: "USD",
    includesInstallation: true,
    includesTraining: true,
    includedAccessories: "Control software, integration services, 5 robot units",
    leadTime: "24-36 weeks",
    category: "Assembly Lines",
    validations: {
      accurate: 7,
      tooHigh: 2,
      tooLow: 1
    },
    user: "Manufacturing_Lead_23",
    submittedAt: new Date(2025, 2, 20),
    region: "North America",
    vendorResponseTime: "Medium",
  },
  {
    id: 5,
    equipmentType: "Automatic Cartoning Machine",
    manufacturer: "Marchesini Group",
    model: "MA100",
    price: "$98,500",
    currency: "USD",
    includesInstallation: false,
    includesTraining: false,
    includedAccessories: "Basic carton magazine, product infeed system",
    leadTime: "10-12 weeks",
    category: "Packaging Equipment",
    validations: {
      accurate: 13,
      tooHigh: 1,
      tooLow: 0
    },
    user: "Packaging_Director_42",
    submittedAt: new Date(2025, 2, 21),
    region: "Europe",
    vendorResponseTime: "Fast",
  },
  {
    id: 6,
    equipmentType: "Gravity Roller Conveyor System",
    manufacturer: "Hytrol",
    model: "190-ACC",
    price: "$43,200",
    currency: "USD",
    includesInstallation: false,
    includesTraining: false,
    includedAccessories: "Supports, connector kits, end stops",
    leadTime: "4-6 weeks",
    category: "Conveyor Systems",
    validations: {
      accurate: 21,
      tooHigh: 0,
      tooLow: 2
    },
    user: "Logistics_Manager_55",
    submittedAt: new Date(2025, 2, 22),
    region: "North America",
    vendorResponseTime: "Fast",
  },
]

// Helper function to get validation classes
const getValidationClass = (quote: {
  validations: {
    accurate: number;
    tooHigh: number;
    tooLow: number;
  }
}) => {
  const total = quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow
  if (total === 0) return ""

  const accuratePercentage = (quote.validations.accurate / total) * 100

  if (accuratePercentage >= 75) return "border-l-4 border-b2b-success"
  if (accuratePercentage >= 50) return "border-l-4 border-b2b-warning"
  return "border-l-4 border-b2b-danger"
}

// Helper function to format date
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}

export default function QuotesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dashboard Stats */}
      <div className="mb-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">Industrial Machinery Quotes</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dashboardStats.map((stat) => (
            <div key={stat.id} className="rounded-lg border bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</h2>
                  <p className={`mt-1 text-sm ${
                    stat.trend === 'up' ? 'text-green-600' :
                    stat.trend === 'down' ? 'text-red-600' : 'text-orange-500'
                  }`}>
                    {stat.change} {stat.trend === 'up' ? '↑' : stat.trend === 'down' ? '↓' : '→'}
                  </p>
                </div>
                <div className="rounded-full bg-gray-50 p-3">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div className="relative w-full md:w-1/2">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search by equipment, manufacturer, model..."
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pl-10 text-gray-900 focus:border-b2b-primary focus:outline-none focus:ring-1 focus:ring-b2b-primary"
          />
        </div>

        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
          <div className="relative">
            <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Category
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {/* Dropdown would go here */}
          </div>

          <div className="relative">
            <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Region
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {/* Dropdown would go here */}
          </div>

          <div className="relative">
            <button className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Price Range
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
            {/* Dropdown would go here */}
          </div>

          <Button className="bg-b2b-primary hover:bg-b2b-secondary">
            Apply Filters
          </Button>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-b2b-primary px-3 py-1 text-sm">
            All Categories
          </Badge>

          {categories.map((category) => (
            <Badge key={category.id} variant="outline" className="px-3 py-1 text-sm hover:bg-gray-100">
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Results count and sorting */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-600">Showing <span className="font-semibold">6</span> of <span className="font-semibold">2,547</span> quotes</p>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="rounded border-gray-300 bg-white text-sm text-gray-700 focus:border-b2b-primary focus:outline-none focus:ring-1 focus:ring-b2b-primary">
            <option>Most Recent</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Validated</option>
          </select>
        </div>
      </div>

      {/* Quote Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote) => (
          <Card key={quote.id} className={`overflow-hidden transition-shadow hover:shadow-md ${getValidationClass(quote)}`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <Badge className="bg-b2b-accent">{quote.category}</Badge>
                <Badge variant="outline" className="text-gray-500">
                  {formatDate(quote.submittedAt)}
                </Badge>
              </div>
              <CardTitle className="mt-3 line-clamp-2 text-lg">
                {quote.equipmentType}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Manufacturer:</span>
                  <span className="font-medium">{quote.manufacturer}</span>
                </div>
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
                <div className="flex justify-between">
                  <span className="text-gray-500">Region:</span>
                  <span className="font-medium">{quote.region}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {quote.includesInstallation && (
                    <Badge variant="outline" className="bg-b2b-gray-100">Installation</Badge>
                  )}
                  {quote.includesTraining && (
                    <Badge variant="outline" className="bg-b2b-gray-100">Training</Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-xs text-gray-500">
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
                  <span className="flex items-center text-xs text-gray-500">
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
                  <span className="flex items-center text-xs text-gray-500">
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
                  className="text-xs font-medium text-b2b-primary hover:text-b2b-secondary"
                >
                  View Details
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="sr-only">Previous</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <Button variant="outline" className="h-8 w-8 bg-b2b-primary p-0 text-white hover:bg-b2b-secondary">1</Button>
          <Button variant="outline" className="h-8 w-8 p-0">2</Button>
          <Button variant="outline" className="h-8 w-8 p-0">3</Button>
          <span className="px-2">...</span>
          <Button variant="outline" className="h-8 w-8 p-0">42</Button>
          <Button variant="outline" className="h-8 w-8 p-0">
            <span className="sr-only">Next</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </nav>
      </div>
    </div>
  )
}
