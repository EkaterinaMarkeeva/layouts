import './style/shopItemStyle.css';

export default function ShopItem(props) {
  return (
   <>
      <img src={props.item.img} className="image" />
      <h2>{props.item.name}</h2>
      <p>{props.item.color}</p>
      <p className="price">${props.item.price}</p>
      <button className="btn">Add to card</button>
   </>
  )
}
