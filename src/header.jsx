import "./header.css";

function DateDisplay() {
  const today = new Date();

  // Extract weekday separately
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });

  // Extract full date separately
  const fullDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        textAlign: "right",
        color: "white",
        fontSize: "15px",
        lineHeight: "1.4",
        fontFamily: "Montserrat",
        padding: "10px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div style={{ fontWeight: "bold", color: "white" }}>{weekday}</div>
      <div style={{ color: "white" }}>{fullDate}</div>
    </div>
  );
}

const Header = () => {
  return (
    <>
      <div className="header-box">
        <p className="header-text">
          Susheeth's Task <span style={{ color: "" }}>Dash</span>board
        </p>
        <DateDisplay />
      </div>
    </>
  );
};
export default Header;
