import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AdvisorSection } from "./components/AdvisorSection";
import { ServicesSection } from "./components/ServicesSection";
import { Footer } from "./components/Footer";
import { SeeAllPage } from "./pages/SeeAllPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { AdvisorProfilePage } from "./pages/AdvisorProfilePage";
import type { Advisor } from "./types";

// Sample data - in a real app, this would come from an API
const sampleAnalysts: Advisor[] = [
  {
    id: "1",
    name: "Priya Sharma",
    type: "analyst",
    yearsOfExperience: 12,
    sebiNumber: "INH000001234",
    languages: ["English", "Hindi"],
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.8,
    reviewCount: 156,
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    type: "analyst",
    yearsOfExperience: 8,
    sebiNumber: "INH000005678",
    languages: ["English", "Hindi", "Telugu"],
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: "3",
    name: "Sarah Williams",
    type: "analyst",
    yearsOfExperience: 15,
    sebiNumber: "INH000009012",
    languages: ["English"],
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.9,
    reviewCount: 203,
  },
];

const sampleDistributors: Advisor[] = [
  {
    id: "4",
    name: "Amit Patel",
    type: "distributor",
    yearsOfExperience: 10,
    arnNumber: "ARN-12345",
    languages: ["English", "Gujarati", "Hindi"],
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.7,
    reviewCount: 142,
  },
  {
    id: "5",
    name: "Meera Reddy",
    type: "distributor",
    yearsOfExperience: 6,
    arnNumber: "ARN-67890",
    languages: ["English", "Tamil", "Telugu"],
    imageUrl:
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.5,
    reviewCount: 87,
  },
  {
    id: "6",
    name: "John Smith",
    type: "distributor",
    yearsOfExperience: 9,
    arnNumber: "ARN-13579",
    languages: ["English"],
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.6,
    reviewCount: 124,
  },
];

const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main>
      <HeroSection />
      <AdvisorSection
        title="SEBI Registered Analysts"
        advisors={sampleAnalysts}
        type="analyst"
      />
      <AdvisorSection
        title="Mutual Fund Distributors"
        advisors={sampleDistributors}
        type="distributor"
      />
      <ServicesSection />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/analysts"
          element={<SeeAllPage type="analyst" advisors={sampleAnalysts} />}
        />
        <Route
          path="/distributors"
          element={<SeeAllPage type="distributor" advisors={sampleDistributors} />}
        />
        <Route
          path="/advisor/:id"
          element={<AdvisorProfilePage advisors={[...sampleAnalysts, ...sampleDistributors]} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
