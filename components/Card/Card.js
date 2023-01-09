import Button from '../Button/Button'
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.card} style={{
            backgroundImage : `url("${props.image}")`,
            backgroundPosition : props.backgroundPosition,
            paddingTop : props.paddingTop
            }}>
            <div className={styles.card_hero} style={{
                float : props.floatRight ? 'right' : 'left',
            }}>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                <Button text={props.buttonText} large glowOnHover/>
                {props.children}
            </div>
        </div>
    )
}

export default Card