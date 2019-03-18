import React, { Component } from "react";

import ReactDOM from "react-dom";

import styles from "./ItemDetails.module.css"

class ItemDetails extends Component {

constructor() {

super();

this.state = {

hideItem: true,

hideItemText:"Show Item Details +",

showItemText:"Hide Item Details -",

};

this.showItemDetails = this.showItemDetails.bind(this);

}

showItemDetails(event) {

this.setState({ hideItem: !this.state.hideItem });

}

renderProduct(){

const shown = {

display: "flex"

};

const hidden = {

display: "none"

}

const {pricingData} =this.props;

if(pricingData && pricingData.pricing){

return (

<React.Fragment>

<div className={styles.item} >

<a onClick={this.showItemDetails}>{this.state.hideItem?this.state.hideItemText:this.state.showItemText }</a>

</div>

<div style={this.state.hideItem?hidden:shown}  className={styles.flexContainer}>

<div className={styles.column}>

<img className={styles.itemImage} src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Avatar" />

</div>

<div className={styles.columncc}>




<p >{pricingData.itemDetails.itemName}</p>



<p ><span className={styles.leftAlign} >${pricingData.pricing.subtotal-pricingData.pricing.savings}</span> <span className={styles.rightAlign}>Qty:{pricingData.itemDetails.quantity}</span></p>

<p><span className={styles.nowrap}>${pricingData.pricing.subtotal}</span></p>

</div>

</div>



</React.Fragment>

);

}else{

return <p>loading...</p>;

}

}

render( ) {

return (

<React.Fragment>

{this.renderProduct()}

</React.Fragment>

)

}

}





export default ItemDetails;
