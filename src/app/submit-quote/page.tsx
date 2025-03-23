import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Submit a Quote | quote.dev",
  description: "Anonymously share your industrial machinery quotes to help create pricing transparency in the B2B marketplace."
}

export default function SubmitQuotePage() {
  return (
    <main className="container mx-auto py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Submit an Anonymous Quote</h1>
          <p className="mt-4 text-lg text-gray-600">
            Share pricing information anonymously to help others negotiate better deals
          </p>
        </div>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="details">Quote Details</TabsTrigger>
            <TabsTrigger value="terms">Terms & Conditions</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <Card>
              <CardHeader>
                <CardTitle>Equipment Information</CardTitle>
                <CardDescription>
                  Provide basic information about the equipment and vendor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="equipment-type">Equipment Type</Label>
                    <Input id="equipment-type" placeholder="e.g., CNC Milling Machine" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a category</option>
                      <option value="cnc-machines">CNC Machines</option>
                      <option value="industrial-robots">Industrial Robots</option>
                      <option value="injection-molders">Injection Molders</option>
                      <option value="assembly-lines">Assembly Lines</option>
                      <option value="packaging-equipment">Packaging Equipment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="manufacturer">Manufacturer</Label>
                    <Input id="manufacturer" placeholder="e.g., DMG MORI" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="e.g., DMU 50 3rd Generation" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendor-name">Vendor Name (Optional)</Label>
                  <Input id="vendor-name" placeholder="Company that provided the quote" />
                  <p className="text-xs text-gray-500">
                    This will be anonymized but helps others recognize patterns
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto bg-b2b-primary hover:bg-b2b-secondary">Continue</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Quote Details</CardTitle>
                <CardDescription>
                  Provide pricing and terms information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input id="price" placeholder="e.g., 150000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <select
                      id="currency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                      <option value="JPY">JPY</option>
                      <option value="CNY">CNY</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="region">Region</Label>
                    <select
                      id="region"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a region</option>
                      <option value="north-america">North America</option>
                      <option value="europe">Europe</option>
                      <option value="asia-pacific">Asia Pacific</option>
                      <option value="latin-america">Latin America</option>
                      <option value="middle-east">Middle East & Africa</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="lead-time">Lead Time</Label>
                    <Input id="lead-time" placeholder="e.g., 12-14 weeks" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quote-date">Quote Date</Label>
                    <Input id="quote-date" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Included Items</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="installation"
                        className="h-4 w-4 rounded border-gray-300 text-b2b-primary focus:ring-b2b-primary"
                      />
                      <Label htmlFor="installation" className="text-sm font-normal">Installation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="training"
                        className="h-4 w-4 rounded border-gray-300 text-b2b-primary focus:ring-b2b-primary"
                      />
                      <Label htmlFor="training" className="text-sm font-normal">Training</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="warranty"
                        className="h-4 w-4 rounded border-gray-300 text-b2b-primary focus:ring-b2b-primary"
                      />
                      <Label htmlFor="warranty" className="text-sm font-normal">Warranty</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="maintenance"
                        className="h-4 w-4 rounded border-gray-300 text-b2b-primary focus:ring-b2b-primary"
                      />
                      <Label htmlFor="maintenance" className="text-sm font-normal">Maintenance</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accessories">Included Accessories</Label>
                  <Input id="accessories" placeholder="e.g., Standard package + tool changer (20 positions)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional-notes">Additional Notes</Label>
                  <textarea
                    id="additional-notes"
                    placeholder="Any other relevant information about the quote"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button className="bg-b2b-primary hover:bg-b2b-secondary">Continue</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="terms">
            <Card>
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
                <CardDescription>
                  Review and accept our terms before submitting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md bg-gray-50 p-4">
                  <h3 className="text-sm font-medium text-gray-900">Privacy & Anonymity</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    All submitted quote information is anonymized. We do not store or share any personally
                    identifiable information. Your IP address is not stored with your submission. Random
                    usernames are generated for each submission.
                  </p>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <h3 className="text-sm font-medium text-gray-900">Data Usage</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Quote data will be used to provide price transparency in the industrial machinery market.
                    Aggregate data may be used for reports and analysis, but individual quotes will remain anonymous.
                  </p>
                </div>

                <div className="rounded-md bg-gray-50 p-4">
                  <h3 className="text-sm font-medium text-gray-900">Accuracy & Validation</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    By submitting this quote, you confirm that the information provided is accurate to the best of your
                    knowledge. Community members will be able to validate quotes as accurate, too high, or too low based
                    on their experience.
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms-accept"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-b2b-primary focus:ring-b2b-primary"
                  />
                  <Label htmlFor="terms-accept" className="text-sm font-normal">
                    I agree to the <Link href="/terms-of-service" className="text-b2b-primary hover:underline">Terms of Service</Link> and
                    <Link href="/privacy-policy" className="text-b2b-primary hover:underline"> Privacy Policy</Link>. I confirm this quote information is accurate
                    and does not contain any confidential information that would identify specific parties.
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button className="bg-b2b-primary hover:bg-b2b-secondary">Submit Quote</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Your contribution helps create transparency in industrial equipment pricing.
            <br />
            Thank you for helping the community make better purchasing decisions.
          </p>
        </div>
      </div>
    </main>
  )
}
