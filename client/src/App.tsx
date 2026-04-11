import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import KirauniMethod from "./pages/KirauniMethod";
import ClientWins from "./pages/ClientWins";
import About from "./pages/About";
import WorkWithUs from "./pages/WorkWithUs";
import Contact from "./pages/Contact";
import VisibilityScan from "./pages/VisibilityScan";
import StrategyAudit from "./pages/StrategyAudit";
import Apply from "./pages/Apply";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

// Use /kirauni-strategies as base path when deployed to GitHub Pages
// import.meta.env.BASE_URL is set by Vite based on the `base` config option
const basePath = import.meta.env.BASE_URL?.replace(/\/$/, "") || "";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/kirauni-method" component={KirauniMethod} />
      <Route path="/client-wins" component={ClientWins} />
      <Route path="/about" component={About} />
      <Route path="/work-with-us" component={WorkWithUs} />
      <Route path="/contact" component={Contact} />
      {/* Dedicated Cal.com booking pages */}
      <Route path="/visibility-scan" component={VisibilityScan} />
      <Route path="/strategy-audit" component={StrategyAudit} />
      {/* Application form */}
      <Route path="/apply" component={Apply} />
      {/* Legal */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-conditions" component={TermsConditions} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router base={basePath}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
