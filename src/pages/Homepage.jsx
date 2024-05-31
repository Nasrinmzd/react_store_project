import SliderProducts from "../components/SliderProducts";
import { useProducts } from "../context/ProductContext";
import CategoryHeader from "../components/CategoryHeader";

function Homepage() {
  const { products } = useProducts();

  return (
    <div>
      <header className="w-full text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover h-[42rem]">
        <h1 className="text-white text-center lg:text-end sm:text-4xl md:text-5xl lg:text-6xl leading-normal font-medium mt-40 md:mt-52 lg:mt-56">
          Explore the World of Luxury:
          <br />
          Welcome to Our Store!
        </h1>
      </header>
      <main>
        <div>
          <CategoryHeader category="Beauty" />
          <SliderProducts products={products} category="groceries" />
        </div>
        <div>
          <CategoryHeader category="Groceries" />
          <SliderProducts products={products} category="beauty" />
        </div>
        <div>
          <CategoryHeader category="Furniture" />
          <SliderProducts products={products} category="furniture" />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
