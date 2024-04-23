import CategoriesList from "../components/main/CategoriesList";
import ProductsList from "../components/main/ProductsList";


function Homepage({ searchTerm }) {
 
  return (
    <div>
      <header className="w-full text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover h-100">
        <h1 className="text-white text-center lg:text-end sm:text-4xl md:text-5xl lg:text-6xl leading-normal font-medium mt-40 md:mt-52 lg:mt-56">
          Explore the World of Luxury:
          <br />
          Welcome to Our Store!
        </h1>
      </header>
      <main className="flex flex-col md:flex-row m-2 h-full">
        <div className="md:w-2/5 lg:w-1/5">
          <CategoriesList />
        </div>
        <div className="md:w-3/5 lg:w-4/5 sm:mt-2 m-auto">
          <ProductsList searchTerm={searchTerm} />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
