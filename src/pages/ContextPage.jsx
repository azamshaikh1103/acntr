import React, { createContext, useContext, useState } from "react";

const ContextPage = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Props Drilling vs Context API</h2>
      <div className="row">
        <div className="col-md-6 mb-4 border-end">
          <h3>Props Drilling Example</h3>
          <hr />
          <PropsDrilling />
        </div>
        <div className="col-md-6 mb-4">
          <h3>UseContext Example</h3>
          <hr />
          <WithUseContext />
        </div>
      </div>
    </div>
  );
};

const PropsDrilling = () => {
  let [user, setUser] = useState("Azam");
  return (
    <div className="mt-3">
      <h1>Component 1</h1>
      <h2>Hello {user}</h2>
      <PDComponent2 user={user} />
    </div>
  );
};

const PDComponent2 = ({ user }) => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-dark">
      <h1>Component 2</h1>
      <PDComponent3 user={user} />
    </div>
  );
};

const PDComponent3 = ({ user }) => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-dark">
      <h1>Component 3</h1>
      <PDComponent4 user={user} />
    </div>
  );
};

const PDComponent4 = ({ user }) => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-dark">
      <h1>Component 4</h1>
      <PDComponent5 user={user} />
    </div>
  );
};

const PDComponent5 = ({ user }) => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-dark">
      <h1>Component 5</h1>
      <h4>Hello {user} againn.....!!!!</h4>
    </div>
  );
};

const userContext = createContext();

const WithUseContext = () => {
  const [user, setUser] = useState("Azam");

  return (
    <userContext.Provider value={user}>
      <div className="mt-3">
        <h1>Component 1</h1>
        <h2>Hello {user}</h2>
        <CtxComponent2 />
      </div>
    </userContext.Provider>
  );
};

const CtxComponent2 = () => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-info">
      <h1>Component 2</h1>
      <CtxComponent3 />
    </div>
  );
};

const CtxComponent3 = () => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-info">
      <h1>Component 3</h1>
      <CtxComponent4 />
    </div>
  );
};

const CtxComponent4 = () => {
  return (
    <div className="ms-4 mt-3 border-start ps-3 border-info">
      <h1>Component 4</h1>
      <CtxComponent5 />
    </div>
  );
};

const CtxComponent5 = () => {
  const user = useContext(userContext);

  return (
    <div className="ms-4 mt-3 border-start ps-3 border-info">
      <h1>Component 5</h1>
      <h4>Hello {user} againn.....!!!!</h4>
    </div>
  );
};

export default ContextPage;
