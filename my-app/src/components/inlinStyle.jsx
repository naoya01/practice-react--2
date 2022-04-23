export const InlinStyle = () => {
  const containerStyle = {
    border: "solid 2px  blue",
    borderRadius: "20px",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0px",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "10px",
    borderRadius: "10px"
  };


  return (
    <>
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style-</p>
      <button style={buttonStyle}>FIGHT!</button>
    </div>
    </>
  );
};