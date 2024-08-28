import './MainContent.css'
import img23 from './../../imgs/group23.png'

function MainComponent () {
    return (
        <>
            <div className="container">
      <div className="left-section">
        <h1>
          <span>Lorem ipsum</span> dolor sit amet consectetur.
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Platea suscipit suscipit tristique enim id. At molestie aliquet fermentum erat euismod sit ut viverra. Sit sed blandit ullamcorper donec quam sed.</p>
      </div>
      <div className="right-section">
        <div className="checkbox-item">
          <input type="checkbox"/>
          <label>Lorem ipsum dolor sit amet consectetur.<br /> Sed lacus condimentum est lorem id.</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox"/>
          <label>Lorem ipsum dolor sit amet consectetur.<br /> Sed lacus condimentum est lorem id.</label>
        </div>
        <div className="checkbox-item">
          <input type="checkbox"/>
          <label>Lorem ipsum dolor sit amet consectetur.<br /> Sed lacus condimentum est lorem id.</label>
        </div>
      </div>
    </div>
    <div className="asi-conteiner">
      <div className="image-container">
        <img src={img23} alt="Delivery" />
      </div>
      <div className="text-container">
        <h2>Lorem ipsum dolor sit amet consectetur.</h2>
        <p>
        Lorem ipsum dolor sit amet consectetur.<br /> Platea suscipit suscipit tristique enim id. At molestie aliquet fermentum erat euismod sit ut viverra.
         Sit sed blandit ullamcorper donec quam sed. .
        </p>
        <button className="learn-more">Learn more</button>
      </div>
    </div>
        </>
    )
}


export default MainComponent