import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";

export function UnexpectedComponent() {
  const { url } = useSelector((state) => state.rootURL);

  return (
    <div className="max-w-1/4 h-screen mx-auto flex flex-col justify-center">
      <div className="my-auto flex flex-col justify-center p-8 border border-solid border-gray-300 rounded">
        <p className="my-4 text-3xl font-bold">Page not found</p>
        <p className="my-4">
          Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
        </p>
        <Link to={`${url}/class`} className="my-4 flex text-blue-500">
          <ArrowBackIosIcon sx={{ fontSize: "1rem", margin: "auto 0" }} />
          <p className="text-base text-blue-500">Back to our site</p>
        </Link>
        <div className="my-4 w-full border border-solid border-gray-300" />
      </div>
    </div>
  );
}
