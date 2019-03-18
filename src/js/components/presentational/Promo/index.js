import React, { Component } from "react";
import ReactDOM from "react-dom";
import styles from "./Promo.module.css"
class ItemDetails extends Component {
  constructor() {
    super();
    this.state = {
      hideItem: true,
      hideItemText:"Appy Promo Code +",
      showItemText:"Hide Promo Code -",
      inputValue: ""
    };
    this.showItemDetails = this.showItemDetails.bind(this);

  }
  showItemDetails(event) {
    this.setState({ hideItem: !this.state.hideItem });
  }

  updateInputValue(evt) {
   this.setState({
     inputValue: evt.target.value
   });
 }

  renderProduct(){
    const shown = {
        display:  "block"
    };

    const hidden = {
        display:  "none"
    }
    const {pricingData} =this.props;
    if(pricingData && pricingData.pricing){
        return (
            <div className={styles.promo}>
                  <a href="#" onClick={this.showItemDetails}>{this.state.hideItem?this.state.hideItemText:this.state.showItemText }</a>
  <div style={this.state.hideItem?hidden:shown}>

     <p >Enter promo code</p>

     <div>
     <p className={styles.promoCode}><input onChange={evt => this.updateInputValue(evt)} value={this.state.inputValue} type="text" placeholder="Code" /><button type="button" onClick={this.props.onClick.bind( this, this.state.inputValue )}>Apply</button></p>
     </div>


     </div>


     </div>
        );
    }else{
      return  <p>loading...</p>;
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
