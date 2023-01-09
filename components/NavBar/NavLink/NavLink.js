import styles from './NavLink.module.css'


// icon text drop-down-icon
function NavLink(props) {
  return (
    <li className={styles.nav_link} style={props.textBold ? {fontWeight : '700'} : {} }>
        {props.children}
        {props.image ? <img className={styles.image} src={props.image}/> : ''}
        {props.text}
        {props.dropDownIcon ? <span className={styles.dropdown_icon}/> : ''}
    </li>
  )
}

export default NavLink