import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CheckCircle, TrendingUp, Wallet } from "lucide-react";

const data = [
    { icon: <Wallet className="w-12 h-12" />, title: "Daily Repayments", description: "Automatically deduct small amounts daily from your digital wallet" },
    { icon: <CheckCircle className="w-12 h-12" />, title: "No Defaults", description: "Stay on track with manageable daily payments" },
    { icon: <TrendingUp className="w-12 h-12" />, title: "Improve Credit Score", description: "Build a strong credit history with consistent repayments" }
]


export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={data} />
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
