import './Form.css'

function Form () {
    return (
        <>
          <div className="asi-form">
      <div className="asi-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="76" height="69" viewBox="0 0 76 69" fill="none">
<path d="M36 54.6666H10.3333C8.38841 54.6666 6.52315 53.894 5.14788 52.5187C3.77262 51.1434 3 49.2782 3 47.3333V10.6666C3 8.72166 3.77262 6.8564 5.14788 5.48114C6.52315 4.10587 8.38841 3.33325 10.3333 3.33325H61.6667C63.6116 3.33325 65.4768 4.10587 66.8521 5.48114C68.2274 6.8564 69 8.72166 69 10.6666V30.8333M61.6667 65.6666V43.6666M61.6667 43.6666L72.6667 54.6666M61.6667 43.6666L50.6667 54.6666" stroke="#686358" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 10.6666L36 32.6666L69 10.6666" stroke="#686358" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </div>
      <h3>Lorem ipsum dolor sit amet consectetur</h3>
      <div className="form-group">
        <input type="email" placeholder="your email" />
        <button>subscribe now</button>
      </div>
    </div>
        </>
    )
}

export default Form