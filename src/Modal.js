import './Modal.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import nav_1 from './assets/nav-1.png';
import nav_2 from './assets/nav-2.png';
import nav_3 from './assets/nav-3.png';
import Back from './assets/back.png';
import Banner from './assets/front-getintouch-link.png';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const ModalW = () => {
  const [open, setOpen] = useState(false);

  

  return (
    <>
      <button className="button" onClick={() => setOpen(true)}>
        Open modal
      </button>
      <Modal   open={open}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
        >
      <Container fluid className="col-lg-12 m-0">
      <Row className="w-200">
    <Col className="col-lg-10 w-100">
        <div className="div_nav-top">
    <img className="img_12" src={Back}  />
    <img className="img_2" src={nav_1}/>
    <img className="img_2" src={nav_2}/>
    <img className="img_2" src={nav_3}/>
    </div>
    </Col>
      </Row>
      <Row>
          <Col className="col-lg-4 offset-1 w-100">
              <div className="banner_img_2">
                  <img className="banner" src={Banner} />
              </div>
          </Col>
          <Col className="col-lg-7"></Col>
      </Row>

  </Container>
      </Modal>
  </>
  );
};

export default ModalW;