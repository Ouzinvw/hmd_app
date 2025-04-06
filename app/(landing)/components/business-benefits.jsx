import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BusinessBenefits() {
  return (
    <section id="businesses" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="https://picsum.photos/id/38/500"
                alt="Business owner using tablet"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="heading-2">For Businesses</h2>
              <p className="max-w-[600px] paragraph md:text-xl">
                Turn potential waste into profit while making a positive impact
                on the environment.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-foreground">
                  Reduce food waste and associated costs
                </span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-foreground">
                  Attract new customers to your business
                </span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-foreground">
                  Simple listing process that takes less than a minute
                </span>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary mt-0.5"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-foreground">
                  Enhance your brand's sustainability credentials
                </span>
              </li>
            </ul>
            <div>
              <Link href="/signup?type=business" className="button-primary">
                <span className="font-bold">Register Your Business</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
