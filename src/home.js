import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const goToAboutMe = () => {navigate("/aboutme");};
  const goToEducation = () => {navigate("/education");};
  const goToContactMe = () => {navigate("/contactme");};

  return (
    <div style={{ backgroundColor: "FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", padding: '20px' }}>
      <div style={{ textAlign: 'center', backgroundColor: '#99CCFF', padding: '10px' }}>
        <h1 style={{ color: 'black' }}>Portfolio<br />แฟ้มสะสมผลงาน</h1><br />
        <img
          src="/images/wat.jpg"
          alt="Profile"
          style={{ width: '300px', height: '300px' }} />
        <br /><br />
        <h3 style={{ color: 'black' }}>Wattanawipa Nakhawtom<br />นางสาววัทนวิภา นาข้าวต้ม</h3>

        <div>
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
              backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}
                onClick={goToAboutMe}>About Me</button>
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
              backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}
                onClick={goToEducation}>Education</button>
          <button 
            style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
              backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}
                onClick={goToContactMe}>Contact Me</button>
        </div>
      </div>
    </div>
  );
}
