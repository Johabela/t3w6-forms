
// export syntax 1 ______________ 
// parent component show the display 
import { Component } from "react";

import BusinessCardDisplay from "./BusinessCardDisplay";

class BusinessCardParent extends Component {

    constructor(){
        super();
    }

    render (){
        return(
            <div>
                <BusinessCardParent></BusinessCardParent>
            </div>
        )
    }
}


// // default export syntax 2______________ 
// import react from "react";
// class BlahBlah extends react.Component {
// 	constructor(){

// 	}
// }