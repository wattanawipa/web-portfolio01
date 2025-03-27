import React from "react";
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    }
    return (
        <div style={{ backgroundColor: "#f0f0f0",textAlign: "center", padding: '20px' }}>
            <h3>About Me</h3>
            <div style={{ fontSize: '16px', textAlign: "left" }}>
                หนูชื่อนางสาววัทนวิภา นาข้าวต้ม ชื่อเล่นชื่อเอิร์น<br />
                อายุ 21 ปี เกิดวันที่ 06 พฤษภาคม 2546<br />
                สัญชาติ: ไทย ศาสนา: พุทธ<br/>
                ตอนนี้กำลังศึกษาอยู่ที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือเป็นนักศึกษาชั้นปีที่ 3<br />
                คณะ วิทยาลัยเทคโนโลยีอุตสาหกรรม สาขาอิเล็กทรอนิกส์(คอมพิวเตอร์)<br />
                เวลาว่างชอบทำ: ชอบทำอาหาร,ออกกำลังกาย,ร้องเพลง,อ่านหนังสือและทบทวนเนื้อหาเกี่ยวกับสิ่งที่เรียน<br/>
                ลักษณะนิสัยของหนู เป็นคนร่าเริง พูดเก่ง เป็นคนเข้ากับคนอื่นได้ค่อยข้างง่าย
                และเป็นคนที่ค่อนข้างเข้าใจอะไรยากต้องถามซ้ำหรือต้องให้คนพูดทวนหลายๆครั้ง<br/>
                พ่อชื่อ นายอนุกุล นาข้าวต้ม อายุ 52 ปี ทำอาชีพ: เป็นพนักงานเย็บกระเป๋า<br/>
                แม่ชื่อ นางวัชรา สงเคราะห์ธรรม อายุ 48 ปี ทำอาชีพ: เป็นเจ้าหน้าที่รักษาความปลอดภัย ที่ธนาคารกรุงเทพ สาขา ปทุมธานี<br/>
                
            </div>
            <button
                onClick={goToHome}
                style={{ padding: '10px 20px', fontSize: '16px', margin: '10px',
                    backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>
                    Go to Home</button>
        </div>
    );
}
