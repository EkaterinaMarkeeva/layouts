import ShopCard from '../shopCard/ShopCard';
import './style/shopCardStyle.css';

export default function CardsView(props) {
  const card = props.cards.map((card, index) => {
    return <div className='card' 
    style={{ backgroundImage: `url(${card.img})` }}  
    key={index}><ShopCard card={card} /></div>
  })

  return <div className='cards'>{card}</div>
}
