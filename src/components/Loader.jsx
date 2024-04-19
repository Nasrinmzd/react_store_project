import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="m-auto">
      <ReactLoading
        type={"spinningBubbles"}
        color={"#3b82f6"}
        height={80}
        width={80}
      />
    </div>
  );
}

export default Loader;
