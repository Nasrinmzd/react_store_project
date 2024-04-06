import Footer from "../components/Footer";
import PageNav from "../components/header/PageNav";

function Homepage() {
  return (
    <>
      <header className="container text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover bg-no-repeat h-100">
        <PageNav />
        <h1 className="flex justify-end text-5xl leading-normal font-medium mt-60">
          Explore the World of Luxury:
          <br />
          Welcome to Our Store!
        </h1>
      </header>
      <Footer />
    </>
  );
}

export default Homepage;
