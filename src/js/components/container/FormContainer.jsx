import React, { Component } from "react";
import ReactDOM from "react-dom";
import { getData } from "../../actions/index";
import Input from "../presentational/Input.jsx";
import { connect } from "react-redux";
import styles from "./FormContainer.module.css"
import Item from "../presentational/ItemDetails"
import Promo from "../presentational/Promo"

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      pricingData: "",
      applied: false
    };

    this.applyPromo = this.applyPromo.bind(this);
  }
  applyPromo( promoName ) {
    if( promoName == 'DISCOUNT' ) {
      if( this.state.applied ) {
        alert('Already applied');
      } else {
        var pricingData=this.props.pricingData;
        if(pricingData.pricing.total){
          pricingData.pricing.total=(pricingData.pricing.total*90)/100;
        }
        this.setState({ pricingData: pricingData, applied: true });
      }
    } else {
      alert('Invalid Promo code');
    }
}













  componentDidMount() {
    // calling the new action creator
    this.props.getData();
  }

  renderProduct(){
    const {pricingData} =this.props;
    if(pricingData && pricingData.pricing){
      return (
        <div className={styles.card}>
          <div className={styles.container}>
             <div>
             <p ><span className={styles.leftAlign}>Subtotal</span><span className={styles.rightAlign}>${pricingData.pricing.subtotal}</span></p>
             </div>
             {/* <div>
             <p ><span className={styles.leftAlign}>Pickup Savings</span><span className={styles.redtext}>-${pricingData.pricing.savings}</span></p>
             </div> */}
             <div className={styles.pickupSavings}>
               <div  className={styles.tooltip}>Pickup Savings <span className={styles.tooltiptext}>Pickup you order in store help to recuce cost</span></div>
               <span className={styles.redtext}>-${pricingData.pricing.savings}</span>
             </div>
             <div>
               <div className={styles.leftAlign}>Est. taxes & fees <div>(Based on 94085)</div></div><div className={styles.rightAlign}>${pricingData.pricing.tax}</div>
             </div>
             <div className={styles.totalText}>
             <p><span className={styles.leftAlign}>Est. total</span><span className={styles.rightAlign}>${pricingData.pricing.total}</span></p>
             </div>
             <Item {...this.props}></Item>
              <Promo {...this.props} onClick={this.applyPromo} ></Promo>
           </div>
        </div>
        );
    }else{
      return  <p>loading...</p>;
    }
  }
  render() {
    return (
<React.Fragment>
  {this.renderProduct()}
  </React.Fragment>
    )
  }
}
const mapStateToProps = state => {
  return { pricingData: state.pricingData };
};

export default connect(
  mapStateToProps,
  { getData }
)(FormContainer);
