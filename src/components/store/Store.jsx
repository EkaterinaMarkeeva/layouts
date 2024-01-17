import { useState } from "react";
import IconSwitch from "../iconSwitch/IconSwitch";
import CardsView from "../cardsView/CardsView";
import ListView from "../listsView/ListView";
import './style/storeStyle.css';

export default function Store(props) {
  const products = props.products;
  const [status, onSwitch] = useState('view_module');

  const switchStatus = () => {
    onSwitch((prev) => prev === 'view_module' ? prev = 'view_list' : prev = 'view_module');
  }

  return (
    <>
      <div className="menu">
        <IconSwitch icon={status} switchStatus={switchStatus}  />
      </div>
      {status === 'view_module' ? (
        <CardsView cards={products} />
        ) : (
          <ListView items={products} />
      )}
    </>
  )
}
