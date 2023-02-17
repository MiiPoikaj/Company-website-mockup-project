import React from "react";
import littlelogo from './Resources/Images/Asset 20@4x.png'

function Footer () {
    return (
        <footer>
        <section>
          <img src={littlelogo} width="10%" alt="little lemon restaurant logo"/>
        </section>
        <section class="copyright">
          <p>© Little Lemon</p>
        </section>    
      </footer>
    )
};

export default Footer;