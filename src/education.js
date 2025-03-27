import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
      <div style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: '20px' }}>
            <h3>Education</h3><br/>
            <div style={{textAlign: "left", color: "black", fontSize: "16px"}}><h3>ประวัติการศึกษา</h3>
            ระดับประถมศึกษา: โรงเรียนประคองศิลป์<br/>
            ระดับมัธยมศึกษาตอนต้น: โรงเรียนชัยสิทธาวาส "พัฒน์สายบำรุง" สาย วิทย์-คณิต<br/>
            ระดับมัธยมศึกษาตอนปลาย: โรงเรียนชัยสิทธาวาส "พัฒน์สายบำรุง" สาย วิทย์-คณิต<br/>
            ระดับประกาศนียบัตรวิชาชีพขั้นสูง: วิทยาลัยเทคนิคปทุมธานี สาขาวิชา ช่างอิเล็กทรอนิกส์อุตสาหกรรม<br/>
            ขนาดนี้กำลังศึกษาที่ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ภาควิชาวิศวกรรมเทคโนโลยีอิเล็กทรอนิกส์ สาขา คอมพิวเตอร์
            </div>
            <h3 style={{textAlign: "left", color: "black", fontSize: "16px"}}>Skill</h3>
            <ul style={{ textAlign: "left", color: "black", fontSize: '1rem' }}>
          <li>Java</li>
          <li>C/C++</li>
          <li>Phypon</li>
          <li>React/Node.js</li>
          <li>HTML & CSS</li>
          <li>Electronic Circuits</li>
        </ul>
            <button
                onClick={goToHome}
                style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
                    backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>
                    Go to Home</button>
        </div>
    );
}
