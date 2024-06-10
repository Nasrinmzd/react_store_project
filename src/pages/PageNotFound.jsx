import { Link } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] py-24">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-6 text-sm rounded rotate-12 absolute py-1">
        Page Not Found
      </div>
      <div className="mt-4 text-white">
        <Link to="/">
          <Button>Go home</Button>
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
