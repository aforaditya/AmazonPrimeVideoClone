import NavBar from '../components/NavBar/NavBar.js'
import Card from '../components/Card/Card.js'
import ChannelsCard from '../components/ChannelsCard/ChannelsCard.js'
import Footer from '../components/Footer/Footer.js'
import Gap from '../components/Gap/Gap.js'
import styles from './index.module.css'
import Head from 'next/head.js'


function HomePage() {
  return <>
  <Head>
    <title>Amazon Prime Video Clone</title>
  </Head>

    <NavBar />
    <Gap />
    
    <Card
      title="Welcome to Prime Video"
      subtitle="Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals"
      buttonText="Start your 30-day free trial"
      image="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg"
      backgroundPosition="right top"
      paddingTop="7%"

    >
      <label>With select credit, debit card, or UPI ID</label>
    </Card>

    <Card title="Movie rentals on Prime Video"
      subtitle="Early Access to new movies, before digital subscription"
      buttonText="Rent now"
      image="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/MLP/TVOD/TVOD_MLP_Left.jpg"
      backgroundPosition="left top"
      paddingTop="4%"
      floatRight
    >
    </Card>

    <ChannelsCard
      title="Your favorite channels all in one place"
      subtitle="With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice"
    />

    <Card title="Even better with Fire TV Stick"
      subtitle="The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.

Get started
"
      buttonText="Get started"
      image="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left.jpg"
      floatRight
      backgroundPosition="left top"
      paddingTop="6%"

    />

<Card title="Family Friendly"
      subtitle="With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
"
      buttonText="Get started"
      image="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_.jpg"
      backgroundPosition="right top"
      paddingTop="6%"

    />

  <Footer />

  </>
}


export default HomePage