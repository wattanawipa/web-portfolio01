import React from "react";


export default function Home() {
  return (
    <div style={{ backgroundColor: "FFFFFF", display: "flex", padding:'5px', justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: 'center', backgroundColor: '#99CCFF'}}>
        <h1 style={{ color: 'black'}}>Portfolio<br/>แฟ้มสะสมผลงาน</h1>
        <img 
          src="/images/wat.jpg" 
          alt="Profile"
          style={{ width: '300px', height: '300px'}}></img><br/>
        <h3 style={{ color: 'black' }}>Wattanawipa Nakhawtom<br/>นางสาววัทนวิภา นาข้าวต้ม</h3>

            <button style={{ padding: '10px 20px', fontSize: '16px', margin: '10px', backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>About Me</button>
            <button style={{ padding: '10px 20px', fontSize: '16px', margin: '10px', backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>Education</button>
            <button style={{ padding: '10px 20px', fontSize: '16px', margin: '10px', backgroundColor: '#007BFF', color: 'black', border: 'none', borderRadius: '5px' }}>Contact Me</button>
      </div>
    </div>  
  );
}





