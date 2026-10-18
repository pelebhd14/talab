import './choice.css'
import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import Book from '../../assets/book.png'
import Note from '../../assets/stickyNote.png'
import { useNavigate } from 'react-router-dom';

export default function ChoicePage() {
    const navigate = useNavigate();

     const handleTest = () => {
        navigate('/test');
    };
    
    const handleLearning = () => {
        navigate('/learning');
    };

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
        </div>
    )
}