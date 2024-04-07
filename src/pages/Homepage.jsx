import Footer from "../components/Footer";
import PageNav from "../components/header/PageNav";
import Sidebar from "../components/main/Sidebar";
import ProductsList from "../components/main/ProductsList";

function Homepage() {
  return (
    <>
      <header className="container text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover bg-no-repeat h-100">
        <PageNav />
        <h1 className="flex justify-end text-5xl leading-normal font-medium mt-56">
          Explore the World of Luxury:
          <br />
          Welcome to Our Store!
        </h1>
      </header>
      <main className="flex justify-center items-center">
        <Sidebar />
        <ProductsList />
      </main>

      <Footer />
    </>
  );
}

export default Homepage;
