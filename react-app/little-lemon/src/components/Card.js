import React from "react";
import menupic from './Resources/Images/pexels-chan-walrus-958545.jpg'
import booknow from './Resources/Images/pexels-life-of-pix-67468.jpg'
import openinghour from './Resources/Images/pexels-pixabay-260922.jpg'

function Card () {
    return (
        <section>
            <article class="newmenu">
                <h2>Our New Menu</h2>
                <img src={menupic} width="60%" alt="different types of food on a table"/>       
                <p>Taste adventure awaits at Little Lemon! We're excited to announce the arrival of our new menu, filled with fresh and authentic Greek flavors. From traditional dishes with a modern twist, to new and creative plates, there's something for everyone to enjoy. Come and discover our new creations and fall in love with the taste of Greece all over again!</p>
        
                <a href="404.html">See our new menu</a>
            </article>
            <article class="booknow">
                <h2>Book Now</h2>        
                <img src={booknow} alt="empty restaurant with tables" width="60%"/>
                <p>Ready for a culinary escape to Greece? Book your table now at Little Lemon and indulge in our delicious Greek cuisine. Whether it's for a romantic night out, a family gathering, or a business lunch, we have the perfect setting for you. Don't wait, reserve your table today and experience the authentic flavors of Greece!</p>

                <a href="404.html">Book your table now</a>
            </article>
            <article class="openinghour">
                <h2>Opening Hours</h2>   
                <img src={openinghour} alt="" width="60%" alt="empty restaurant"/>     
                <p>Step into the world of Greece at Little Lemon. Whether you're looking for a lunch break, an evening out, or a weekend treat, we're open and ready to serve you. Come visit us and experience our mouth-watering Greek cuisine and warm, welcoming atmosphere. Book your table now and treat your senses to the authentic flavors of Greece</p>
                
                <ul>
                <li>Mon-Fri: 11.00 - 22.00</li><br/>
                <li>Sat: 10.00 - 24.00</li><br/>
                <li>Sun: 12.00 - 22.00</li>
                </ul>
            </article>    
        </section>
    )
};

export default Card;