import { Search } from "lucide-react";
import { motion } from "framer-motion";
import LinkButton from "../home/LinkButton";

export default function ProductNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Search className="w-20 h-20 text-gray-400" />
      </motion.div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">
        Product Not Found
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-md mb-6">
        Oops! The product you’re looking for doesn’t exist or is unavailable.
        Try searching again or explore our best deals.
      </p>

      {/* Search Input */}
      <div className="flex w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-grow p-3 rounded-l-2xl border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <button className="px-5 bg-blue-500 text-white font-medium rounded-r-2xl shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
          Search
        </button>
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4">
        <LinkButton path="/" linktext="Go Home" />
        <LinkButton path="shop" linktext="Shop" />
      </div>
    </div>
  );
}
