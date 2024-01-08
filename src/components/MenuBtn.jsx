import React from "react";
import { Link } from "react-router-dom";

export const MenuBtn = () => {
  return (
    <div>
      <Link to="/restaurant-app-dg/Menu">
        <button type="button" className="btn btn-light btn-lg">
          Nuestro menú
        </button>
      </Link>
    </div>
  );
};
