import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import React, { useState, useEffect } from 'react';
import './test.css';
import { useNavigate } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    question: "מהו שעון פעילות?",
    answers: ["גרף המגדיר לסגל מה עושים במהלך היום ברמה הפלוגתית", " גרף המגדיר את זמני האימונים אל מול זמני המנוחה",
      " גרף המגדיר את העיתוי של מופעי ההדרכה המרכזיים בהכשרה", "גרף המגדיר את שעות תחקיר הכנות הסגלים"],
    correctIndex: 2
  },
  {
    id: 2,
    question: " על מי האחריות והבקרה על מימוש מופעי שעון הפעילות?",
    answers: [' ברמה הבה״דית ע״י האג״ם וברמה הגדודית ע״י המג״ד', 'ברמה הבה״דית ע״י הגפ״ה וברמה הגדודית ע״י המג״ד', 'ברמה הבה״דית ע״י הגפ״ה וברמה הגדודית ע״י הקה״דית', 'ברמה הבה״דית ע״י מפקד בהל״צ וברמה הגדודית ע״י המג"ד'
    ],
    correctIndex: 2
  },
  {
    id: 3,
    question: "מהי תקופת ההדרכה?",
    answers: ["פרק זמן מוגדר שבמסגרתו מתבצע קורס אחד בלבד", " פרק זמן מוגדר שבמסגרתו מתבצעים מספר קורסים שונים", "פרק זמן מוגדר בהכשרה שבו מעבירים תכנים מקצועיים", "פרק זמן מוגדר בהכשרה שבו החניכים מבצעים מבחנים ותרגילים"],
    correctIndex: 1
  },

  {
    id: 4,
    question: "אילו סיכומים עיתיים יש?",
    answers: ["סיכום יומי, סיכום שבוע(חניכים וסגל), סיכום לשבועות עצימים, סיכומי אמצע מחזור וסטטוס הסמכות", " סיכום חודשי, סיכומי אמצע מחזור, סטטוס הסמכות וסיכומי השכר", "סיכום יומי, סיכום שבוע של הסגל בלבד, סיכום לשבועות עצימים וסטטוס הסמכות", "סיכום יומי, סיכום שבוע (חניכים וסגל), סיכום לשבועות עצימים"],
    correctIndex: 0
  },
  {
    id: 5,
    question: "מתי יבוצע תהליך של הערכת ההכשרה?",
    answers: ["כשעולה צורך מהשטח או אחת לשלוש שנים", "כשיש שינוי בהשכרה או אחת לשנתיים", "לבחירת היועץ", "לבחירת מפקד בהל״צ"],
    correctIndex: 1
  },

  {
    id: 6,
    question: "היכן יתועדו וישמרו תיקי החניך ותיקי הסגל?",
    answers: ["מעל״ה", "תיקיות רשת", "קמפוס דיגיטלי", "מחברת מפקד הפלוגה"],
    correctIndex: 2
  },
  {
    id: 7,
    question: "מתי יתבצע תהליך של פיתוח הכשרה?",
    answers: ["בעת חלופת תפקידים במסגרת", "כל שנה חדשה", "בעת מלחמה", "כאשר משתנה התו״ל"],
    correctIndex: 3
  },
  {
    id: 8,
    question: "סמן את המשפט הנכון ביותר",
    answers: ["תיק היסוד כולל בתוכו לו״ז מפורט של ההכשרה", "בתיק היסוד מתועד מבנה הקורס והתנאים הנדרשים לקיומו ", " תיק היסוד או מסמך לא מחייב אשר מומלץ להיעזר בו", "תיק היסוד הוא קבוע ולא משתנה בשום תנאי"],
    correctIndex: 1
  },
  {
    id: 9,
    question: "סמן את המשפט הלא נכון",
    answers: ["כדי שמבחן יאושר הוא צריך לעבור אצל גורם מפקד בדרגת רס״ן, אישור תורתי ואישור הדרכתי", "המבחנים העיוניים לא יעלו על 50% מסך המבחנים המסמיכים בהכשרה", "לכל מבחן יבנה תופס תשובון (תשובות)", "יש לקיים שיחה אישית עם חניך שנכשל במבחן עיוני/ מעשי בו יוסברו לחניך נקודות הכשל"],
    correctIndex: 1
  },
  {
    id: 10,
    question: "איזה פרקים יכללו בתיק המדריך?",
    answers: ["תוכן עיניינים, תיק תוכן, מבואות, נספחים, סיכום", "דף אישורים, תוכן עיניינים, מערך שיעור, נספחים, סיכום", "דף אישורים, מבואות, מערך שיעור, נספחים, תיק תוכן", "דף אישורים, תוכן עיניינים, מערך שיעור, תיק תוכן, סיכום"],
    correctIndex: 2
  },
  {
    id: 11,
    question: "יש לכתוב מסמך תפיסת הפעלה למאמן. מה מהסעיפים הבאים נכון?",
    answers: ["סטטוס של שימוש במאמן לכל אחד מבעלי התפקידים", "ניתוח הכשירויות המושגות במאמן לכל אחד מבעלי התפקידים", "ציון מינימלי על מנת לעבור תרגיל במאמן", "אפקטיביות המאמן בלחימה"],
    correctIndex: 1
  },
  {
    id: 12,
    question: "על ועדת הקליטה לנהל גאנט הכולל מספר נושאים, איזה נושא מהבאים לא קיים בגאנט?",
    answers: ["מעקב אחר פיתוח תכולות ההדרכה", "מעקב אחר הכנת הסגלים", "מעקב אחר עדכון תיקי היסוד הרלוונטיים", 'מעקב אחר תהליך בניית האמל"ח ביחידה'],
    correctIndex: 3
  },
  {
    id: 13,
    question: "ציין דרך פעולה לקידום חניך מתקשה",
    answers: ["עידוד והעלאת מוטיבציה", "שעות תגבור פרטניות", 'שיחות אישיות', "יש לשאול את החניך איזה תפקיד הוא מעוניין לבצע"],
    correctIndex: 1
  },
  {
    id: 14,
    question: "מה אינה עילה להעלאת חניך לוועדת הערכה?",
    answers: ["אי הסכמה עם גורם פיקודי", "הפסד של יום הכשרה", "קושי בביצוע מבחנים", "אירוע ערכי/נורמטיבי/משמעתי"],
    correctIndex: 3
  },
  {
    id: 15,
    question: "התבחינים להצטיינות והתבחינים למופת יתייחסו לאחד ממרכיבים אלו (סמן מרכיב אחד)",
    answers: ['התנהגות לפי ערכי רוח צה"ל', 'מקום ראשון בתוצאות הכש"ג', "ללא עבירות משמעת", "חביב על כלל אנשי הסגל"],
    correctIndex: 2
  },
  {
    id: 16,
    question: "היכן מנוהל התיק האישי?",
    answers: ["בתיקיות הרשת", "בטלפון הנייד של המפקדים בקובץ שיתופי", "בקמפוס הדיגיטלי", 'באתר בהל"צ'],
    correctIndex: 2
  },
  {
    id: 17,
    question: 'איזה מידע לא נמצא בדו"ח העברת מקל?',
    answers: ["נוכחות בשיעורים מקצועיים מסמיכים", 'נתוני ת"ש רפואה וברה"ן', "אירועים חריגים במהלך ההכשרה", 'פרטים אישיים-מקום מגורים ומצב משפחתי'],
    correctIndex: 0
  },
  {
    id: 18,
    question: "ציין 3 קריטריונים לסימון פוטנציאל 'מאותרים להדרכה'",
    answers: ["יכולות חניכה גבוהות, בעל נורמות וערכים גבוהים, יכולת למידה עצמית", 'יכולת הובלה ורתימה, אסרטיביות, בעל ידע מקצועי רב', "בעל ראייה מערכתית, אינטליגנציה רגשית גבוהה, יכולת העברת מסרים", 'רעות, יכולת הובלה ורתימה, כריזמה'],
    correctIndex: 0
  },
  {
    id: 19,
    question: "לפי אילו צירים תבנה ההכנת סגל?",
    answers: ["חניכים, סגל, תוכנית הכשרה, סביבת הכשרה", "הדרכתי, פיקודי, אישי, מקצועי", "פיקודי, כללי, הדרכתי, מקצועי", 'פיקודי, מקצועי, הדרכתי, עבודת סגל'],
    correctIndex: 3
  },
  {
    id: 20,
    question: 'ציין מטרה אחת להערת סגל/מפקדים',
    answers: ["שימור כשירותו של איש בסגל", 'הצבת סטנדרט גבוהה בסגל הפיקודי', "גיבוש כלל הסגל", 'בניית החוסן אצל המפקד'],
    correctIndex: 0
  },
  {
    id: 21,
    question: "מאיזו דרגה יש להגדיר את מנגנוני סיום התפקיד?",
    answers: ['מ"מ', 'מ"כ', 'מ"פ', 'רב אלוף'],
    correctIndex: 2
  },
  {
    id: 22,
    question: "כמה שלבים יש בתהליך של הרחקת איש סגל?",
    answers: ['8', '6', '5', '9'],
    correctIndex: 1
  },

];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timerCount, setTimerCount] = useState(5);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

const navigate = useNavigate();

    const handleStart = () => {
        navigate('/');
    };

  useEffect(() => {
    let timer;
    if (isChecked) {
      setTimerCount(5);
      const interval = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);

      timer = setTimeout(() => {
        clearInterval(interval);
        handleNextQuestion();
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearInterval(interval);
      };
    }
  }, [isChecked]);


  const handleSelectAnswer = (index) => {
    if (isChecked) return;
    setSelectedAnswer(index);
  };


  const handleCheck = () => {
    if (selectedAnswer === null) return;

    setIsChecked(true);

    // עדכון הציון במידה והתשובה נכונה
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  // מעבר לשאלה הבאה או סיום
  const handleNextQuestion = () => {
    setIsChecked(false);
    setSelectedAnswer(null);

    if (currentQuestionIndex + 1 < QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const finalGrade = Math.round((score / QUESTIONS.length) * 100);

    return (
      <div className="quiz-container finish-card">
        <h2 className='finish-note'>סיימת את המבחן</h2>
        <p className="score-text">
          ענית נכון על <strong>{score}</strong> מתוך <strong>{QUESTIONS.length}</strong> שאלות
        </p>
        <div className="final-grade">ציון סופי: {finalGrade}</div>
        <button className="restart-btn" onClick={handleStart}>
          התחל מחדש
        </button>
      </div>
    );
  }

  return (
    <>
    
    <div className="quiz-container" dir="rtl">
      <div className='logos-test'>
        <img className='logoP-test' src={Pele} alt="Pele" />
        <img className='logoB-test' src={Bahalaz} alt="Bahalaz" />
      </div>

      <h3 className="question-title">{currentQuestion.question}</h3>

      <div className="answers-list">
        {currentQuestion.answers.map((answerText, index) => {
          let buttonClass = "answer-btn";

          if (selectedAnswer === index) {
            buttonClass += " selected";
          }

          if (isChecked) {
            if (index === currentQuestion.correctIndex) {
              buttonClass += " correct"; // תשובה נכונה - ירוק
            } else if (selectedAnswer === index) {
              buttonClass += " incorrect"; // תשובה שגויה שנבחרה - אדום
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleSelectAnswer(index)}
              disabled={isChecked}
            >
              {answerText}
            </button>
          );
        })}
      </div>

     <div className="quiz-header">
        <span>שאלה {currentQuestionIndex + 1} מתוך {QUESTIONS.length}</span>
      </div>

      {/* כפתור בדיקה / חיווי טיימר */}
      <div className="quiz-footer">
        {!isChecked ? (
          <button
            className="check-btn"
            onClick={handleCheck}
            disabled={selectedAnswer === null}
          >
            בדיקה
          </button>
        ) : (
          <div className="timer-info">
            עובר לשאלה הבאה בעוד <strong>{timerCount}</strong> שניות...
          </div>
        )}
      </div>
    </div>
    </>
  );
}

