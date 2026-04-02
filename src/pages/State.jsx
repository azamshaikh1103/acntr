import { useState } from "react";

const StatePage = () => {
  //   let number = 1;
  let [number, setNumber] = useState(0);
  let [employee, setEmployee] = useState({ empName: "Azam", empAge: 22 });

  const increementHandler = () => {
    // console.log("Increement function is called after the button click");
    // number = number + 1;
    // console.log(number);
    // setNumber(number + 1);
    setNumber((prevVal) => prevVal + 1);
  };

  const ModifyAge = () => {
    setEmployee((prevEmp) => {
      return { ...prevEmp, empAge: prevEmp.empAge + 1 };
    });
  };

  const increement = (val) => {
    setNumber((prevVal) => prevVal + val);
  };

  const decreement = (val) => {
    setNumber((prevVal) => prevVal - val);
  };

  //   const sayHello = () => {
  //     console.log("I am saying hello even before the button is clicked ");
  //   };
  return (
    <div>
      <h1>Increement Activity</h1>
      {/* <h3>Number is {number}</h3>
      <button className="btn btn-primary" onClick={increementHandler}>
        Increement by 1
      </button> */}
      {/* <button
        style={{ marginLeft: "5px" }}
        className="btn btn-secondary"
        onClick={sayHello()}
      >
        Say Hello
      </button> */}
      <br />
      <h2>
        Name: {employee.empName}, Age: {employee.empAge}
      </h2>
      <button
        style={{ marginLeft: "5px" }}
        className="btn btn-primary"
        onClick={ModifyAge}
      >
        Update Age
      </button>

<br />
      <h3>Number is {number}</h3>
      <button
        className="btn btn-primary"
        onClick={() => {
          increement(50);
        }}
      >
        Increement by 50
      </button>
      <button
        style={{ marginLeft: "5px" }}
        className="btn btn-primary"
        onClick={() => {
          increement(100);
        }}
      >
        Increement by 100
      </button>
      <button
        style={{ marginLeft: "5px" }}
        className="btn btn-danger"
        onClick={() => {
          decreement(50);
        }}
      >
        Decreement by 50
      </button>
      <button
        style={{ marginLeft: "5px" }}
        className="btn btn-danger"
        onClick={() => {
          decreement(100);
        }}
      >
        Decreement by 100
      </button>
    </div>
  );
};

export default StatePage;
 