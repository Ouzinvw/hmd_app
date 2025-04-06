import { ShieldCheck, Clock, MapPin, Tag } from "lucide-react";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary-section"
    >
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="heading-2">Key Features</h2>
            <p className="max-w-[900px] paragraph md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Designed to make saving food and money seamless
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <div className="feature-card">
            <ShieldCheck className="feature-icon" />
            <h3 className="text-xl font-bold">Verified Businesses</h3>
            <p className="paragraph">
              All businesses are manually verified to ensure quality and
              reliability.
            </p>
          </div>
          <div className="feature-card">
            <Clock className="feature-icon" />
            <h3 className="text-xl font-bold">Real-Time Updates</h3>
            <p className="paragraph">
              Get instant notifications when new deals are posted in your area.
            </p>
          </div>
          <div className="feature-card">
            <MapPin className="feature-icon" />
            <h3 className="text-xl font-bold">Location-Based Search</h3>
            <p className="paragraph">
              Find the closest deals to you with our advanced mapping features.
            </p>
          </div>
          <div className="feature-card">
            <Tag className="feature-icon" />
            <h3 className="text-xl font-bold">Significant Discounts</h3>
            <p className="paragraph">
              Save up to 70% on high-quality food that would otherwise go to
              waste.
            </p>
          </div>
          <div className="feature-card">
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
              className="feature-icon"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            </svg>
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p className="paragraph">
              Integrated Stripe payment system for safe and easy transactions.
            </p>
          </div>
          <div className="feature-card">
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
              className="feature-icon"
            >
              <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v-4h2a2 2 0 0 0 0-4h-2Z" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
            </svg>
            <h3 className="text-xl font-bold">Sustainability Impact</h3>
            <p className="paragraph">
              Track how much food you've saved and your environmental impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
