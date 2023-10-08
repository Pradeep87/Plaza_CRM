import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="pageNotFound">
      <div>
        <h2>Page Not Found</h2>
        <Link to={"/"}>Go Back</Link>
      </div>
    </div>
  );
};

export default NotFound;
