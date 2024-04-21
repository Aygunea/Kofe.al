import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import './style.css'

function DefaultAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container-x">
      <div className="accordion flex gap-4 flex-col">
        <Accordion className="accordion-item" open={open === 1}>
          <AccordionHeader className={`accordion-header ${open === 1 ? 'text-primary' : ''}`} onClick={() => handleOpen(1)}>
            Kofe.al nədir?
            <span> {open === 1 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 1 ? 'border-top' : ''}`}>
            {open === 1 && (
              <>Kofe.al, pərəstişkarlarınızdan birbaşa gəlir əldə etməyiniz üçün ən sadə yoldur. Siz bəxşişlər qəbul edə, üzvlük səviyyələri yarada, onlayn mağaza aça və 9% platforma haqqı ilə komissiya ala bilərsiniz.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 2}>
          <AccordionHeader className={`accordion-header ${open === 2 ? 'text-primary' : ''}`} onClick={() => handleOpen(2)}>
            Kofe.al kimlər üçündür?
            <span> {open === 2 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 2 ? 'border-top' : ''}`}>
            {open === 2 && (
              <>Sənətkarlar, Rəssamlar, Streamerlər, Podkastçılar, Yazıçılar, Fotoqraflar, Kinorejissorlar, İnfluencerlər və hər cür yaradıcı şəxslər Kofe.al-dan istifadə edirlər.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 3}>
          <AccordionHeader className={`accordion-header ${open === 3 ? 'text-primary' : ''}`} onClick={() => handleOpen(3)}>
            Ödənişi necə alacağam?
            <span> {open === 3 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 3 ? 'border-top' : ''}`}>
            {open === 3 && (
              <>Bəxşiş ödənişləri növbəti gün sizin bank kartınıza köçürüləcək. Məhsul və xidmət satışından əldə edilən gəlirlər isə VÖEN-li bank hesabınıza köçürülür. Bu qədər sadə!</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 4}>
          <AccordionHeader className={`accordion-header ${open === 4 ? 'text-primary' : ''}`} onClick={() => handleOpen(4)}>
            Xidmət haqqı nə qədərdir?
            <span> {open === 4 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 4 ? 'border-top' : ''}`}>
            {open === 4 && (
              <>Biz bütün əməliyyat haqları və komissiyamız daxil olmaqla 9% komissiya alırıq.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 5}>
          <AccordionHeader className={`accordion-header ${open === 5 ? 'text-primary' : ''}`} onClick={() => handleOpen(5)}>
            Ödənilən vəsaitlər ilə kofe almalıyam?
            <span> {open === 5 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 5 ? 'border-top' : ''}`}>
            {open === 5 && (
              <>Təbii ki, yox! Biz qəhvəni sevirik, amma bu, sadəcə dostluq metaforasıdır. Sadəcə, işinizi dəstəkləmək üçün pərəstişkarlarından "qəhvə almağı" xahiş etmək sadəcə "ianə vermək"dən daha bəsitdir. Siz həmçinin "qəhvə"ni öz zövqünüzü uyğun başqa bir şeyə dəyişə bilərsiniz. Məsələn kofe əvəzinə; çay, dönər, hamburger, su və ya pizza istəyə bilərsiniz.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 6}>
          <AccordionHeader className={`accordion-header ${open === 6 ? 'text-primary' : ''}`} onClick={() => handleOpen(6)}>
            Kofe.al ilə nə qədər qazana bilərəm?
            <span> {open === 6 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 6 ? 'border-top' : ''}`}>
            {open === 6 && (
              <>Hər şey sizin izləyici və pərəstişkarlarınız ilə münasibət və kommunikasiyadan asılıdır. Kofe.al olaraq toplanacaq məbləğə heç bir limit tətbiq etmirik. Yetər ki, siz yaradın, paylaşın, satın və qazanın.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 7}>
          <AccordionHeader className={`accordion-header ${open === 7 ? 'text-primary' : ''}`} onClick={() => handleOpen(7)}>
            Kofe.al xarici analoqlardan fərqi nədir?
            <span> {open === 7 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 7 ? 'border-top' : ''}`}>
            {open === 7 && (
              <>Patreon, BMC, Ko-fi kimi xarici analoqlardan əsas fərqimiz həm yaradıcı şəxslərn, həm də pərəstişkarlar üçün verdiyi üstünlüklər və dil seçimidir. Yaradıcı şəxslər xarici analoqlardan ödənişləri almaq üçün Azərbaycanda aktiv olmayan PayPal və Stripe kimi platformalardan ödənişləri almaq məcburiyyətindədilər. Pərəstişkarlar isə xarici ödəniş sistemləri ilə ödəniş etdiklərində əlavə 18% ƏDV vergisi ödəmək məcburiyyətində qaldıqlarından, ödəmələrin miqdarı daha az olur. Kofe.al ilə isə əlavə komissiya olmadan, yerli bank kartınıza ödəniş ala bilərsiniz.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 8}>
          <AccordionHeader className={`accordion-header ${open === 8 ? 'text-primary' : ''}`} onClick={() => handleOpen(8)}>
            Xarici pərəstişkarlarımdan bəs ödəniş ala bilərəm?
            <span> {open === 8 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 8 ? 'border-top' : ''}`}>
            {open === 8 && (
              <>Bəli, biz stripe və PayPal ilə də ödənişlər alaraq, sizin hesabınıza köçürə bilərik. Hazırda bu xidmət üzərində işlər aparılır və komissiya dərəcələri təyin edildikdən sonra, təqdim ediləcək.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 9}>
          <AccordionHeader className={`accordion-header ${open === 9 ? 'text-primary' : ''}`} onClick={() => handleOpen(9)}>
            Kofe.al kimindir?
            <span> {open === 9 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 9 ? 'border-top' : ''}`}>
            {open === 9 && (
              <> Kofe.al layihəsi ABŞ-da qeydiyyatdan keçmiş BonPara Inc. şirkətinin Azərbaycandakı nümayəndəliyi olan BonPara MMC şirkətinin layihəsidir. Komanda və şirkətimiz 500 Global Akselerasiya proqramının məzunu və bir çox startup müsabiqələrin qalibidir.</>
            )}
          </AccordionBody>
        </Accordion>
        <Accordion className="accordion-item" open={open === 10}>
          <AccordionHeader className={`accordion-header ${open === 10 ? 'text-primary' : ''}`} onClick={() => handleOpen(10)}>
            Sizin xeyriniz nədir?
            <span> {open === 10 ? <FaMinus /> : <FaPlus />}</span>
          </AccordionHeader>
          <AccordionBody className={`accordion-body ${open === 10 ? 'border-top' : ''}`}>
            {open === 10 && (
              <>BonPara olaraq şirkətimiz e-ticarət, onlayn ödənişlər və loyallıq proqramı üzrə müxtəlif həllər üzərində çalışır. Kofe.al bizim ilk sub layihəmizdir.</>
            )}
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}

export default DefaultAccordion;

