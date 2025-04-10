import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">AdvisorConnect</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/analysts" className="text-gray-700 hover:text-blue-600">
              Analysts
            </Link>
            <Link
              to="/distributors"
              className="text-gray-700 hover:text-blue-600"
            >
              Distributors
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-blue-600"
            >
              Login
            </Link>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
