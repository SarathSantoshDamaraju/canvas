import React from 'react'
import logo from '../../images/logo.png';

const subscriptionForm = () => (
    <div className="row mt-6">
        <div id="mc_embed_signup">
        <div className="container plr-20">
          <a href="/">
            <img src={logo} className='logo'/>
          </a>
          <p className="mtb-1 color-white">Abstrakt is an initiative started by a group of designers to help follow designers and form a community at large. We also focus on creating futuristic digital interfaces and awesome products. Drop a message and we'll meet for coffee :)</p>
        <form action="https://abstrakt.us18.list-manage.com/subscribe/post?u=36bd9170382ff893f35cd33c7&amp;id=caf93a90fc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
                <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
                <div style={{position: 'absolute', left: -5000+'px'}} data-aria-hidden="true"><input type="text" name="b_36bd9170382ff893f35cd33c7_caf93a90fc" tabIndex="-1" value="" /></div>
                <input type="submit" value="+" name="subscribe" id="mc-embedded-subscribe" className="button button-black" />
                <p className="info-label">Subscribe for our weekly newsletter for interesting updates!</p>
            </div>
        </form>
        </div>
        </div>
    </div>
);

export default subscriptionForm;