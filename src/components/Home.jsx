import userIcon from "/user.png";
 
const Home = (props) => {
  let {
    firstname,
    age = 30,
    place,
    userDetails: { uname, uCity, uCompany },
  } = props;
 
  return (
    <div className="card">
      <img
        src={userIcon}
        className="card-img-top"
        alt="user-icon"
      />
      <div className="card-body">
        <h5 className="card-title">{firstname}</h5>
        <p className="card-text">
          {uname}<br />
          Age: {age}<br />
          {place}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Home;