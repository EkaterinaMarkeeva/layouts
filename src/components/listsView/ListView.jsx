import './style/listViewStyle.css';
import ShopItem from '../shopItem/ShopItem';

export default function ListView(props) {
  const item = props.items.map((item, index) => {
    return <div className='item' key={index}><ShopItem item={item} /></div>
  })

  return <div className='items'>{item}</div>
}
