import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import CloseButton from 'react-bootstrap/CloseButton';
import ModalBody from 'react-bootstrap/ModalBody';
import Form from 'react-bootstrap/Form';

const ApptForm = () => {
  return (
    <>
      <Container className="container text-center pt-3">
        <Row className="row gx-2">
          <Col className="col align-items-center" width="75">
            <Navbar.Brand href="#">
              <Image src="../assets/logo2.png" alt="dr. t logo" class="d-block mx-auto" width="60" height="60" />
            </Navbar.Brand>
            <small class="d-block mb-3 text-body-secondary"><span className="small-span">&copy;</span>2024</small>
          </Col>
          <Col className="col">
            <p className="mb-3">Click Below To Schedule<br />Your Appointment</p>
            <Button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#myModal" id="schedule">Schedule</Button>
          </Col>
          <Modal className="modal fade" id="myModal">
            <Modal.Dialog className="modal-dialog">
              <Modal.Content className="modal-content">
                <ModalHeader className="modal-header">
                  <ModalTitle className="modal-title">Appointment Request</ModalTitle>
                  <CloseButton className="btn-close" type="button" data-bs-dismiss="modal" />
                </ModalHeader>

                <ModalBody className="modal-body text-start">
                  <Form id="appointmentForm">
                    <Row className="row mb-3">
                      <Col className="col-md-6">
                        <label for="name" className="form-label">Name:<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="name" placeholder="First & Last Name" required />
                        <div className="invalid-feedback">Name is required.</div>
                      </Col>
                      <Col className="col-md-6">
                        <label for="phone" className="form-label">Phone #:<span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="phone" required />
                        <div className="invalid-feedback">Phone number is required.</div>
                      </Col>
                    </Row>
                    <Row className="row mb-3">
                      <Col className="col-md-12">
                        <label for="email" className="form-label">Email: <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" name="email" required />
                        <div className="invalid-feedback">Email is required.</div>
                      </Col>
                    </Row>
                    <Row className="row mb-3">
                      <Col className="col-md-12">
                        <label for="comments" className="form-label">Comments: <span className="text-danger">*</span></label>
                        <textarea className="form-control" id="comments" placeholder="Give us some details about your vehicles symptoms" name="comments" required ></textarea>
                        <div className="invalid-feedback">Comments are required.</div>
                      </Col>
                    </Row>
                    <Row className="row mb-3">
                      <Col className="col-md-6">
                        <label for="requestedDate" className="form-label">Requested Date:<span className="text-danger">*</span></label>
                        <input type="date" className="form-control" id="requestedDate" required />
                        <div className="invalid-feedback">Requested date is required</div>
                      </Col>
                    </Row>
                    <Row className="row mb-3">
                      <Col className="col-md-4">
                        <label for="year" className="form-label">Year:</label>
                        <select className="form-control" id="year" name="year">
                          <option value="">Select Year</option>
                        </select>
                      </Col>
                      <Col className="col-md-4">
                        <label for="make" className="form-label">Make:</label>
                        <select className="form-control" id="make" name="make">
                          <option value="">Select Make</option>
                        </select>
                      </Col>
                      <Col className="col-md-4">
                        <label for="model" className="form-label">Model:</label>
                        <select className="form-control" id="model" name="model">
                          <option value="">Select Model</option>
                        </select>
                      </Col>
                    </Row>
                    <Button className="btn btn-primary" type="submit">Submit</Button>
                  </Form>
                  <Form.Text className="mt-3" id="formMessage"></Form.Text>
                  <p className="text-muted mt-3"><small>This is just a request and does not confirm your appointment.</small></p>
                </ModalBody>
              </Modal.Content>
            </Modal.Dialog>
          </Modal>
        </Row>
      </Container>
    </>
  );
};

export default ApptForm;