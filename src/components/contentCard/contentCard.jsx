import ArrowR from '../../assets/arrowR.png'
import ArrowL from '../../assets/arrowL.png'
import './contentCard.css';
// export default function contentCard ({mainTitle, subtitle, content,items,rows, hasPrev, hasNext, onNext, onPrev, contentAfter, headers}) {
//     return (
//         <div className="content-card">
//             <h1 className="sub-title">{subtitle}</h1>
//             {content && (
//                 <p className="content">{content}</p>
//             )}

//             {items && items.length > 0 && (
//                 <ul className="content-list">
//                     {items.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             )}

//             {headers && rows && (
//                 <table className="content-table">
//                     <thead>
//                         <tr>
//                             {headers.map((header, index) => (
//                                 <th key={index}>{header}</th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {rows.map((row, rowIndex) => (
//                             <tr key={rowIndex}>
//                                 {row.map((cell, cellIndex) => (
//                                     <td key={cellIndex}>{cell}</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//             {contentAfter && <p className="content">{contentAfter}</p>}
//             <div className="arrows">
//                 {hasPrev && (
//                     <img src={ArrowL} alt="arrowL" onClick={onPrev}/>
//                 )}
//                 {hasNext && (
//                     <img src={ArrowR} alt="arrowR" onClick={onNext} />
//                 )}
//             </div>
//         </div>
//     )
// }

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
    onPrev 
}) {
    return (
        <div className="content-card">
            <div className="content-card-body">
                {subtitle && <h1 className="sub-title">{subtitle}</h1>}
                
                {content && <p className="content">{content}</p>}

                {items && items.length > 0 && (
                    <ul className="content-list">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}

                {headers && rows && (
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
                )}

                {contentAfter && <p className="content">{contentAfter}</p>}
            </div>

            <div className="arrows">
                {hasNext && (
                    <img src={ArrowL} alt="arrowL" onClick={onNext} />
                )}
                  {hasPrev && (
                    <img src={ArrowR} alt="arrowR" onClick={onPrev}/>
                )}
            </div>
        </div>
    );
}