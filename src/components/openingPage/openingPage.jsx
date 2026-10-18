import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import Gaya from '../../assets/gaya.png'
import Sun from '../../assets/sun.png'
import Camel from '../../assets/camel.png'
import { useNavigate } from 'react-router-dom';
import './openingPage.css'

export default function OpeningPage() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/choice');
    };

    return(
        <div className='phone-screen'>
        <div className='logos'>
            <img className='Bahalaz' src={Bahalaz} alt="Bahalaz" />
            <img className='Pele' src={Pele} alt="Pele" />
        </div>

        <img className='Sun' src={Sun} alt="Sun" />
        <img className='Camel' src={Camel} alt="Camel" />

        <div>
            <span className='pre-header'>ברוכים הבאים ללומדת</span>
            <h1 className='header'>יסודות מנצחים</h1>
            <button onClick={handleStart}>בואו נתחיל</button>
        </div>

        <div className='credits'>
            <img className='gaya' src={Gaya} alt="Gaya" />
            <span className='name-credit'>פותח ע"י רב"ט גאיה בן נון</span>
        </div>

        <div>
        <img className='Mountain' src={Mountain} alt="Mountain" />
        </div>

        </div>
    )
}