import React, {useEffect} from 'react'
import './about.css'
import Line from '../common/line/Line'
function AboutStory() {
  useEffect(() => {
      window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  return (
    <>
    <Line/>
    <div className="AboutStory">
      <div className="subtile">03// OUR STORY</div>
      <div className="AboutStory-content">
        <div className="heading">
          <h2>In the bustling street of Lan Kwai Fong, in 1972 Velvet Shaker welcomed its first clients.</h2>
        </div>
        <div className="decs">
          <div className="left">
            <p>In 1972, amidst the bustling streets of Lan Kwai Fong, Velvet Shaker opened its doors as a quiet refuge for those seeking something extraordinary. Founded by a visionary mixologist with a love for innovation, the bar quickly became a cornerstone of Hong Kong’s nightlife. Its founder, affectionately known as “Mr. Velvet,” believed cocktails were more than drinks—they were an art form, a way to bring people together and tell stories through flavor.</p>
            <p>In the early years, Velvet Shaker was a hidden gem, attracting artists, poets, and dreamers who came not just for the cocktails but for the ambiance—a dimly lit, velvet-clad interior that oozed charm and sophistication. Over the decades, the bar evolved with the city, blending its classic roots with modern flair. Its signature drinks, like the Velvet Old Fashioned and Golden Hour Martini, became iconic, drawing visitors from across the globe.</p>
            <p>Today, Velvet Shaker remains a symbol of timeless elegance and innovation in Hong Kong. Though the city around it has changed, the heart of Velvet Shaker—its commitment to craft.</p>
          </div>
          <div className="right">
            <p>Today, Velvet Shaker continues to enchant guests with its perfect balance of heritage and modernity. The original vision of crafting extraordinary experiences lives on, as each cocktail tells a story of artistry and passion. Locals and travelers alike are drawn to its inviting ambiance, where the charm of the past meets the energy of the present.</p>
            <p>Through the decades, Velvet Shaker has remained a constant in a city that never stops evolving. It’s a place where traditions are honored, and new memories are made. With its legendary cocktails and iconic atmosphere, Velvet Shaker isn’t just a bar—it’s a timeless destination that defines the spirit of Lan Kwai Fong.</p>
            <p>As the decades pass, Velvet Shaker continues to embrace change while staying true to its roots. Whether it’s introducing bold new flavors or hosting unforgettable events, the bar keeps its legacy alive by evolving with its patrons. At its heart, Velvet Shaker remains what it has always been—a place where stories begin, friendships deepen, and every sip is a celebration of life.</p>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}

export default AboutStory