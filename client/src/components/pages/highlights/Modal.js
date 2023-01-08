import { React, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import { BiXCircle } from "react-icons/bi";


const Modal = (props) => {
    if (!props.isModal) {
        return null;
    }

    return (
        <>
            <div className="modal-container">




                <div className="iframe-container">
                    
                    <div className="cancel-button">
                        <button onClick={props.ModalOff}>
                            <BiXCircle className="cancel-icon" />
                        </button>
                    </div>
                    
                    <OutsideClickHandler
                        onOutsideClick={props.ModalOff}
                    >
                        <div className="iframe-wrapper">
                            <iframe width="560" height="315" src={props.ModalVideoLink} allow="fullscreen;"></iframe>
                        </div>
                    
                    </OutsideClickHandler>
                </div>

            </div>
        </>
    )
}

export default Modal
