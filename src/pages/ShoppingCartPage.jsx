import ShoppingCartItem from "../components/ShoppingCartItem";
import { useCart } from "../context/CartContext";

function ShoppingCartPage() {
  const {cart} = useCart()

  return (
    <section className="min-h-screen bg-gray-700 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl font-semibold text-white">Your Cart</h1>
        </div>

        <div className="mx-auto mt-6 max-w-2xl md:mt-12">
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {cart.map((product) =>{
                    <ShoppingCartItem key={product.id} product={product} />
                  })}
                </ul>
              </div>

              <div className="mt-6 border-t flex items-center justify-between">
                <p className="text-xl font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  408.00
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="min-w-80 px-4 py-4 mt-8 text-white text-xl font-bold rounded transition-all bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default ShoppingCartPage;
