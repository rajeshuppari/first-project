import React from 'react'
import footer_icon from '../component/assets/photos/logo_big.png';
import instagram_icon from '../component/assets/photos/instagram_icon.png';
import pintester_icon from '../component/assets/photos/pintester_icon.png';
import whatsapp_icon from '../component/assets/photos/whatsapp_icon.png';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
        <img src={footer_icon} alt="" />
        <h1>Shopper</h1>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            {/* <li>Office</li> */}
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div  className='social-icon'>

            <div className='icon'>
                <img src={instagram_icon} alt="" />
            </div>
            <div className='icon'>
                <img src={pintester_icon} alt="" />
            </div>
            <div className='icon'>
                <img src={whatsapp_icon} alt="" />
            </div>

        </div>
        <div className='copy-right'>

            <hr />
            <p>CopyRight@ 2023 All Right -Reserved</p>

        </div>
    </div>
  )
}

export default Footer