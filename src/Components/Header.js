import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }


render() {

    return (

        <nav className="NavBlock">
            <div>
                <p>(USER)</p>
            </div>
            <div>
                <p>(LOGO)</p>
            </div>
            <div>
                <p>(SCORE)</p>
            </div>
        </nav>

    );


    }

}   


export default Header; 

