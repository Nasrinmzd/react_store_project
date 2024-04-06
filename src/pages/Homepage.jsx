import Footer from "../components/Footer";
import PageNav from "../components/header/PageNav";

function Homepage() {
  return (
    <>
      <header className="container text-white py-2 px-6 bg-[url('../public/images/bg_image.jpg')] bg-center bg-cover bg-no-repeat h-100">
        <PageNav />
      </header>
      <Footer />
    </>
  );
}

export default Homepage;
