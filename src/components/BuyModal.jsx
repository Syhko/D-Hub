import React from "react";
import "./BuyModal.scss";

const BuyModal = () => {
  const [validate, setValidate] = React.useState(false);
  return (
    <>
      <div className="fading" />
      <div className="modal-wrapper">
        {!validate && (
          <>
            <div className="left-choice" onClick={() => setValidate(true)}>
              <p>Delivery ?</p>
              <img src="https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/000/163/original/delivery.png?1510082899" />
            </div>
            <div className="right-choice" onClick={() => setValidate(true)}>
              <p>Pick up ?</p>
              <img src="https://icon-library.net/images/pick-up-icon/pick-up-icon-23.jpg" />
            </div>
          </>
        )}
        {validate && (
          <div className="validation">
            <p>Thanks</p>
          </div>
        )}
      </div>
    </>
  );
};

export default BuyModal;
