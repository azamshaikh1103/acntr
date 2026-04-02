const Card = (props) => {
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",
    marginBottom: "16px",
  };

  return <div style={cardStyle}>{props.children}</div>;
};

export default Card;
 