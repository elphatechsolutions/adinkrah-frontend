import { CiShoppingCart } from "react-icons/ci";
const Cart = ({ itemsInCart }: { itemsInCart: number }) => {
  return (
    <div className="relative">
      <CiShoppingCart className="w-8 h-8 cursor-pointer" />
      {itemsInCart > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full bg-blue-600 text-white text-xs font-bold">
          {itemsInCart}
        </span>
      )}
    </div>
  );
};

export default Cart;
