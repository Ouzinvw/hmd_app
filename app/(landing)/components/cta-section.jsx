import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-section">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl">
              Join the Food Waste Revolution
            </h2>
            <p className="max-w-[900px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up today to start saving money and reducing food waste in
              your community.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Link href="/signup?type=customer" className="cta-button-customer">
              Sign Up as Customer
            </Link>
            <Link href="/signup?type=business" className="cta-button-business">
              Register Your Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
