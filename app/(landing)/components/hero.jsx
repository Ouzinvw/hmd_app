import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-hero">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="heading-1">Reduce Food Waste, Save Money</h1>
              <p className="max-w-[600px] paragraph md:text-xl">
                Connect with local grocery stores, bakeries, and restaurants to
                purchase surplus food at discounted prices.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup?type=customer" className="button-primary">
                <span className="font-bold">Find Food Near Me</span>
              </Link>
              <Link href="/signup?type=business" className="button-secondary">
                <span className="font-bold">Register Your Business</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <Image
                src="https://picsum.photos/id/43/500"
                alt="Fresh food marketplace"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
