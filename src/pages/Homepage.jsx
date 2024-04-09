import Sidebar from "../components/main/Sidebar";
import ProductsList from "../components/main/ProductsList";

function Homepage() {
  return (
    <div>
      <header className="container text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover h-100">
        <h1 className="flex justify-end text-5xl leading-normal font-medium mt-56">
          Explore the World of Luxury:
          <br />
          Welcome to Our Store!
        </h1>
      </header>
      <main className="flex justify-center items-center m-2">
        <Sidebar />
        <ProductsList />
      </main>

    </div>
  );
}

export default Homepage;
