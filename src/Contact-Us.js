import React from 'react'
function ContactUs() {
    return(
        <div id="contactpage">
            OH! YOU WANA CONTACT US JUST MAIL US<br/>
            OR FILL THIS FORM
            <div id="form">
                <form><label for="name">NAME:</label><br/>
                    <input type="text" id="name" name="name" className="formdetail"/><br/>
                    <label for="email">
                        EMAIL:</label><br/>
                    <input type="email" id="email" name="email" className="formdetail"/><br/>
                    <label for="message">MESSAGE:</label><br/>
                    <textarea id="message" name="message" className="formdetail message"/><br/>
                    <input type="submit" value="SUBMIT" className="formsubmitbutton"/> 
                </form>
            </div>
        </div>
    )
}

export default ContactUs;