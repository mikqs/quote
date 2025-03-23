import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ThumbsUp, ThumbsDown, Flag, Share2, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Quote Details | quote.dev",
  description: "Detailed view of an industrial machinery quote with specifications, pricing, and community validation."
}

// Mock quote data (in a real app, this would be fetched based on the ID)
const quote = {
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
  description: "This quote was for a brand new DMG MORI DMU 50 3rd Generation 5-axis CNC milling machine with a standard package plus a 20-position tool changer. The price includes installation, training, and a 1-year warranty. The quote was valid for 30 days and delivery estimated at 12-14 weeks after order confirmation. The vendor was responsive and provided detailed specifications within 24 hours of my request.",
  specs: [
    { name: "Working Area (X/Y/Z)", value: "500/450/400 mm" },
    { name: "Table Size", value: "630 x 500 mm" },
    { name: "Table Load Capacity", value: "300 kg" },
    { name: "Spindle Speed", value: "20,000 rpm" },
    { name: "Tool Slots", value: "20" },
    { name: "Control System", value: "SIEMENS 840D sl" },
    { name: "Machine Weight", value: "Approx. 4,800 kg" },
    { name: "Power Requirement", value: "32 kVA" }
  ],
  similarQuotes: [
    { id: 101, manufacturer: "Haas", model: "UMC-500", price: "$149,750", diff: "-5.2%" },
    { id: 102, manufacturer: "DMG MORI", model: "DMU 50 3rd Generation", price: "$162,350", diff: "+2.8%" },
    { id: 103, manufacturer: "Mazak", model: "VARIAXIS i-600", price: "$179,000", diff: "+13.3%" }
  ],
  comments: [
    {
      id: 1,
      user: "CNC_Expert_76",
      content: "This price seems in line with what I was quoted in Feb 2025. They usually charge extra for the tool changer, so this seems like a good deal.",
      timestamp: new Date(2025, 2, 15)
    },
    {
      id: 2,
      user: "Manufacturing_VP",
      content: "We got a similar quote but they didn't include the training. Was the training comprehensive or just basic operation?",
      timestamp: new Date(2025, 2, 18)
    },
    {
      id: 3,
      user: "Anonymous_Machinist_42",
      content: "The training was comprehensive - 3 full days covering operation, programming, and maintenance basics.",
      timestamp: new Date(2025, 2, 19),
      isAuthor: true
    }
  ]
}

// Helper function to format date
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}

// Helper function to format time ago
const timeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

  let interval = seconds / 31536000
  if (interval > 1) return Math.floor(interval) + " years ago"

  interval = seconds / 2592000
  if (interval > 1) return Math.floor(interval) + " months ago"

  interval = seconds / 86400
  if (interval > 1) return Math.floor(interval) + " days ago"

  interval = seconds / 3600
  if (interval > 1) return Math.floor(interval) + " hours ago"

  interval = seconds / 60
  if (interval > 1) return Math.floor(interval) + " minutes ago"

  return Math.floor(seconds) + " seconds ago"
}

type Params = {
  id: string;
}

export default async function QuoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // In a real app, you would fetch the quote data here based on params.id
  // For example: const { id } = await params; const quote = await getQuoteById(id);
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <Link
        href="/quotes"
        className="mb-6 inline-flex items-center text-sm font-medium text-b2b-primary hover:text-b2b-secondary"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to quotes
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {/* Main quote info */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <Badge className="bg-b2b-accent px-3 py-1">{quote.category}</Badge>
              <Badge variant="outline" className="text-gray-500">
                {formatDate(quote.submittedAt)}
              </Badge>
            </div>

            <h1 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
              {quote.equipmentType}
            </h1>

            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Manufacturer:</span>
                  <span className="font-semibold">{quote.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Model:</span>
                  <span className="font-semibold">{quote.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Price:</span>
                  <span className="font-bold text-b2b-primary">{quote.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Currency:</span>
                  <span>{quote.currency}</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Lead Time:</span>
                  <span>{quote.leadTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Region:</span>
                  <span>{quote.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Response Time:</span>
                  <span>{quote.vendorResponseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-500">Submitted By:</span>
                  <span className="font-mono text-sm">{quote.user}</span>
                </div>
              </div>
            </div>

            <div className="mb-6 space-y-3">
              <h2 className="text-lg font-semibold text-gray-900">Includes</h2>
              <div className="flex flex-wrap gap-2">
                {quote.includesInstallation && (
                  <Badge variant="outline" className="bg-b2b-gray-100">Installation</Badge>
                )}
                {quote.includesTraining && (
                  <Badge variant="outline" className="bg-b2b-gray-100">Training</Badge>
                )}
                <Badge variant="outline" className="bg-b2b-gray-100">1-Year Warranty</Badge>
                <Badge variant="outline" className="bg-b2b-gray-100">{quote.includedAccessories}</Badge>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Description</h2>
              <p className="text-gray-700">{quote.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">Technical Specifications</h2>
              <div className="overflow-hidden rounded-md border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {quote.specs.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-900">{spec.name}</td>
                        <td className="whitespace-nowrap px-4 py-2 text-sm text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Accurate ({quote.validations.accurate})</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4 rotate-180" />
                  <span>Too High ({quote.validations.tooHigh})</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-1">
                  <ThumbsDown className="h-4 w-4 rotate-180" />
                  <span>Too Low ({quote.validations.tooLow})</span>
                </Button>
              </div>

              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-red-500">
                  <Flag className="h-4 w-4" />
                  <span>Report</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Comments section */}
          <div className="mt-8 rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
              <MessageSquare className="mr-2 h-5 w-5" />
              Discussion ({quote.comments.length})
            </h2>

            <div className="space-y-6">
              {quote.comments.map((comment) => (
                <div
                  key={comment.id}
                  className={`rounded-lg border p-4 ${comment.isAuthor ? 'border-b2b-primary/20 bg-b2b-primary/5' : 'border-gray-200'}`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-b2b-gray-300"></div>
                      <div className="ml-3">
                        <span className={`font-mono text-sm ${comment.isAuthor ? 'font-semibold text-b2b-primary' : 'text-gray-900'}`}>
                          {comment.user}
                          {comment.isAuthor && <Badge className="ml-2 bg-b2b-primary">Author</Badge>}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{timeAgo(comment.timestamp)}</span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <textarea
                placeholder="Add a comment..."
                className="h-24 w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-b2b-primary focus:outline-none focus:ring-1 focus:ring-b2b-primary"
              ></textarea>
              <Button className="mt-3 bg-b2b-primary hover:bg-b2b-secondary">Post Comment</Button>
            </div>
          </div>
        </div>

        <div>
          {/* Price validation widget */}
          <Card className="mb-6 overflow-hidden">
            <div className="border-b p-4">
              <h3 className="text-lg font-semibold text-gray-900">Price Validation</h3>
            </div>
            <div className="p-4">
              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Accurate</span>
                  <span className="text-sm font-medium">{quote.validations.accurate}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-b2b-success"
                    style={{ width: `${(quote.validations.accurate / (quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow)) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Too High</span>
                  <span className="text-sm font-medium">{quote.validations.tooHigh}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-b2b-warning"
                    style={{ width: `${(quote.validations.tooHigh / (quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow)) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Too Low</span>
                  <span className="text-sm font-medium">{quote.validations.tooLow}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-b2b-danger"
                    style={{ width: `${(quote.validations.tooLow / (quote.validations.accurate + quote.validations.tooHigh + quote.validations.tooLow)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>

          {/* Similar quotes widget */}
          <Card className="mb-6 overflow-hidden">
            <div className="border-b p-4">
              <h3 className="text-lg font-semibold text-gray-900">Similar Quotes</h3>
            </div>
            <div className="divide-y">
              {quote.similarQuotes.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/quotes/${similar.id}`}
                  className="block p-4 hover:bg-gray-50"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{similar.manufacturer}</p>
                      <p className="text-sm text-gray-600">{similar.model}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-b2b-primary">{similar.price}</p>
                      <p className={`text-sm ${
                        similar.diff.startsWith('+') ? 'text-red-600' : 'text-green-600'
                      }`}>
                        {similar.diff}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="border-t p-3 text-center">
              <Link
                href="/quotes?category=CNC+Machines"
                className="text-sm font-medium text-b2b-primary hover:text-b2b-secondary"
              >
                View all in this category
              </Link>
            </div>
          </Card>

          {/* Call to action */}
          <Card className="overflow-hidden">
            <div className="bg-b2b-primary p-4 text-white">
              <h3 className="text-lg font-semibold">Contribute to Price Transparency</h3>
            </div>
            <div className="p-4">
              <p className="mb-4 text-sm text-gray-600">
                Help the community by sharing your own machinery quotes anonymously.
                Your contribution helps others make informed purchasing decisions.
              </p>
              <Button className="w-full bg-b2b-primary hover:bg-b2b-secondary">
                Submit Your Quote
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
