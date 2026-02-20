import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#3B82F6",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap"
    }}>
      {["Home","Current Weather","Forecast","Air Quality","Favorites"].map((item) => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`;
        return (
          <Link key={item} to={path} style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "600",
            padding: "5px 10px",
            borderRadius: "5px",
            transition: "0.3s",
          }}
          onMouseOver={(e)=>e.target.style.background="#2563EB"}
          onMouseOut={(e)=>e.target.style.background="transparent"}
          >
            {item}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;