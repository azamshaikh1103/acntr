import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  let [role, setRole] = useState("Analyst");
  let [salary, setSalary] = useState(60000);

  const hikeHandler = () => {
    setSalary(75000);
  };

  useEffect(() => {
    console.log("This method is called repeatedy");
  });

  useEffect(() => {
    console.log("This method is called only for the first time");
  }, []);

  useEffect(() => {
    console.log("This method is called based on the dependancy -role");
  }, [role]);

  return (
    <div className="container mt-4">
      {console.log("Component is rendered")}
      <h1>LifeCycle</h1>
      <h3>Employee Info</h3>
      <h4>
        Salary : {salary}, Role: {role}
      </h4>
      <button
        className="btn btn-secondary"
        onClick={() => {
          setRole("Manager");
        }}
      >
        Promotion
      </button>
      <button className="btn btn-warning ms-2" onClick={hikeHandler}>
        Hike
      </button>
    </div>
  );
};

export default LifeCycle;
