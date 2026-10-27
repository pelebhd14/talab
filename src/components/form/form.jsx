import './form.css'
import Mountain from '../../assets/background.png'
import { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

export default function FormPage() {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    user_name: '',
    user_num: '',
    user_gdud: '',
    user_position: ''
  });


  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {

    if (!formData.user_name || !formData.user_num || !formData.user_gdud || !formData.user_position) {
      alert('נא למלא את כל השדות לפני השליחה');
      return;
    }

    navigate('/test', { state: { userData: formData } });

    //   setLoading(true);
    //   setSuccessMessage('');

    //   try {

    //     await addDoc(collection(db, "exam_results"), {
    //       ...formData,
    //       createdAt: new Date()
    //     });

    //     const templateParams = {
    //       user_name: formData.user_name,
    //       user_num: formData.user_num,
    //       user_gdud: formData.user_gdud,
    //       user_position: formData.user_position,
    //     };


    //     await emailjs.send(
    //       'service_qb4pzkx',   
    //       'template_o1pal4y',  
    //       templateParams,            
    //       '_7VgbENFlcd2Zm71a'   
    //     );

    //     setSuccessMessage('הנתונים נשמרו ונשלחו בהצלחה!');
    //     setFormData({
    //       user_name: '',
    //       user_num: '',
    //       user_gdud: '',
    //       user_position: ''
    //     });
    //   } catch (error) {
    //     console.error("Error submitting data: ", error);
    //     setSuccessMessage('אופס, אירעה שגיאה בשליחה. נסי שוב.');
    //   } finally {
    //     setLoading(false);
    //   }
  };


  return (
    <div className="phone-screen">
      <div className='form'>

        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          placeholder="שם מלא"
        />

        <input
          type="text"
          name="user_num"
          value={formData.user_num}  
          onChange={handleChange}
          placeholder="מספר אישי"
        />

        <input
          type="text"
          name="user_gdud"
          value={formData.user_gdud}
          onChange={handleChange}
          placeholder="ענף"
        />

        <input
          type="text"
          name="user_position"
          value={formData.user_position}
          onChange={handleChange}
          placeholder="מדור/פלוגה"
        />
        <button onClick={handleSubmit}
          disabled={loading} className='form-btn'>אני מוכן</button>

          <img className='Mountain-form' src={Mountain} alt="Mountain" />
      </div>

      

    </div>
  );
}