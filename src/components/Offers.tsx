import React from 'react'

export interface offersType {
  photo: string;
  paragraph: string;
  title: string;
  description: string;
}

const offers:Array<offersType> = [
  {photo:"flights", paragraph:"Внутренние рейсы", title:"Большие скидки.", description:"Бронируйте внутренние рейсы от ₹1459."},
  {photo:"hotels", paragraph:"Международные отели", title:"Наслаждайтесь скидками до 20% на международные отели.", description:"Используйте это предложение для бронирования с trxvl."},
  {photo:"cars", paragraph:"Аренда автомобилей", title:"Экономьте на аренде.", description:"Получите скидку до 25% на аренду автомобилей по всему миру."},
  {photo:"tours", paragraph:"Экскурсии и туры", title:"Откройте для себя новые места.", description:"Скидки до 30% на экскурсии и туры с trxvi."},
]

const Offers: React.FC = () => {

  const offersRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const scrollContainer = offersRef.current;

    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY * 7.5; 
      };

      scrollContainer.addEventListener('wheel', handleWheel);

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
    
  }, []);

  return (
    <div className="offers">
      <div className="offers__title">Предложения</div>
      <div className="offers__blur"></div>
      <ul ref={offersRef} className="offers__inner">
      {
          offers.map((obj, i) => 
            <li key={i} className="offers__block">         
              <img src={`/img/offers/${obj.photo}.png`} alt=""/>
              <div className="offers__block--info">
                <p>{obj.paragraph}</p>
                <div className="info__title">{obj.title}</div>
                <div className="info__description">{obj.description}</div>
                <button className="info__button">Забронировать сейчас</button>
              </div>
            </li>
          )
      }

      </ul>
    </div>
  )
}

export default Offers
