import './Footer.css'


const Footer = () => {
    return (

          
<footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Payment Methods:</h4>
          <ul>
            <li>Online Payment</li>
            <li>Cash</li>
            <li>Credit/Debit Cards</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Business Hours</h4>
          <ul>
            <li>Mon-Fri: 9:00 AM - 9:00 PM</li>
            <li>Sat-Sun: 10:00 AM - 6:00 PM</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>+1 (234) 567-8901</li>
            <li>random.email@example.com</li>
            <li><a href="https://www.example.com" target="_blank" rel="noopener noreferrer">https://www.example.com</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </footer>






















//       <div className="footer">
//         <div className="footer-container">
//           <div className="footer-section information">  
//             <h4>Information</h4>
//             <ul> 
//               <li><a href="#privacy">Privacy Policy</a></li>
//               <li><a href="#terms">Terms of Service</a></li>
//               <li><a href="#faq">FAQ</a></li>
//             </ul>
//           </div>
//           <div className="footer-section payment-methods">
//             <h4>Payment Methods:</h4>
//             <ul>
//               <li>Online Payment</li>
//               <li>Cash</li>
//               <li>Credit/Debit Cards</li>
//             </ul>
//           </div>
//           <div className="footer-section  business-hours">
//             <h4>Business Hours</h4>
//             <ul>
//               <li>Mon-Fri: 9:00 AM - 9:00 PM</li>
//               <li>Sat-Sun: 10:00 AM - 6:00 PM</li>
//             </ul>
//           </div>
//           <div className="footer-section contact">
//             <h4>Contact</h4>
//             <ul>
//               <li>+1 (234) 567-8901</li>
//               <li>random.email@example.com</li>
//               <li><a href="https://www.example.com">https://www.example.com</a></li>
//             </ul>
//             <div className="social-icons">
//               <a href="#instagram"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
// <g clip-path="url(#clip0_13_35)">
// <path d="M12.5472 4.42477C12.4667 4.42477 12.3895 4.39279 12.3326 4.33586C12.2756 4.27893 12.2437 4.20171 12.2437 4.1212C12.2437 4.04069 12.2756 3.96347 12.3326 3.90654C12.3895 3.84961 12.4667 3.81763 12.5472 3.81763M12.5472 4.42477C12.6277 4.42477 12.705 4.39279 12.7619 4.33586C12.8188 4.27893 12.8508 4.20171 12.8508 4.1212C12.8508 4.04069 12.8188 3.96347 12.7619 3.90654C12.705 3.84961 12.6277 3.81763 12.5472 3.81763" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M1.04186 4.16611C1.04186 3.33747 1.37104 2.54278 1.95697 1.95685C2.5429 1.37092 3.33759 1.04175 4.16622 1.04175H12.4986C12.9089 1.04175 13.3152 1.12256 13.6943 1.27958C14.0734 1.43659 14.4178 1.66673 14.7079 1.95685C14.998 2.24697 15.2282 2.5914 15.3852 2.97047C15.5422 3.34953 15.623 3.75581 15.623 4.16611V12.4985C15.623 13.3272 15.2938 14.1219 14.7079 14.7078C14.122 15.2937 13.3273 15.6229 12.4986 15.6229H4.16501C3.33638 15.6229 2.54168 15.2937 1.95575 14.7078C1.36982 14.1219 1.04065 13.3272 1.04065 12.4985V4.16489L1.04186 4.16611Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M5.23602 8.33227C5.23602 8.7389 5.31611 9.14154 5.47172 9.51722C5.62734 9.8929 5.85542 10.2342 6.14295 10.5218C6.43048 10.8093 6.77182 11.0374 7.1475 11.193C7.52318 11.3486 7.92582 11.4287 8.33245 11.4287C8.73908 11.4287 9.14173 11.3486 9.5174 11.193C9.89308 11.0374 10.2344 10.8093 10.522 10.5218C10.8095 10.2342 11.0376 9.8929 11.1932 9.51722C11.3488 9.14154 11.4289 8.7389 11.4289 8.33227C11.4289 7.51104 11.1027 6.72346 10.522 6.14276C9.94126 5.56207 9.15368 5.23584 8.33245 5.23584C7.51123 5.23584 6.72364 5.56207 6.14295 6.14276C5.56225 6.72346 5.23602 7.51104 5.23602 8.33227Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <defs>
// <clipPath id="clip0_13_35">
// <rect width="17" height="17" fill="white"/>
// </clipPath>
// </defs>
// </svg></a>
//               <a href="#facebook"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
// <path d="M14.175 0H0.825C0.606196 0 0.396355 0.0869195 0.241637 0.241637C0.0869195 0.396355 0 0.606196 0 0.825V14.175C0 14.3938 0.0869195 14.6036 0.241637 14.7584C0.396355 14.9131 0.606196 15 0.825 15H8.01V9.1875H6.06V6.9375H8.01V5.25C7.96961 4.85382 8.01638 4.4536 8.14704 4.0774C8.27769 3.70121 8.48907 3.35816 8.76635 3.07231C9.04362 2.78646 9.38008 2.56473 9.75212 2.42268C10.1242 2.28063 10.5228 2.22169 10.92 2.25C11.5037 2.24641 12.0872 2.27646 12.6675 2.34V4.365H11.475C10.53 4.365 10.35 4.815 10.35 5.4675V6.915H12.6L12.3075 9.165H10.35V15H14.175C14.2833 15 14.3906 14.9787 14.4907 14.9372C14.5908 14.8957 14.6818 14.835 14.7584 14.7584C14.835 14.6818 14.8957 14.5908 14.9372 14.4907C14.9787 14.3906 15 14.2833 15 14.175V0.825C15 0.716659 14.9787 0.60938 14.9372 0.509286C14.8957 0.409193 14.835 0.318245 14.7584 0.241637C14.6818 0.165029 14.5908 0.10426 14.4907 0.0627995C14.3906 0.0213393 14.2833 0 14.175 0Z" fill="white"/>
// </svg></a>
//             </div>
//           </div>
//         </div>
//       </div>
    );
  };
  
  export default Footer;