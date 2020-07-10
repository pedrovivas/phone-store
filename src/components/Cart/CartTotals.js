import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'
import styled from 'styled-components'

export default function CartTotals({value, history}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {/*<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">*/}
            <div className="col-10 mt-2 ml-auto col-sm-8 text-capitalize text-right">
              <Link to="/phone-store">
                <ClearButton
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => clearCart()}
                >
                  clear cart
                </ClearButton>
              </Link>
              <h5>
                <span className="text-title">subtotal: </span>
                <strong>${cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">tax: </span>
                <strong>${cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title">total: </span>
                <strong>${cartTotal}</strong>
              </h5>
              <PayPalButton
                total={cartTotal}
                clearCart={clearCart}
                history={history}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

const ClearButton = styled.button`
    transition: all 0.5s ease-in-out;
`
