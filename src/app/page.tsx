import { Metadata } from "next"
import { SocialHomeLayout } from "@/components/social-home-layout"

export const metadata: Metadata = {
  title: "quote.dev - Anonymous B2B Industrial Machinery Price Transparency",
  description: "Join our anonymous community to share, validate and discuss quotes for industrial machinery. Gain transparency into vendor pricing across various equipment categories."
}

export default async function HomePage() {
  return <SocialHomeLayout />
}
