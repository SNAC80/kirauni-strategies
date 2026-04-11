import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section className="section-white min-h-[60vh] flex items-center">
        <div className="container text-center">
          <div className="gold-eyebrow justify-center">Page Not Found</div>
          <h1 className="font-['Montserrat'] font-bold mb-4" style={{ fontSize: "clamp(4rem, 10vw, 8rem)", letterSpacing: "-0.02em", color: "rgba(107, 63, 160, 0.15)" }}>404</h1>
          <p className="font-['Montserrat'] font-600 text-[#1A1A1A] text-xl mb-3">This page does not exist.</p>
          <p className="text-[#6B7280] font-['Open_Sans'] mb-8">The page you are looking for may have moved or does not exist.</p>
          <Link href="/" className="btn-primary inline-flex">
            <span>Return to Home</span>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
