import CarpLoader from "@/app/components/loader/CarpLoader";

function Loader() {
  return (
    <div
      className="flex justify-center items-center w-auto"
      style={{ height: "64vh" }}
    >
      <CarpLoader />
    </div>
  );
}

export default Loader;
