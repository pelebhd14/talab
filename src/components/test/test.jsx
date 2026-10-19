import React, { useState } from 'react'; 

export default function TestPage() {

  const [userName, setUserName] = useState('');

  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  
  return (
    <div className="phone-screen">
        
      <input
        type="text"
        value={userName}
        onChange={handleChange}
        placeholder="הקלד שם..."
      />

      <button>שלח מידע</button>

    </div>
  );
}