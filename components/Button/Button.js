import styles from './Button.module.css'

function Button(props) {
  return (
    <button className={styles.primary_btn+' '+
    (props.large ? styles.large : '')+' '+
    (props.lightFont ? styles.light_font : '')+' '+
    (props.glowOnHover ? styles.glow_on_hover : '')+' '
    }
    >{props.text}</button>
  )
}

export default Button