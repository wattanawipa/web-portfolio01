import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToAboutMe = () => { navigate("/aboutme"); };
  const goToEducation = () => { navigate("/education"); };
  const goToContactMe = () => { navigate("/contactme"); };

  return (
    <div style={{
      backgroundColor: "#f0f8ff", // เปลี่ยนพื้นหลังเป็นสีฟ้าที่สดใส
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: '40px',
      minHeight: "100vh", // ให้พื้นที่เต็มหน้าจอ
      fontFamily: "'Arial', sans-serif", // เปลี่ยนฟอนต์
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: '#99CCFF', // สีพื้นหลังส่วนหัว
        padding: '30px 20px',
        borderRadius: '15px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // เพิ่มเงา
        marginBottom: '40px',
        maxWidth: '800px',
        width: '100%',
      }}>
        <h1 style={{
          color: 'black',
          fontSize: '2.5rem', // ขนาดตัวอักษรใหญ่ขึ้น
          fontWeight: 'bold',
          marginBottom: '10px',
        }}>
          Portfolio<br />แฟ้มสะสมผลงาน
        </h1>

        <img
          src="/images/wat.jpg"
          alt="Profile"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '5px solid #007BFF',
            marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out', // เพิ่มแอนิเมชั่นให้รูป
          }}
          onMouseOver={(e) => e.target.style.transform = "scale(1.1)"} // เพิ่ม effect ขยายรูปเมื่อชี้
          onMouseOut={(e) => e.target.style.transform = "scale(1)"}
        />

        <h3 style={{
          color: 'black',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginBottom: '20px',
        }}>
          Wattanawipa Nakhawtom<br />นางสาววัทนวิภา นาข้าวต้ม
        </h3>

        {/* ปุ่มต่างๆ */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <button
            style={{
              padding: '12px 25px',
              fontSize: '18px',
              margin: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onClick={goToAboutMe}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
          >
            <span role="img" aria-label="about-me">👩‍💻</span> About Me
          </button>

          <button
            style={{
              padding: '12px 25px',
              fontSize: '18px',
              margin: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onClick={goToEducation}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
          >
            <span role="img" aria-label="education">🎓</span> Education
          </button>

          <button
            style={{
              padding: '12px 25px',
              fontSize: '18px',
              margin: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
            }}
            onClick={goToContactMe}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
          >
            <span role="img" aria-label="contact">📞</span> Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
