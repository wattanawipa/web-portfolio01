import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div style={{
            backgroundColor: "#f0f0f0",
            fontFamily: "'Roboto', sans-serif",
            padding: '20px',
            textAlign: 'center'
        }}>
            <h3 style={{
                fontSize: '2rem',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '20px'
            }}>About Me</h3>

            <div style={{
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                textAlign: 'left',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <img
                    src="/images/wat.jpg"
                    alt="Profile"
                    style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        marginBottom: '20px',
                        border: '4px solid #007BFF'
                    }} 
                />
                <p style={{ fontSize: '16px', color: '#333' }}>
                    <strong>ชื่อ:</strong> นางสาววัทนวิภา นาข้าวต้ม (ชื่อเล่น: เอิร์น)<br />
                    <strong>อายุ:</strong> 21 ปี<br />
                    <strong>เกิดวันที่:</strong> 06 พฤษภาคม 2546<br />
                    <strong>สัญชาติ:</strong> ไทย, <strong>ศาสนา:</strong> พุทธ<br />
                    <strong>การศึกษา:</strong> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (ปีที่ 3)<br />
                    <strong>คณะ:</strong> วิทยาลัยเทคโนโลยีอุตสาหกรรม, สาขาอิเล็กทรอนิกส์ (คอมพิวเตอร์)<br />
                </p>
            </div>

            <div style={{
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                textAlign: 'left',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <h4 style={{ color: '#007BFF' }}>Hobbies</h4>
                <ul style={{ textAlign: 'left', listStyleType: 'circle', marginLeft: '20px' }}>
                    <li>ทำอาหาร</li>
                    <li>ออกกำลังกาย</li>
                    <li>ร้องเพลง</li>
                    <li>อ่านหนังสือ</li>
                    <li>ทบทวนเนื้อหาที่เรียน</li>
                </ul>
            </div>

            <div style={{
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                textAlign: 'left',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <h4 style={{ color: '#007BFF' }}>Personality</h4>
                <p style={{ fontSize: '16px', color: '#333' }}>
                    เป็นคนร่าเริง พูดเก่ง และสามารถเข้ากับคนอื่นได้ง่าย แต่บางครั้งจะต้องถามซ้ำหรือต้องให้คนพูดทวนหลายๆ ครั้งถึงจะเข้าใจ
                </p>
            </div>

            <div style={{
                backgroundColor: "#fff",
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                textAlign: 'left',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <h4 style={{ color: '#007BFF' }}>Family</h4>
                <p style={{ fontSize: '16px', color: '#333' }}>
                    <strong>พ่อ:</strong> นายอนุกุล นาข้าวต้ม, อายุ 52 ปี, อาชีพ: พนักงานเย็บกระเป๋า ที่บริษัทบลูไล้ท์อุตสาหกรรมจำกัด<br />
                    <strong>แม่:</strong> นางวัชรา สงเคราะห์ธรรม, อายุ 48 ปี, อาชีพ: เจ้าหน้าที่รักษาความปลอดภัยที่ธนาคารกรุงเทพ สาขาปทุมธานี
                </p>
            </div>

            <button
                onClick={goToHome}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    margin: '20px',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                Go to Home
            </button>
        </div>
    );
}

