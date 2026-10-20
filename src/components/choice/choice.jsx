import './choice.css'
import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import Book from '../../assets/book.png'
import Note from '../../assets/stickyNote.png'
import Bubble from '../../assets/bubble.png'
import Gaya from '../../assets/gaya.png'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ChoicePage() {
    const navigate = useNavigate();

    const handleTest = () => {
        navigate('/form');
    };

    const handleLearning = () => {
        navigate('/learning');
    };

    const [bubbleNum, setBubbleNum] = useState(0);

    useEffect(() => {
        setBubbleNum(1);
    }, []);

    return (
        <div className='phone-screen'>
            <div className='logos'>
                <img className='Bahalaz' src={Bahalaz} alt="Bahalaz" />
                <img className='Pele' src={Pele} alt="Pele" />
            </div>

            <div className='choice'>
                <div onClick={handleTest}>
                    <img className='note' src={Note} alt="Note" />
                    <span className='book-text'>לבחינה</span>
                </div>
                <div onClick={handleLearning}>
                    <img className='book' src={Book} alt="Book" />
                    <span className='note-text'>לחומר הלימוד</span>
                </div>

            </div>
            <div>
                <img className='Mountain' src={Mountain} alt="Mountain" />
            </div>

            {bubbleNum === 1 && (
                <>
                <div className="speech-bubble-overlay"></div>

                <div className="speech-bubble-wrapper">
                    <div className="speech-bubble">

                        <img className='bubble-img' src={Bubble} alt="bubble" />

                        <button 
                            className="next-btn" 
                            onClick={() => setBubbleNum(2)}
                        >
                           הבא
                        </button>
                        <h1 className='bubble1-header'>?מהו תל"ב</h1>
                        <p className='bubble-first'>תל״ב- תקן לאיכות בהדרכה, התל״ב של זרוע היבשה נקרא : ״יסודות מנצחים״</p>
                        <p className='bubble-sec'>התל״ב מחולק ל 5 נושאים עיקריים</p>
                        <ul className='bubble1-list'>
                            <li>ניהול הדרכה</li>
                            <li>תכנית הכשרה</li>
                            <li>סגל</li>
                            <li>חניכים</li>
                            <li>סביבה</li>
                        </ul>

                        <img className='gaya' src={Gaya} alt="Gaya" />
                    </div>
                </div>
                </>
            )}

            {bubbleNum === 2 && (
                <>
                <div className="speech-bubble-overlay"></div>

                <div className="speech-bubble-wrapper">
                     <img className='bubble-img' src={Bubble} alt="bubble" />

                    <div className="speech-bubble">
                        <button 
                            className="next-btn" 
                            onClick={() => setBubbleNum(3)}
                        >
                           הבא
                        </button>
                        
                        <p className='bubble2-first'>התל״ב נודע ליצירת סטנדרט אחיד באיכות ההדרכה בצה״ל, כאשר נהליו מהווים פקודה מחייבת לכלל ההכשרות בצה״ל</p>
                        <p className='bubble2-sec'>כל שנתיים מתקיימת ביקורת מטכ״לית הבוחנת את יישום ושימוש נהלי התל״ב בבהל״צ</p>
                    </div>
                     <img className='gaya' src={Gaya} alt="Gaya" />
                </div>
                </>
            )}

              {bubbleNum === 3 && (
                <>
                <div className="speech-bubble-overlay"></div>

                <div className="speech-bubble-wrapper">
                     <img className='bubble-img' src={Bubble} alt="bubble" />

                    <div className="speech-bubble">
                        <button 
                            className="next-btn" 
                            onClick={() => setBubbleNum(4)}
                        >
                           הבא
                        </button>
                        
                        <p className='bubble3-first'>לפניכם לומדה בנושא תו התקן לאיכות בהדרכה (תל״ב) ׳יסודות מנצחים׳ הכוללת הסבר קצר על הנהלים ושאלות לתרגול עצמי</p>
                        <p className='bubble3-sec'>מטרת הלומדה הינה היכרות עם נהלי התל״ב, שיפור וייעול ההכשרות בבהל״צ</p>
                        <p className='bubble3-third'>שימו לב כי בלומדה מופיעים הנהלים הרלוונטיים ביותר לזיכרון והבנה, אך בתל״ב עצמו תוכלו למצוא נהלים נוספים ופירוט מעמיק יותר</p>
                    </div>
                     <img className='gaya' src={Gaya} alt="Gaya" />
                </div>
                </>
            )}

            
            {bubbleNum === 4 && (
                <>
                <div className="speech-bubble-overlay"></div>

                <div className="speech-bubble-wrapper">
                    <div className="speech-bubble">

                        <img className='bubble-img' src={Bubble} alt="bubble" />

                        <button 
                            className="next-btn" 
                            onClick={() => setBubbleNum(0)}
                        >
                           הבא
                        </button>
                        <h1 className='bubble1-header'>הוראות</h1>
                        <p className='bubble2-first'>הלומדה מחולקת לפי נושאי התל״ב- תוכלו להיכנס לכל נושא ולעבור על הנהלים המופיעים בו, אין סדר ספציפי לביצוע הלומדה</p>
                        <p className='bubble4-sec'>בתחילת הלומדה ובסוף המעבר על החומר יחכה לכם מבחן הכולל שאלות מכל הפרקים</p>
                        
                        <img className='gaya' src={Gaya} alt="Gaya" />
                    </div>
                </div>
                </>
            )}


        </div>
    )
}