import React from "react";
import Wrapper from "../components/CardWrapper";
import ClassComponent from "../components/ClassComponent";
import Users from "../components/Users";

const HomePage = () => {
  let fname = "Azam";

  let user = {
    uname: "Clark Kent",
    uCompany: "Daily Planet",
    uCity: "Metropolis",
  };

  let userOne = {
    uname: "Bruce Wayne",
    uCompany: "Wayne Enterprises",
    uCity: "Gotham",
  };

  return (
    <div className="main-wrapper">
      <header className="container mt-4 mb-4">
        <h2>Welcome back, {fname}</h2>
      </header>

      <main className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <Wrapper
              firstname={fname}
              age={28}
              place="Pune"
              empId="AZ001"
              userDetails={user}
            />
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <Wrapper
              firstname="Clark"
              place="Metropolis"
              empId="SUP001"
              userDetails={user}
            />
          </div>
          <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
            <Wrapper
              firstname="Bruce"
              place="Gotham"
              empId="BAT001"
              userDetails={userOne}
            />
          </div>
        </div>

        <section className="mt-5 border-top pt-4">
          <Users />
        </section>
      </main>

      <footer>
        <ClassComponent />
      </footer>
    </div>
  );
};

export default HomePage;
