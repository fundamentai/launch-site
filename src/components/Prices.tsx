import React, { FC } from 'react'

export interface PricesProps {
    className?: string
    date: string
}

const Prices: FC<PricesProps> = ({ className = '', date = '' }) => {
    return (
        <div className={`${className}`}>
            {date}
            {/* <div className={`flex items-center border-2 border-green-500 rounded-lg ${contentClass}`}>
                <span className="text-green-500 !leading-none">${String(price)}</span>
            </div> */}
        </div>
    )
}

export default Prices
