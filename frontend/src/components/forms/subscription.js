import React from 'react'

const subscriptionForm = () => (
    <div className="container">
        <div id="mc_embed_signup">
        <form action="https://abstrakt.us18.list-manage.com/subscribe/post?u=36bd9170382ff893f35cd33c7&amp;id=caf93a90fc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
            <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
            <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
            <div style={{position: 'absolute', left: -5000+'px'}} data-aria-hidden="true"><input type="text" name="b_36bd9170382ff893f35cd33c7_caf93a90fc" tabIndex="-1" value="" /></div>
            <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button button-black" /></div>
            </div>
        </form>
        </div>
    </div>
);

export default subscriptionForm;