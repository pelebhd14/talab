import ArrowR from '../../assets/arrowR.png'
import ArrowL from '../../assets/arrowL.png'
export default function contentCard ({mainTitle, subtitle, content, currentIndex, totalPages, onNext, onPrev}) {
    return (
        <div className="content-card">
            <h1 className="sub-title">{subtitle}</h1>
            <p className="content">{content}</p>
            <div className="arrows">
                {currentIndex > 0 && (
                    <img src={ArrowL} alt="arrow" onClick={onPrev}/>
                )}
                {currentIndex < totalPages - 1 && (
                    <img src={ArrowR} alt="arrow" onClick={onNext} />
                )}
            </div>
        </div>
    )
}