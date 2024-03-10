import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images";

function LoginPage() {

  return (
    <div>
    <div className="flex items-center justify-center min-h-screen">
      <img
        className="w-full h-full object-cover object-center"
        src={images.jenia}
      />
      <div className="absolute flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-3xl">LoginPage</p>
          <Link to="/register" className="text-blue-500 underline">
            Go to Register
          </Link>
        </div>
      </div>
    </div>

    </div>
  );
}

export default LoginPage;
