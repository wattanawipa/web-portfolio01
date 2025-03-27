import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div style={{
            backgroundColor: "#f9f9f9",
            fontFamily: "'Roboto', sans-serif",
            padding: '40px',
            minHeight: '100vh',
        }}>
            <div style={{
                backgroundColor: "#fff",
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '800px',
                margin: '0 auto',
            }}>
                <h2 style={{
                    textAlign: 'center',
                    color: '#007BFF',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '30px'
                }}>Education & Skills</h2>

                {/* Education Section */}
                <div style={{ textAlign: "left", color: "#333", fontSize: "1rem", marginBottom: '30px' }}>
                    <h3 style={{
                        color: '#007BFF',
                        fontSize: '1.5rem',
                        marginBottom: '10px',
                        borderBottom: '2px solid #007BFF',
                        display: 'inline-block',
                        paddingBottom: '5px'
                    }}>
                        Education History
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>ประถมศึกษา:</strong> โรงเรียนประคองศิลป์
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>มัธยมศึกษาตอนต้น:</strong> โรงเรียนชัยสิทธาวาส "พัฒน์สายบำรุง" สาย วิทย์-คณิต
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>มัธยมศึกษาตอนปลาย:</strong> โรงเรียนชัยสิทธาวาส "พัฒน์สายบำรุง" สาย วิทย์-คณิต
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <strong>ประกาศนียบัตรวิชาชีพขั้นสูง:</strong> วิทยาลัยเทคนิคปทุมธานี สาขาวิชา ช่างอิเล็กทรอนิกส์อุตสาหกรรม
                        </li>
                        <li>
                            <strong>ปัจจุบัน:</strong> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ภาควิชาวิศวกรรมเทคโนโลยีอิเล็กทรอนิกส์ สาขาคอมพิวเตอร์
                        </li>
                    </ul>
                </div>

                {/* Skills Section */}
                <div style={{ textAlign: "left", color: "#333", fontSize: "1rem" }}>
                    <h3 style={{
                        color: '#007BFF',
                        fontSize: '1.5rem',
                        marginBottom: '10px',
                        borderBottom: '2px solid #007BFF',
                        display: 'inline-block',
                        paddingBottom: '5px'
                    }}>
                        Skills
                    </h3>
                    <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>Python</li>
                        <li>React/Node.js</li>
                        <li>HTML & CSS</li>
                        <li>Electronic Circuits</li>
                    </ul>
                </div>

                {/* Go to Home Button */}
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <button
                        onClick={goToHome}
                        style={{
                            padding: '12px 30px',
                            fontSize: '16px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, transform 0.2s ease',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#007BFF"}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
