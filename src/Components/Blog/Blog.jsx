import React, { useEffect } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../Slice/BlogsSlice';
import { FaRegEye } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { FiWatch } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";
import { PiTiktokLogo } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";

const Blog = () => {
    let { id } = useParams();
    let dispatch = useDispatch()
    let blogs = useSelector(state => state.blogs.items)
    useEffect(() => {
        dispatch(fetchBlogs())
    }, [dispatch])
    let blog = blogs.find(blog => blog.id === id);
    if (!blog) {
        return <div>Blog not found!</div>;
    }

    return (
        <div className='flex flex-col items-center' style={{ "backgroundColor": "#F9F9FE" }} >
            <div className="breadcrumb  flex flex-col items-center relative" style={{ "width": "100%", "height": "500px" }}>
                <img src="https://kofe.al/assets/images/bg/bg-image-10.jpg" style={{ "width": "100%", "height": "100%" }} alt="" />
                <div className="blog-content flex items-center justify-center flex-col gap-4 absolute bottom-0 bg-white">
                    <div className="flex gap-1 items-center ">
                        <div className="author-img">
                            <img src={blog.creatorimg} alt="" />
                        </div>
                        <div className="author heading font-semibold text-lg">{blog.creator}</div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className='flex gap-1 items-center'>
                            <FaRegEye />
                            {blog.review}
                        </div>
                        <div className='flex gap-1 items-center'>
                            <IoTimeOutline />
                            {blog.time}
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FiWatch />
                            <span>{blog.readtime} dəq oxuma</span>
                        </div>
                    </div>
                    <h1 className='text-3xl heading font-bold text-center'>{blog.title}</h1>
                    <p className='text-lg font-mdedium text-center'>{blog.description}</p>
                </div>
            </div>
            <div className='blog-body'>
                <div className="blog-content-image">
                    {blog.video ? (
                        <div className="blog-content-video">
                            <iframe width="100%" height="600px" src={blog.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    ) : (
                        <div className="blog-content-image">
                            <img style={{ "width": "100%", "objectFit": "cover" }} src={blog.image} alt="" />
                        </div>
                    )}
                </div>
                <div className="blog-text bg-white text-lg" style={{ "padding": "30px 100px" }}>
                    <p>
                        Üst-üstə yığılan problemlərdən qurtulmaq və bitmək bilməyən gərgin həyata bir-iki nəfəslik fasilə vermək üçün bazar günləri mövcuddur. Bu bazar günlərində “Nə edək?” fikri də əlavə bir qayğıya çevrilir. Bəzən Cavid üçün bu qayğını dostları aradan götürür. Ona zəng edib kiçik şahmat turnirinə dəvət edirlər. Düşünmədən razılaşır. Oyunlar maraqlı keçir. Keçirdi. Daha maraqlı gəlmir. Bu oyunlarda müəyyən gedişlərdən sonra hər şey bəlli olur.
                        <br></br>
                        <br></br>
                        Uduzduqdan sonra sakitcə oyunu izləməyə başlayan Cavid ətrafa da baxır. Bu kafedə maraqlı kitablar və posterlər var. Elə gələn insanlar da müxtəlif yerlərdən gəlir. Məsələn bir Yapon qız dayanıb yer gözləyir. Papağında olan bayraq və gözləri onun haralı olduğunu çox rahat şəkildə sezdirir. Yenə də “Bizimkilərdən biri ola bilər” düşüncəsi Cavidi tərk etsin deyə, nəhayət, bu qızdan öz ana dilində sözlər çıxmağa başlayır.
                        <br></br>
                        <br></br>
                        Posterlərdə filmlər var. Hər film bir eranın simvolu, həmin eranın bitmiş olduğunu göstərən bayraq kimidir. Daha maraqlı filmlər çəkilmir. İnsanlar köhnə filmlərə baxmaqdan da bir qədər soyumuş kimi olmağa başlayıb.
                        <br></br>
                        <br></br>
                        Elə bu düşüncələrlə bir oyunun bitməsinə şahidlik edən Cavid gözlərini mayak işıqları kimi hərəkət etdirməyə davam edir. Dostları deyib-gülür. Vaxtla oynamaq adrenalin verir. 2-3 saniyə qalmış bütün illərin davasını etmiş kimi olursan.
                        <br></br>
                        <br></br>
                        Mayak işıqları kassada çalışan komandaya tərəf gedib dayanır.
                        <br></br>
                        <br></br>
                        Kassanın arxasında sarışın qız dayanıb. Bu, filmlərdə və ya instaqramda olan gözə girən sarışınlıq deyil. Əməliyyat və süni saç əkmələrlə eybəcərləşdirilmiş sarışınlıq deyil. Bu, həmən sarışınlıqdır ki, bir çox rəssam, şair onu axtarır. Daha çox rahatlıq və doğmalıq aurası yaradan sarışınlıqdır. Cavid özünü “Necə də gözəl təbəssümü var” fikrindən qaçıra bilmir. Saçlarının buruq olması, dərisinin bəyaz olması və ya gözlərinin nə qədər qəribə olması detallarını unudur, sadəcə təbəssümünə kilidlənir.
                        <br></br>
                        <br></br>
                        İntibah dövründə portret duruşları üçün namizəd olacaq bu xanım, kofe evində kassa arxasında durur. Kassa ətrafı artıq Florensiya kimi bir yerdir. Cavid gözlərini bir qədər başqa istiqamətə çevirməli olur. Bunu etmək zərurəti duyur. O, çoxdan subay deyil. Onun üçün bu tip baxışlar tabu sayılır. Hətta yaradıcı ruhlu biri olsan da, bir insana baxa biləcəyin xüsusi bir müddət var. O müddətdən sonra sənin kim olduğunun heç bir əhəmiyyəti yoxdur.
                        <br></br>
                        <br></br>
                        Cavid mayak funksiyasını bərpa etmək üçün dairəvi hərəkətə keçir. Keçir ki, eyni məntəqəyə təkrar qayıda bilsin. Digər oturan müştərilərə baxır. Maraqlı bir məqam yaranır. Sən demə, müştərilərin çoxu eyni xanıma baxır. Onların baxışında da eyni ehtiyac sezilir. Sanki bu xanımın təbəssümü səhrada susuz qalmış səyyahlar üçün uzadılmış bir qab su kimidir. Həmin suya baxıb tələsmədən içmək və qurumuş dodaqlarını yaş etmək istəyirlər. Sən demə, hərkəs ona baxır. Sən demə, hərkəsin həmin təbəssümə ehtiyacı var. Evdə və işdə görmədikləri təbəssümdür bu. Çox nadir hallarda göstərilən təbəssümdür. Asteroidin düşmə anını görməyə bənzəyən bənzərsizliyi var. Dostları Cavidin çiyninə toxunaraq: “Darıxma gələn dəfə udarsan” - deyib onun həvəsinin ölməməsi üçün öz aləmlərində motivasiya etmiş olurlar. Onlar məkanı tərk edir. Çıxan Cavid həmin təbəssümün istisiylə çıxır. “Görəsən adı nədir” fikri ona yol-yoldaşlığı edir. Cavid anlayır ki, bu qızın adını öyrənsə məsələ daha da dərinə gedəcək. Yorğun ruhu isə heç bir dərinlikdə üzmək istəmir. Sadəcə günəşlənmək ehtiyacı duyur.
                        <br></br>
                        <br></br>
                        Kassanın arxasında Yapon qızına qalıq pul qaytaran Ayan gülümsəyərək “oriqato” deyir. Qapının bağlanma anından öncə oradan çıxan oğlanlara nəzər yetirir. Oğlanlardan birinə qarşı xüsusi maraq göstərir. Qızğın şahmat partiyaları zamanı hər tərəfə baxan və kəşf etməyə çalışan bu oğlanın sakitliyi, müəmmalı enerjisi Ayanı bir qədər çaşdırır. Ona baxmaq tərzi daha əvvəl hiss etmədiyi bir həyəcanı özüylə gətirmiş olur. Oğlanın gözlərində müasir dünyanın insanından çox uzaqda qalmış və məsafəni qorumağa çalışan bir şəxsiyyət gizlənir. Bura gələn oğlanlar kimi deyil. Belə xüsusi bir fərqini vurğulaya bilmir. Bircə onu bilir ki, bu fərq var. Oğlanın dostlarından biri onu “Cavid” deyə çağırır.
                        <br></br>
                        <br></br>
                        “Adını bilirəm” deyən Ayan üçün yeni mərhələ başlayır. “Böyük ehtimal, növbəti bazar günü kafeyə qayıdacaqlar” - deyib işlərinə davam edir. Üzünə təbəssüm qayıdır.
                    </p>
                    <div className="flex gap-2 py-4 px-2 my-6 bg-white" style={{ "border": "2px dashed #e6e3f1", "width": "100%" }}>
                        <a href="#" className="social-btn flex gap-4 items-center">
                            <img src="https://platform-cdn.sharethis.com/img/facebook-white.svg" alt="" />
                            <span style={{ "color": "#4267B2" }}>Paylaş</span>
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center">
                            <img src="https://platform-cdn.sharethis.com/img/messenger-white.svg" alt="" />
                            <span style={{ "color": "#448AFF" }}>Paylaş</span>
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center">
                            <img src="https://platform-cdn.sharethis.com/img/whatsapp-white.svg" alt="" />
                            <span style={{ "color": "#25d366" }}>Paylaş</span>
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center">
                            <img src="https://platform-cdn.sharethis.com/img/twitter-white.svg" alt="" />
                            <span style={{ "color": "#000" }}>Tweet</span>
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center st-btn">
                            <img src="https://platform-cdn.sharethis.com/img/telegram-white.svg" alt="" />
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center st-btn">
                            <img src="https://platform-cdn.sharethis.com/img/linkedin-white.svg" alt="" />
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center st-btn">
                            <img src="https://platform-cdn.sharethis.com/img/odnoklassniki-white.svg" alt="" />
                        </a>
                        <a href="#" className="social-btn flex gap-4 items-center st-btn">
                            <img src="https://platform-cdn.sharethis.com/img/vk-white.svg" alt="" />
                        </a>
                    </div>
                    <div className="social-icons py-4" style={{ "gap": "10px", "borderBottom": "1px solid #eaeaea" }}>
                        <a href="#"><TbBrandFacebook /></a>
                        <a href="#"> <FaInstagram /></a>
                        <a href="#"> <FiLinkedin /></a>
                        <a href="#"><PiTiktokLogo /></a>
                        <a href="#"> <FaGlobe /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog