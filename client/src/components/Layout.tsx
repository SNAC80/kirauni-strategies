/**
 * Kirauni Strategies — Layout Wrapper
 * Wraps all pages with Header and Footer
 */
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 lg:pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
}
