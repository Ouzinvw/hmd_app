import { MapPin, Tag, Clock } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="heading-2">How It Works</h2>
            <p className="max-w-[900px] paragraph md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connecting surplus food with hungry customers in three simple
              steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 pt-12">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <MapPin className="feature-icon" />
            </div>
            <h3 className="text-xl font-bold">Discover Nearby Deals</h3>
            <p className="paragraph">
              Browse real-time listings of discounted food from local businesses
              in your area.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Tag className="feature-icon" />
            </div>
            <h3 className="text-xl font-bold">Reserve & Pay</h3>
            <p className="paragraph">
              Secure your items with our easy checkout process and receive a
              pickup QR code.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
              <Clock className="feature-icon" />
            </div>
            <h3 className="text-xl font-bold">Pick Up & Enjoy</h3>
            <p className="paragraph">
              Visit the business during the pickup window and show your QR code
              to collect your items.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
