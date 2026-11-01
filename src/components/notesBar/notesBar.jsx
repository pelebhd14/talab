import Note from '../../assets/stickyNote.png'
import './notesBar.css';
export default function NotesBar({ topicsData, currentTopicIndex, onSelectTopic }) {
    return (
        //         <div className='notes-bar'>
        //     <div className='segel'>
        //         <img src={Note} alt="note" className='noteL'/>
        //         <h1 className='notes-text'>ניהול הדרכה</h1>
        //     </div>
        //     <div className='training'>
        //         <img src={Note} alt="note" className='noteL' />
        //         <h1 className='notes-text'>תוכנית הכשרה</h1>
        //     </div>
        //     <div className='hachshara'>
        //         <img src={Note} alt="note" className='noteL'/>
        //         <h1 className='notes-text'>תוכנית הכשרה</h1>
        //     </div>
        //     <div className='trainees'>
        //         <img src={Note} alt="note" className='noteL'/>
        //         <h1 className='notes-text'>חניכים בהכשרה</h1>
        //     </div>
        //     <div className='environment'>
        //         <img src={Note} alt="note" className='noteL'/>
        //         <h1 className='notes-text'>סביבת הכשרה</h1>
        //     </div>
        // </div>

        // <div className="notes-bar">
        //     {topicsData.map((topic, index) => (
        //         <div
        //             key={topic.id || index}
        //             className={`note-item ${index === currentTopicIndex ? 'active' : ''}`}
        //             onClick={() => onSelectTopic(index)}
        //         >
        //             <div className="note-content-wrapper">
        //                 <img src={Note} alt="note background" className="noteL" />
        //                 <span className="note-text">{topic.title}</span>
        //             </div>

        //         </div>
        //     ))}
        // </div>

        <div className="notes-bar">
            {topicsData.slice().reverse().map((topic, index) => {
                const originalIndex = topicsData.length - 1 - index;
                
                return (
                    <div 
                        key={topic.id || originalIndex} 
                        className={`note-item ${originalIndex === currentTopicIndex ? 'active' : ''}`}
                        onClick={() => onSelectTopic(originalIndex)}
                    >
                        <div className="note-content-wrapper">
                            <img src={Note} alt="note background" className="noteL" />
                            <span className="note-text">{topic.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}
