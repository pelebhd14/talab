import Note from '../../assets/stickyNote.png'
import './notesBar.css';
export default function NotesBar({ topicsData, currentTopicIndex, onSelectTopic }) {
    return (
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
