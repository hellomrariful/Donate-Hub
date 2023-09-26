import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="w-40 h-28 flex items-center justify-center mx-auto mt-96">
        <img src="https://i.ibb.co/LCNvH2m/error.png" alt="" />
      </div>
      <div className="mx-auto text-center mt-14">
        <h1 className="text-6xl text-slate-400">404</h1>
        <p className="mt-3 text-2xl text-[#FF444A] ">This page could not be found.</p>
        <Link to={"/"}>
          <button className="bg-[#009444] text-white px-7 py-3 rounded text-xl mt-5">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
