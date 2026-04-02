import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  const RestoHandler = () => {
    let restopath = "/support/supportfromresto";
    navigate(restopath);
  };

  return (
    <div className="container mt-4">
      <h1>Support Page</h1>
      <Link to="/support/supportfromapp">
        <button className="btn btn-warning">Support From App</button>
      </Link>
      <button
        className="btn btn-info"
        style={{ marginLeft: "5px" }}
        onClick={RestoHandler}
      >
        Support From Resto
      </button>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Support;
