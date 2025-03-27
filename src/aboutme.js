import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
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
            backgroundColor: "#99CCFF", fontFamily: "'Roboto', sans-serif", padding: '20px', 
            textAlign: 'center', transition: 'all 0.3s ease',
            opacity: fadeIn ? 1 : 0, transition: 'opacity 1s ease-in-out'
        }}>
            <h3 style={{
                fontSize: '2rem', color: 'black', fontWeight: 'bold', marginBottom: '20px',
                letterSpacing: '1px', textTransform: 'uppercase', background: 'linear-gradient(45deg, #f0f8ff, #99CCFF)',
                WebkitBackgroundClip: 'text', opacity: fadeIn ? 1 : 0, transition: 'opacity 1s ease-in-out'
            }}>About Me</h3>

            <div style={{
                backgroundColor: "#ffffff", borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px', textAlign: 'left', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto',
                display: 'flex', alignItems: 'center', transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
                <img
                    src="/images/wat.jpg"
                    alt="Profile"
                    style={{
                        width: '150px', height: '150px', borderRadius: '50%', marginRight: '20px', border: '4px solid #007BFF',
                        transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
                <div>
                    <p style={{ fontSize: '16px', color: '#333' }}>
                        <strong>ชื่อ:</strong> นางสาววัทนวิภา นาข้าวต้ม (ชื่อเล่น: เอิร์น)<br />
                        <strong>อายุ:</strong> 21 ปี<br />
                        <strong>เกิดวันที่:</strong> 06 พฤษภาคม 2546<br />
                        <strong>สัญชาติ:</strong> ไทย <strong>ศาสนา:</strong> พุทธ<br />
                        <strong>การศึกษา:</strong> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (ปีที่ 3)<br />
                        <strong>คณะ:</strong> วิทยาลัยเทคโนโลยีอุตสาหกรรม สาขาอิเล็กทรอนิกส์ (คอมพิวเตอร์)<br />
                    </p>
                </div>
            </div>

            <div style={{
                backgroundColor: "#ffffff", borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px', textAlign: 'left', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto',
                display: 'flex', alignItems: 'center', borderLeft: '4px solid #007BFF', transition: 'transform 0.3s ease'
            }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{
                        color: '#007BFF', cursor: 'pointer', transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >Hobbies</h4>
                    <ul style={{ textAlign: 'left', listStyleType: 'circle', marginLeft: '20px' }}>
                        <li>ทำอาหาร</li>
                        <li>ออกกำลังกาย</li>
                        <li>ร้องเพลง</li>
                        <li>อ่านหนังสือ</li>
                        <li>ทบทวนเนื้อหาที่เรียน</li>
                    </ul>
                </div>
                <div style={{ flex: 1, paddingLeft: '20px' }}>
                    <h4 style={{
                        color: '#007BFF', cursor: 'pointer', transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >Personality</h4>
                    <p style={{ fontSize: '16px', color: '#333' }}>
                        เป็นคนร่าเริง พูดเก่ง และสามารถเข้ากับคนอื่นได้ง่าย แต่บางครั้งจะต้องถามซ้ำหรือต้องให้คนพูดทวนหลายๆ ครั้งถึงจะเข้าใจ
                    </p>
                </div>
            </div>

            <div style={{
                backgroundColor: "#ffffff", borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px', textAlign: 'left', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto',
                display: 'flex', alignItems: 'center', borderLeft: '4px solid #007BFF', transition: 'transform 0.3s ease'
            }}>
                <div style={{ flex: 1 }}>
                    <h4 style={{
                        color: '#007BFF', cursor: 'pointer', transition: 'color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.color = '#FFCC33'}
                    onMouseOut={(e) => e.target.style.color = '#007BFF'}
                    >Family</h4>
                    <p style={{ fontSize: '16px', color: '#333' }}>
                        <strong>บิดาชื่อ:</strong> นายอนุกุล นาข้าวต้ม อายุ 52 ปี อาชีพ: พนักงานเย็บกระเป๋า ที่บริษัทบลูไล้ท์อุตสาหกรรมจำกัด<br />
                        <strong>มารดาชื่อ:</strong> นางวัชรา สงเคราะห์ธรรม อายุ 48 ปี อาชีพ: เจ้าหน้าที่รักษาความปลอดภัยที่ธนาคารกรุงเทพ สาขาปทุมธานี
                    </p>
                </div>
            </div>

            <button
                onClick={goToHome}
                style={{
                    padding: '10px 20px', fontSize: '16px', margin: '20px', backgroundColor: "#007BFF", color: 'white',
                    border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'transform 0.3s ease, background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#FFCC33'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#0056b3'}
            >
                Go to Home
            </button>
        </div>
    );
}
