
import React, { useState, useEffect } from 'react';
import './test.css';


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
    question: " ?על מי האחריות והבקרה על מימוש מופעי שעון הפעילות",
    answers: [' ברמה הבה״דית ע״י האג״ם וברמה הגדודית ע״י המג״ד', 'ברמה הבה״דית ע״י הגפ״ה וברמה הגדודית ע״י המג״ד', 'ברמה הבה״דית ע״י הגפ״ה וברמה הגדודית ע״י הקה״דית', 'ברמה הבה״דית ע״י מפקד בהל״צ וברמה הגדודית ע״י המג"ד'
],
    correctIndex: 2
  },
  {
    id: 3,
    question: "?מהי תקופת ההדרכה",
    answers: ["פרק זמן מוגדר שבמסגרתו מתבצע קורס אחד בלבד", " פרק זמן מוגדר שבמסגרתו מתבצעים מספר קורסים שונים", "פרק זמן מוגדר בהכשרה שבו מעבירים תכנים מקצועיים", "פרק זמן מוגדר בהכשרה שבו החניכים מבצעים מבחנים ותרגילים"],
    correctIndex: 1
  },

   {
    id: 4,
    question: "?אילו סיכומים עיתיים יש",
    answers: ["סיכום יומי, סיכום שבוע(חניכים וסגל), סיכום לשבועות עצימים, סיכומי אמצע מחזור וסטטוס הסמכות", " סיכום חודשי, סיכומי אמצע מחזור, סטטוס הסמכות וסיכומי השכר", "סיכום יומי, סיכום שבוע של הסגל בלבד, סיכום לשבועות עצימים וסטטוס הסמכות", "סיכום יומי, סיכום שבוע (חניכים וסגל), סיכום לשבועות עצימים"],
    correctIndex: 0
  },
  //   {
  //   id: 5,
  //   question: "?אילו סיכומים עיתיים יש",
  //   answers: ["סיכום יומי, סיכום שבוע(חניכים וסגל), סיכום לשבועות עצימים, סיכומי אמצע מחזור וסטטוס הסמכות", " סיכום חודשי, סיכומי אמצע מחזור, סטטוס הסמכות וסיכומי השכר", "סיכום יומי, סיכום שבוע של הסגל בלבד, סיכום לשבועות עצימים וסטטוס הסמכות", "סיכום יומי, סיכום שבוע (חניכים וסגל), סיכום לשבועות עצימים"],
  //   correctIndex: 1
  // },

];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timerCount, setTimerCount] = useState(5);

  const currentQuestion = QUESTIONS[currentQuestionIndex];


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
      }, 5000);

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

  // מסך סיכום בסיום המבחן
  if (isFinished) {
    const finalGrade = Math.round((score / QUESTIONS.length) * 100);

    return (
      <div className="quiz-container finish-card">
        <h2>סיימת את המבחן! 🎉</h2>
        <p className="score-text">
          ענית נכון על <strong>{score}</strong> מתוך <strong>{QUESTIONS.length}</strong> שאלות.
        </p>
        <div className="final-grade">ציון סופי: {finalGrade}</div>
        <button className="restart-btn" onClick={() => window.location.reload()}>
          התחל מחדש
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container" dir="rtl">
      <div className="quiz-header">
        <span>שאלה {currentQuestionIndex + 1} מתוך {QUESTIONS.length}</span>
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
  );
}

