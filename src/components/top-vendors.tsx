"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const vendorLogos = {
  "abc": "https://ext.same-assets.com/2814913035/581555300.png",
  "def": "https://ext.same-assets.com/1247681252/984414008.png",
  "ghi": "https://ext.same-assets.com/1247681252/1879672400.png",
  "jkl": "https://ext.same-assets.com/1247681252/2481992350.png",
  "mno": "https://ext.same-assets.com/2814913035/935652156.png",
  "pqr": "https://ext.same-assets.com/1247681252/3640469757.png",
  "stu": "https://ext.same-assets.com/2814913035/3828787796.png",
  "vwx": "https://ext.same-assets.com/2814913035/911632696.png",
  "yz1": "https://ext.same-assets.com/1247681252/2731569888.png",
  "yz2": "https://ext.same-assets.com/1247681252/3547359005.png",
}

const topVendors = [
  {
    id: 1,
    name: "CNC Precision",
    logo: vendorLogos.abc,
    transparencyScore: 98,
    quoteCount: 256,
    category: "CNC Machines",
    responseTime: "Fast",
  },
  {
    id: 2,
    name: "RoboTech Industries",
    logo: vendorLogos.def,
    transparencyScore: 95,
    quoteCount: 187,
    category: "Industrial Robots",
    responseTime: "Medium",
  },
  {
    id: 3,
    name: "MoldMaster Pro",
    logo: vendorLogos.ghi,
    transparencyScore: 92,
    quoteCount: 142,
    category: "Injection Molders",
    responseTime: "Fast",
  },
  {
    id: 4,
    name: "AssemblyTech",
    logo: vendorLogos.jkl,
    transparencyScore: 90,
    quoteCount: 118,
    category: "Assembly Lines",
    responseTime: "Slow",
  },
  {
    id: 5,
    name: "PackagePerfect",
    logo: vendorLogos.mno,
    transparencyScore: 88,
    quoteCount: 96,
    category: "Packaging Equipment",
    responseTime: "Fast",
  },
  {
    id: 6,
    name: "ConveyorKing",
    logo: vendorLogos.pqr,
    transparencyScore: 86,
    quoteCount: 83,
    category: "Conveyor Systems",
    responseTime: "Medium",
  },
  {
    id: 7,
    name: "ThermalTech",
    logo: vendorLogos.stu,
    transparencyScore: 85,
    quoteCount: 75,
    category: "Industrial Ovens",
    responseTime: "Fast",
  },
  {
    id: 8,
    name: "WeldPro Solutions",
    logo: vendorLogos.vwx,
    transparencyScore: 82,
    quoteCount: 64,
    category: "Welding Equipment",
    responseTime: "Medium",
  },
  {
    id: 9,
    name: "MaterialFlow",
    logo: vendorLogos.yz1,
    transparencyScore: 79,
    quoteCount: 58,
    category: "Material Handling",
    responseTime: "Slow",
  },
  {
    id: 10,
    name: "TestMaster",
    logo: vendorLogos.yz2,
    transparencyScore: 77,
    quoteCount: 42,
    category: "Testing Equipment",
    responseTime: "Medium",
  },
]

export function TopVendors() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top Vendors by Transparency Score</h2>
          <p className="mt-2 text-sm text-gray-600">
            Vendors ranked by community-driven transparency scores based on quote accuracy,
            consistency, and response time.
          </p>
        </div>
        <div className="mb-8">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="search"
              placeholder="Search vendors by name, category, or equipment type"
              className="w-full rounded-full bg-gray-100 pl-10 text-sm placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Vendor
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Transparency Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Quote Count
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Response Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {topVendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image
                          src={vendor.logo}
                          alt={`${vendor.name} logo`}
                          width={40}
                          height={40}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{vendor.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{vendor.category}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <div className={`text-sm font-semibold ${
                        vendor.transparencyScore >= 90 ? 'text-b2b-success' :
                        vendor.transparencyScore >= 80 ? 'text-b2b-accent' :
                        'text-b2b-warning'
                      }`}>
                        {vendor.transparencyScore}%
                      </div>
                      <div className="ml-2 h-2 w-24 rounded-full bg-gray-200">
                        <div
                          className={`h-2 rounded-full ${
                            vendor.transparencyScore >= 90 ? 'bg-b2b-success' :
                            vendor.transparencyScore >= 80 ? 'bg-b2b-accent' :
                            'bg-b2b-warning'
                          }`}
                          style={{ width: `${vendor.transparencyScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{vendor.quoteCount}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <Badge className={`${
                      vendor.responseTime === 'Fast' ? 'bg-b2b-success' :
                      vendor.responseTime === 'Medium' ? 'bg-b2b-warning' :
                      'bg-b2b-danger'
                    }`}>
                      {vendor.responseTime}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center">
          <Link
            href="/vendors"
            className="text-sm font-medium text-b2b-primary hover:text-b2b-secondary"
          >
            View all vendors
          </Link>
        </div>
      </div>
    </section>
  )
}
