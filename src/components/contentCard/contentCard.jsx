import ArrowR from '../../assets/arrowR.png'
import ArrowL from '../../assets/arrowL.png'
import './contentCard.css';
export default function contentCard ({mainTitle, subtitle, content, hasPrev, hasNext, onNext, onPrev}) {
    return (
        <>
        {/* <h2 className='main-title'>{mainTitle}</h2> */}
        <div className="content-card">
            <h1 className="sub-title">{subtitle}</h1>
            <p className="content">{content}</p>
            <div className="arrows">
                {hasPrev && (
                    <img src={ArrowL} alt="arrowL" onClick={onPrev}/>
                )}
                {hasNext && (
                    <img src={ArrowR} alt="arrowR" onClick={onNext} />
                )}
            </div>
        </div>
        </>
    )
}