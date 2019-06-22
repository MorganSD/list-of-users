import React, { Component } from 'react';



class Footer extends Component{

    render(){
        return(

            <React.Fragment>
                <section className="footer">
                    <div class="wrap">
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">HiroKet</a></li>
                    </ul>

                    <p>powered by HiroKet</p>
                    </div>
                </section>


            </React.Fragment>

        );
    }
}
export default Footer;