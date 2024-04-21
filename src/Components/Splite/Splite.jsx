import React from 'react'
import './splite.css'
const Splite = () => {
    return (
        <div className='splite'>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <img width={"100%"} src="https://kofe.al/assets/images/splash/layout/az/1_coffee-n.png" alt="" />
                </div>
                <div className="col-span-1 flex flex-col justify-center gap-4 pl-12">
                    <span className='section-btn'>DƏSTƏK AL</span>
                    <h4 className='text-4xl heading font-bold'>Bəxşiş qəbul edin</h4>
                    <p className='text-xl font-normal'>Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları və bəxşiş almaq üçün unikal, əyləncəli və bəsit bir metodu təqdim edir! Kofealdan bəxşiş qutusu kimi istifadə edərək, dəstəkçilərinizin məşğuliyyətinizə töhfə verməsinə imkan verə bilərsiniz.</p>
                    <img src="https://kofe.al/assets/images/icons/kofe-al-types.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Splite