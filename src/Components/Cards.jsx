import React from 'react'

const Cards = ({ Icon, Titel, Data, bgcolor, color }) => {
    return (
        <div className='cardsComponent'  >
            <div className="icon"  style={{ backgroundColor: bgcolor, color: color }}>{Icon}</div>
            <div className="titel_data">
                <div className="titel">
                    {Titel}
                </div>
                <div className="data text-center">
                    {Data}
                </div>
            </div>
        </div>
    )
}

export default Cards