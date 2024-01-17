import './style/iconSwitchStyle.css';

export default function IconSwitch(props) {
  return <button className="material-icons" onClick={props.switchStatus}>{props.icon}</button>
}
