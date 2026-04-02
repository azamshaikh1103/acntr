import userIcon from "/user.png";
 
const Wrapper = (props) => {
  let {
    firstname,
    age = 30,
    place,
    userDetails: { uname, uCity, uCompany },
  } = props;
 
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        src={userIcon}
        className="card-img-top mx-auto mt-3"
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
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
export default Wrapper;