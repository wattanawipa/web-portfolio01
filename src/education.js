import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3Alt, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Education() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    useEffect(() => {
        setFadeIn(true);
    }, []);
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div style={{
            backgroundColor: "#99CCFF",
            fontFamily: "'Roboto', sans-serif",
            padding: '40px',
            minHeight: '100vh',
            opacity: fadeIn ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
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
                    color: 'black',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginBottom: '30px',
                    opacity: fadeIn ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                }}>Education & Skills</h2>

                <div style={{
                    padding: '20px',
                    border: '2px solid #007BFF',
                    borderRadius: '10px',
                    marginBottom: '30px',
                }}>
                    <h3 style={{
                        color: '#007BFF',
                        fontSize: '1.5rem',
                        marginBottom: '10px',
                        borderBottom: '2px solid #007BFF',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >
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
                        <div style={{ textAlign: "center", marginBottom: '20px' }}>
                            <img
                                src="/images/ee.jpg"
                                alt="Profile"
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    borderRadius: '50%',
                                    transition: 'transform 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <li>
                            <strong>ปัจจุบัน:</strong> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ภาควิชาวิศวกรรมเทคโนโลยีอิเล็กทรอนิกส์ สาขาคอมพิวเตอร์
                        </li>
                    </ul>
                </div>
                <div style={{
                    padding: '20px',
                    border: '2px solid #007BFF',
                    borderRadius: '10px',
                    marginBottom: '30px',
                }}>
                    <h3 style={{
                        color: '#007BFF',
                        fontSize: '1.5rem',
                        marginBottom: '10px',
                        borderBottom: '2px solid #007BFF',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >
                        Internship Experience
                    </h3>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                        <li style={{ marginBottom: '10px' }}>
                            ช่วงมีนาคม 2023 - พฤษภาคม 2023
                            ตำแหน่งฝึกงานช่างเทคนิค ที่บริษัท แซนมินา-ไซ ซิสเต็ม (ประเทศไทย) จำกัด
                        </li>
                    </ul>
                </div>

                <div style={{
                    padding: '20px',
                    border: '2px solid #007BFF',
                    borderRadius: '10px',
                }}>
                    <h3 style={{
                        color: '#007BFF',
                        fontSize: '1.5rem',
                        marginBottom: '10px',
                        borderBottom: '2px solid #007BFF',
                        display: 'inline-block',
                        paddingBottom: '5px',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >
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
                    <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '20px', marginTop: '20px' }}>
                        <FontAwesomeIcon
                            icon={faJava}
                            size="2x"
                            style={{
                                transition: 'transform 0.3s ease, color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <FontAwesomeIcon
                            icon={faHtml5}
                            size="2x"
                            style={{
                                transition: 'transform 0.3s ease, color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <FontAwesomeIcon
                            icon={faCss3Alt}
                            size="2x"
                            style={{
                                transition: 'transform 0.3s ease, color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                        <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            style={{
                                transition: 'transform 0.3s ease, color 0.3s ease',
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.2)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        />
                    </div>
                </div>
            </div>

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
                    onMouseOver={(e) => e.target.style.backgroundColor = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#0056b3'}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
