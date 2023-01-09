import styles from './Footer.module.css'

function Footer(props) {
  return (
    <div className={styles.footer}>
        <img src='https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png' />
        <ul>
            <li>Terms and Privacy Notice </li>
            <li>Send us feed back </li>
            <li>Help </li>
        </ul>
        <label>© 1996-2022, Amazon.com, Inc. or its affiliates</label>
    </div>
  )
}

export default Footer