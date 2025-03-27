import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ContactMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }

    return (
        <div style={{ backgroundColor: "#f0f0f0", padding: '20px', minHeight: '100vh' }}>
            <div style={{ backgroundColor: '#007BFF', color: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 'bold' }}>Contact Me</h3>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}><span role="img" aria-label="phone">📞</span> Phone</h4>
                    <p style={{ fontSize: '18px' }}>094-740-2615</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}><span role="img" aria-label="email">📧</span> Email</h4>
                    <p style={{ fontSize: '18px' }}>minn7714@gmail.com</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}><span role="img" aria-label="line">🟢</span> Line</h4>
                    <p style={{ fontSize: '18px' }}>094-740-2615</p>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}><span role="img" aria-label="address">🏠</span> Address</h4>
                    <p style={{ fontSize: '18px' }}>
                        9/1 ถนน เกรณาวัฒนะ ตำบล บางปรอก อำเภอ เมืองปทุมธานี 12000
                    </p>
                </div>

                {/* Add Instagram and GitHub Links with Emojis */}
                <div style={{ marginBottom: '20px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <span role="img" aria-label="instagram">📸</span> Instagram &nbsp;
                        <a href="https://www.instagram.com/__.wtnwpnkt/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#007BFF' }}>
                        __.wtnwpnkt
                        </a>
                    </h4>
                </div>
                <div>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        <span role="img" aria-label="github">🐙</span> GitHub &nbsp;
                        <a href="https://github.com/wattanawipa?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', color: '#007BFF' }}>
                            myGithub
                        </a>
                    </h4>
                </div>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button
                    onClick={goToHome}
                    style={{
                        padding: '12px 24px',
                        fontSize: '18px',
                        marginTop: '20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
