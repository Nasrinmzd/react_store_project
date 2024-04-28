import CategoriesList from "../components/main/CategoriesList"
import ProductsList from "../components/main/ProductsList"

function AllProducts({searchTerm}) {
    return (
        <main className="flex flex-col justify-center md:flex-row m-2 h-full">
        <div className="w-[14rem]">
          <CategoriesList />
        </div>
        <div className="w-[100%] md:w-3/5 lg:w-4/5 sm:mt-2 m-auto">
          <ProductsList searchTerm={searchTerm} />
        </div>
      </main>
    )
}

export default AllProducts
