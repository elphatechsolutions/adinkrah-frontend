import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface CartBtnProps {
  incrementBtn: () => void;
  decrementBtn: () => void;
  quantity: number;
  handleAddToCart: () => void;
  isAnimating: boolean;
}

const CartBtn = ({
  incrementBtn,
  decrementBtn,
  quantity,
  handleAddToCart,
  isAnimating,
}: CartBtnProps) => {
  return (
    <div className="flex flex-row sm:flex-row items-stretch gap-4 relative">
      {/* Quantity Selector */}
      <div className="flex items-center justify-between border border-gray-300 rounded-md p-2 sm:w-auto">
        <button
          onClick={decrementBtn}
          className="p-1 text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="text-lg font-semibold px-4">{quantity}</span>
        <button
          onClick={incrementBtn}
          className="p-1 text-xl font-medium text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        disabled={isAnimating}
        className="bg-[#d9d9d9] text-black font-semibold py-3 px-6 rounded-md flex items-center gap-2 relative"
      >
        <ShoppingCart className="w-5 h-5" /> Add To Cart
      </button>

      {/* Animated cart flying effect */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: -60, x: 80, scale: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute right-4 top-2"
          >
            <ShoppingCart className="w-6 h-6 text-green-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartBtn;
