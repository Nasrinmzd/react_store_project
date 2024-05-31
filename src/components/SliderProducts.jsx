import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductItem from "./main/ProductItem";

function SliderProducts({ products, category }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <div className="mx-8 md:mx-20 my-4">
      <Carousel
        responsive={responsive}
        partialVisbile={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        draggable={true}
      >
        {filteredProducts.map((product) => (
          <div className="sm:w-[230px] sm:h-[350px] md:w-[280px] md:h-[300px]" key={product.id}>
            <ProductItem product={product} size="small" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderProducts;
