import './style/shopCardStyle.css';

export default function ShopCard(props) {
 return (
  <>
    <h2>{props.card.name}</h2>
    <p>{props.card.color}</p>
    <div className="footer">
      <p>${props.card.price}</p>
      <button className="btn">Add to card</button>
    </div>
  </>
 )
}
