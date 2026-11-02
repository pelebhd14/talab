import ArrowR from '../../assets/arrowR.png'
import ArrowL from '../../assets/arrowL.png'
import './contentCard.css';

export default function ContentCard({
    subtitle,
    content,
    items,
    rows,
    headers,
    contentAfter,
    hasPrev,
    hasNext,
    onNext,
    onPrev,
    number,
    processSteps,
    page
}) {
    return (
        <div className="content-card">
            <div className="content-card-body">
                {subtitle && <h1 className="sub-title">{subtitle}</h1>}
                {number && <h1 className="number">{number}</h1>}

                {content && <p className="content">{content}</p>}

                {items && items.length > 0 && (
                    page ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'right', fontFamily: 'ploni-reg', fontSize: '1.2rem' }}>
                            {items.map((item, index) => (
                                <div key={index} style={{ textAlign: 'right' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <ul className="content-list">
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )
                )}

                {processSteps ? (
                    <div className="process-flow-container">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step-wrapper" style={{ width: '100%' }}>


                                <table className="content-table mini-process-table">
                                    <thead>
                                        {index === 0 && headers && (
                                            <tr>
                                                {headers.map((header, hIndex) => (
                                                    <th key={hIndex}>{header}</th>
                                                ))}
                                            </tr>
                                        )}
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{step.responsibility}</td>
                                            <td>{step.action}</td>
                                            <td>{step.time}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {index < processSteps.length - 1 && (
                                    <div className="process-arrow">↓</div>
                                )}

                            </div>
                        ))}
                    </div>
                ) : (

                    headers && rows && (
                        <table className="content-table">
                            <thead>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex}>{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
                )}

                {contentAfter && <p className="content">{contentAfter}</p>}
            </div>

            <div className="arrows">
                {hasNext && (
                    <img src={ArrowL} alt="arrowL" onClick={onNext} />
                )}
                {hasPrev && (
                    <img src={ArrowR} alt="arrowR" onClick={onPrev} />
                )}
            </div>
        </div>
    );
}