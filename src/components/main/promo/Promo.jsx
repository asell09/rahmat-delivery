import MainKart from './MainKart'
import './Promo.css'
import Form from './Form'

function Promo () {
    return (
        <>
            <div className="asin-container">
      <h1 className='text6'>Lorem ipsum dolor sit amet consectetur.</h1>
      
      <div className="mainkart-container">
        <MainKart />
        <MainKart />
        <MainKart />
      </div>
      
      <div className="navv-buttons">
        <button className="navv-button">&larr;</button>
        <button className="navv-button">&rarr;</button>
      </div>

      <Form />
    </div>
    

        </>
    )
}

export default Promo