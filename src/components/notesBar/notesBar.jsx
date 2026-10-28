import Note from '../../assets/stickyNote.png'

export default function notes() {
    <div className='notes-bar'>
        <div className='segel'>
            <img src={Note} alt="note" />
            <h1>ניהול הדרכה</h1>
        </div>
        <div className='training'>
            <img src={Note} alt="note" />
            <h1>תוכנית הכשרה</h1>
        </div>
        <div className='hachshara'>
            <img src={Note} alt="note" />
            <h1>תוכנית הכשרה</h1>
        </div>
        <div className='trainees'>
            <img src={Note} alt="note" />
            <h1>חניכים בהכשרה</h1>
        </div>
        <div className='environment'>
            <img src={Note} alt="note" />
            <h1>סביבת הכשרה</h1>
        </div>
    </div>
}