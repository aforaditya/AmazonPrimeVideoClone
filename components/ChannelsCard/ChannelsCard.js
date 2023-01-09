import styles from './ChannelsCard.module.css'

function ChannelsCard(props) {
    return (
        <div className={styles.card} style={{backgroundImage : `url("${props.image}")` }}>
            <div className={styles.card_hero}>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                {props.children}
            </div>

            <div className={styles.gallery}>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/LionsgatePlay-426X2946_V1.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_Discovery.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Erosnow-426X2948_V1.jpg"/>

               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/hoichoi-426X2946_V1.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Docubay-426X2947_V1.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/ShortsTV-426X2944_V1.jpg"/>

               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/Mubi-426X2946_V1.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/MLP/426x294_MANORAMAMAX.jpg"/>
               <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/Channels/Hayu_logo_for_MLP_Grid.jpg"/>
            </div>
        </div>
    )
}

export default ChannelsCard