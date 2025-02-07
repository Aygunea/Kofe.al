import { GoArrowRight } from "react-icons/go";
import map from '../../assets/images/map.webp'
import './buynowarea.css'
import { Link } from 'react-router-dom';
const BuyNowArea = () => {
    return (
        <div className='buynowarea'>
            <div className="container-x">
                <div className="rbt-content flex items-center justify-center flex-col gap-8 text-center">
                    <div className="map-image">
                    <img src={map} alt="" />
                    </div>
                    <h2 className='text-white	'>Yaradıcı Şəxslər üçün unikal dəstək platforma.</h2>
                    <h4 className='text-white'>Yarat 🎉 Paylaş 🚀 Qazan ☕</h4>
                    <Link to="/" className='bg-white rounded-md	flex items-center justify-center heading font-medium'>
                        Qeydiyyat
                        <GoArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BuyNowArea