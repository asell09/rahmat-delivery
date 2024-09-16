import './Header.css'
import img from './../imgs/group.png'
import img2 from './../imgs/rahmat1.png'

function Header() {


  return (
    <>
    
      <div className='header-row'>
        <nav id='nav' className="nav open">
          <div className="logo">
            <img src={img2} alt="Logo" />
          </div>
          <div className='reg'>
            <ul className="nav-links">
              <li><a href="#" className='params'>Home</a></li>
              <li><a href="#" className='params'>About us</a></li>
              <li><a href="#" className='params'>+1(234) 567-8901</a></li>
            </ul>
          <button className="button1">registration</button>
          </div>
          <button id='nav-btn' className='nav-buttton'>
            <svg id='nav-btn-img' src='./img/icons/nav-open.svg' xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
              <path d="M7.83337 11.75H39.1667M13.7084 23.5H39.1667M19.5834 35.25H39.1667" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </nav>






        <section className="qwer-section">
          <div className="qwer-text">
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Sed malesuada fermentum cursus faucibus.</p>
            <button className="button1">registration</button>
          </div>
          <div className="qwer-image">
            <img src={img} alt="Delivery Illustration" />
          </div>
        </section>
      </div>



      <div className="cart-section">
        <h2 className="section-title">Lorem ipsum dolor sit amet consectetur.</h2>


        <div className="cart-container">
          <div className="cart">
            <div className="iconk">
              <svg xmlns="http://www.w3.org/2000/svg" width="79" height="79" viewBox="0 0 79 79" fill="none">
                <path d="M13.5485 66.4896C12.0321 66.4896 10.767 65.9827 9.75321 64.9689C8.73937 63.955 8.23136 62.6899 8.22916 61.1736V24.2049H11.5208V61.1703C11.5208 61.7628 11.7107 62.2489 12.0903 62.6285C12.4699 63.0081 12.956 63.198 13.5485 63.198H55.9583V66.4896H13.5485ZM44.4375 41.9173L21.3958 28.4215V51.2986C21.3958 51.8889 21.5856 52.3739 21.9653 52.7535C22.3449 53.1331 22.831 53.323 23.4235 53.323H65.4548C66.0451 53.323 66.5301 53.1331 66.9097 52.7535C67.2893 52.3739 67.4792 51.8878 67.4792 51.2953V28.4182L44.4375 41.9173ZM23.4235 56.6146C21.9071 56.6146 20.642 56.1077 19.6282 55.0939C18.6144 54.08 18.1064 52.8139 18.1042 51.2953V25.9758C18.1042 25.12 18.2698 24.3815 18.6012 23.7605C18.9326 23.1395 19.5141 22.5909 20.3458 22.1147L44.4375 8L47.6633 9.90588L22.0542 24.9784L44.4375 38.1451L66.2152 25.357C66.7418 25.0322 67.2619 24.8731 67.7754 24.8797C68.2889 24.8863 68.7816 25.0245 69.2534 25.2944C69.7252 25.5643 70.096 25.922 70.366 26.3675C70.6359 26.813 70.7708 27.3331 70.7708 27.9277V51.2986C70.7708 52.8128 70.2639 54.0779 69.2501 55.0939C68.2362 56.1099 66.9711 56.6168 65.4548 56.6146H23.4235ZM43.8055 31.6737L36.8667 24.7381L39.1972 22.4076L43.8055 27.016L55.4909 15.3305L57.8214 17.6578L43.8055 31.6737ZM44.4375 53.323H67.4792H21.3958H44.4375Z" fill="#4D216D" />
              </svg>
            </div>
            <h3 className="cart-title">Lorem ipsum dolor</h3>
            <a href="#" className="cart-link">more details &rarr;</a>
          </div>
          <div className="cart active">
            <div className="iconk">
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 92 92" fill="none">
                <path d="M27.5808 61.1807C24.9205 61.1807 22.6563 60.2479 20.7882 58.3823C19.4051 57.0012 18.5347 55.4029 18.177 53.5874C17.9633 52.503 17.0932 51.5973 15.9879 51.5973H12.3232C11.2186 51.5973 10.3232 50.7019 10.3232 49.5973V42.014C10.3232 38.288 11.6265 35.1191 14.2332 32.5073C16.8424 29.9007 20.0113 28.5973 23.7398 28.5973H35.1565C36.2611 28.5973 37.1565 29.4928 37.1565 30.5973V45.764C37.1565 46.8686 38.0519 47.764 39.1565 47.764H52.4173C53.0208 47.764 53.5921 47.4914 53.9719 47.0222L67.3778 30.4586C67.666 30.1026 67.8232 29.6584 67.8232 29.2004V20.1908C67.8232 19.5008 67.6008 18.9361 67.1562 18.4965C66.7115 18.0569 66.1467 17.8359 65.4618 17.8333H58.236C57.1775 17.8333 56.3194 16.9752 56.3194 15.9167C56.3194 14.8581 57.1775 14 58.236 14H65.4618C67.1638 14 68.6205 14.6057 69.8318 15.817C71.0432 17.0283 71.6501 18.4863 71.6527 20.1908V30.42C71.6527 30.8706 71.5005 31.3081 71.2208 31.6614L56.0382 50.8388C55.6589 51.3179 55.0813 51.5973 54.4702 51.5973H39.1527C38.0481 51.5973 37.1782 52.5018 36.9643 53.5854C36.6065 55.3974 35.739 56.9939 34.362 58.3747C32.499 60.2428 30.2373 61.1768 27.577 61.1768M27.5693 57.3435C29.1487 57.3435 30.5019 56.78 31.6288 55.653C32.2575 55.0243 32.7109 54.3252 32.9888 53.5558C33.3642 52.517 32.4239 51.5935 31.3193 51.5935H23.8193C22.7148 51.5935 21.7745 52.5171 22.1505 53.5556C22.4292 54.3252 22.8835 55.0243 23.5137 55.653C24.6407 56.78 25.9926 57.3435 27.5693 57.3435ZM23.736 21.6667C22.6775 21.6667 21.8193 20.8085 21.8193 19.75C21.8193 18.6915 22.6775 17.8333 23.736 17.8333H35.236C36.2946 17.8333 37.1527 18.6915 37.1527 19.75C37.1527 20.8085 36.2946 21.6667 35.236 21.6667H23.736ZM72.105 61.1807C69.4472 61.1807 67.1843 60.2492 65.3162 58.3862C63.4481 56.5232 62.514 54.2615 62.514 51.6012C62.514 48.9408 63.4442 46.6792 65.3047 44.8162C67.1651 42.9532 69.4268 42.0191 72.0897 42.014C74.7526 42.0089 77.0155 42.9391 78.8785 44.8047C80.7415 46.6702 81.6743 48.9306 81.6768 51.5858C81.6794 54.2411 80.7492 56.5053 78.8862 58.3785C77.0257 60.244 74.7653 61.1807 72.105 61.1807ZM72.0973 57.3435C73.6741 57.3435 75.026 56.78 76.153 55.653C77.28 54.526 77.8448 53.1741 77.8473 51.5973C77.8499 50.0206 77.2851 48.6661 76.153 47.534C75.026 46.4095 73.6741 45.8473 72.0973 45.8473C70.5206 45.8473 69.1674 46.4095 68.0378 47.534C66.9083 48.6584 66.3448 50.0129 66.3473 51.5973C66.3499 53.1818 66.9134 54.5337 68.0378 55.653C69.1623 56.7723 70.5155 57.3371 72.0973 57.3473M14.154 45.7627C14.1533 46.8678 15.0489 47.764 16.154 47.764H31.3194C32.4239 47.764 33.3193 46.8686 33.3193 45.764V34.4307C33.3193 33.3261 32.4239 32.4307 31.3193 32.4307H23.7283C21.0885 32.4307 18.8332 33.3686 16.9625 35.2443C15.0918 37.1201 14.1565 39.3767 14.1565 42.014L14.154 45.7627Z" fill="white" />
              </svg>
            </div>
            <h3 className="cart-title1">Lorem ipsum dolor</h3>
            <a href="#" className="cart-link">more details &rarr;</a>
          </div>
          <div className="cart">
            <div className="iconk">
              <svg xmlns="http://www.w3.org/2000/svg" width="57" height="60" viewBox="0 0 57 60" fill="none">
                <path d="M52.2105 15.9474V29.8947M2 15.9474V44.2912C2 48.1491 7.42832 50.442 18.2822 55.0251C22.6421 56.869 24.8235 57.7895 27.1053 57.7895V28.0955M35.4737 49.4211C35.4737 49.4211 37.9145 49.4211 40.3553 55C40.3553 55 48.11 41.0526 55 38.2632" stroke="#4D216D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.3684 29.8947L15.9474 32.6842M41.0526 7.57895L13.1579 21.5263M16.8567 23.4538L8.70869 19.5123C4.23716 17.3477 2 16.2654 2 14.5526C2 12.8399 4.23716 11.7576 8.70869 9.59295L16.8539 5.65142C21.8889 3.21621 24.3995 2 27.1053 2C29.8111 2 32.3244 3.21621 37.3538 5.65142L45.5018 9.59295C49.9734 11.7576 52.2105 12.8399 52.2105 14.5526C52.2105 16.2654 49.9734 17.3477 45.5018 19.5123L37.3566 23.4538C32.3216 25.8891 29.8111 27.1053 27.1053 27.1053C24.3995 27.1053 21.8862 25.8891 16.8567 23.4538Z" stroke="#4D216D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <h3 className="cart-title">Lorem ipsum dolor</h3>
            <a href="#" className="cart-link">more details &rarr;</a>
          </div>
        </div>
      </div>

    </>
  );
}

export default Header