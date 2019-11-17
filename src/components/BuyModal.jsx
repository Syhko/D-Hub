import React from "react";
import "./BuyModal.scss";
import CheckMark from "./CheckMark";

const BuyModal = ({ handleClose, product: { CO2 } }) => {
  const [validate, setValidate] = React.useState(false);
  return (
    <>
      <div className="fading" />
      <div className="modal-wrapper">
        {!validate && (
          <>
            <div className="left-choice" onClick={() => setValidate(true)}>
              <p>
                <span>
                  <i class="fas fa-leaf"></i> {Math.floor(CO2 / 3)}g CO
                  <sub>2</sub> saved
                </span>{" "}
                Delivery ?
              </p>
              <img src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/163/original/delivery.png?1510082899" />
            </div>
            <div className="right-choice" onClick={() => setValidate(true)}>
              <p>
                <span>
                  <i class="fas fa-leaf"></i> {CO2}g CO<sub>2</sub> saved
                </span>{" "}
                Pick up ?
              </p>
              <img src="https://icon-library.net/images/pick-up-icon/pick-up-icon-23.jpg" />
            </div>
          </>
        )}
        {validate && (
          <div className="validation">
            <CheckMark />
            <h2>
              Thanks for your purchase
              <br />
              <br />
              Check your email for more informations
            </h2>
            <div className="validation-button" onClick={handleClose}>
              <p>Back to store</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BuyModal;
