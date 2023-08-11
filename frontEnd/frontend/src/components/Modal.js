import React, { useTransition, useState, useEffect } from "react";
import "../App.css";
function Modal({ closeModal, Page }) {
  const [onOff, setOnOff] = useState(true);

  const { stage, shouldMount } = useTransition(onOff, 2000); // (state, timeout)

  // useEffect(() => {
  //   setOnOff(!onOff);
  // }, [onOff]);
  console.log("stage bellow");
  console.log(stage);
  const modalRef = React.useRef(null);
  console.log(Page);
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };
  return (
    <div className="blur-bg" onClick={handleClickOutside}>
      <div className="modal" ref={modalRef}>
        {/* <h1>modal</h1> */}
        <Page closeModal={closeModal}></Page>
      </div>
    </div>
  );
}

export default Modal;
