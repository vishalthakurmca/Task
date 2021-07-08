import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faStar,faDownload,faInfoCircle,
    faPlusSquare, faUserSecret, faHistory,
    faBookmark, faLaptop, faShare,faSearch,
    faLanguage,faDesktop, faArrowAltCircleUp
 } from '@fortawesome/free-solid-svg-icons'
import {
  Popover,
  Tooltip,
  Button,
  Modal,
  OverlayTrigger
} from "react-bootstrap";

const Popup = () => {
  const [showModal,setShowModal] = useState(false)
  const array = [
    {
      title: "New tab",
      icon:faPlusSquare
    },
    {
      title: "new incognito window",
      icon: faUserSecret
    },
    {
        title: "History",
        icon: faHistory
      },
    {
      title: "Downloads",
      icon: faDownload
    },
    {
        title: "Bookmarks",
        icon: faBookmark
    },
    {
        title: "Recent tabs",
        icon: faLaptop
    },
    {
        title: "Share...",
        icon: faShare
    },
    {
        title: "Find in page",
        icon: faSearch
    },
    {
        title: "Translate...",
        icon: faLanguage
    },
    {
        title: "Dextop mode",
        icon: faDesktop
    },
  ]


  const handleClose = ()=> {
    setShowModal(false)
  }

  const handleShow= ()=>  {
    setShowModal(true)
  }

    return (
      <div>
          <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-light">
            <div className="container">
                <div className="buttonStyle">
                <Button bsStyle="primary bg-light" bsSize="medium" onClick={handleShow}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} />
                </Button>
                </div>
            </div>
        </nav>
        <Modal class="Modal-sm" className="PopupStyle"
          show={showModal}
          onHide={handleClose}
        >
          <Modal.Header closeButton >
          <FontAwesomeIcon icon={faArrowCircleRight} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faDownload} />
          <FontAwesomeIcon icon={faInfoCircle} />
          </Modal.Header>
          <Modal.Body >
            <>
              {array.length > 0 &&
                array.map((item, index) => {
                  console.log("item", item);
                  return (
                    <>
                      <div key={index} onClick={()=>{alert(item.title)}}>
                        <h6><FontAwesomeIcon icon={item.icon}/>    {item.title}</h6>
                        <hr/>
                      </div>
</>
                      )
                     
          })
          }
          </>
          </Modal.Body>
        </Modal>
      </div>
    );
}
export default Popup;