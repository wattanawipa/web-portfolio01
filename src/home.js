import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToAboutMe = () => navigate("/aboutme");
  const goToEducation = () => navigate("/education");
  const goToContactMe = () => navigate("/contactme");
  

  return (
    <div
      style={{
        background: "linear-gradient(45deg, #f0f8ff, #99CCFF)",
        animation: "moveBackground 5s ease infinite",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        minHeight: "100vh",
        fontFamily: "'Arial', sans-serif",
      }}>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#99CCFF",
          padding: "30px 20px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          marginBottom: "40px",
          maxWidth: "800px",
          width: "100%",
          position: "relative",
        }}>
        <h1
          style={{
            color: "black",
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "10px",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}>Portfolio<br />แฟ้มสะสมผลงาน</h1>
        <img
          src="/images/wat.jpg"
          alt="Profile"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            border: "5px solid #007BFF",
            marginBottom: "20px",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}/>
        <h3
          style={{
            color: "black",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}>Wattanawipa Nakhawtom<br />นางสาววัทนวิภา นาข้าวต้ม</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {["About Me", "Education", "Contact Me"].map((text, idx) => (
            <button
              key={idx}
              onClick={[goToAboutMe, goToEducation, goToContactMe][idx]}
              style={{
                padding: "12px 25px",
                fontSize: "18px",
                margin: "10px",
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "background-color 0.3s ease, transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#FFCC33")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0056b3")}
            >
              <span role="img" aria-label={text.toLowerCase().replace(" ", "")}>
                {idx === 0 ? "👩‍💻" : idx === 1 ? "🎓" : "📞"}
              </span>{" "}
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
