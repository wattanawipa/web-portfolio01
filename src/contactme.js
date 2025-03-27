import React from "react";
import { useNavigate } from 'react-router-dom';

export default function ContactMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <div style={{ backgroundColor: "#f0f0f0", textAlign: "center", padding: '20px' }}>
            <h3>ContactMe</h3>
            <div style={{ textAlign: "left",  fontSize: '16px'}}>Phon: 094-740-2615<br/>
            Email: minn7714@gmail.com<br/>
            Line: 094-740-2615<br/>
            address: 9/1 ถนน เกรณาวัฒนะ ตำบล บางปรอก อำเภอ เมืองปทุมธานี 12000
            </div>
            <button
                onClick={goToHome}
                style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
                    backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>
                    Go to Home</button>
        </div>
    );
}