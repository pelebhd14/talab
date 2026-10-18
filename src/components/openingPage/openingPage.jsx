import Bahalaz from '../../assets/bahalaz.png'
import Pele from '../../assets/pele.png'
import Mountain from '../../assets/background.png'
import './openingPage.css'

export default function OpeningPage() {
    return(
        <div className='phone-screen'>
        <div className='logos'>
            <img src={Bahalaz} alt="Bahalaz" />
            <img src={Pele} alt="Pele" />
        </div>

        <div>
        <img className='Mountain' src={Mountain} alt="Mountain" />
        </div>

        </div>
    )
}