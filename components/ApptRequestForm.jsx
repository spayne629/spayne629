import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form
} from 'react-bootstrap';

const ApptRequestForm = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [useLicensePlate, setUseLicensePlate] = useState(true);

  // Vehicle data constants
  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];
  
  const years = Array.from({length: 30}, (_, i) => new Date().getFullYear() - i);
  
  const makes = [
    "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler",
    "Dodge", "Ford", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia",
    "Lexus", "Mazda", "Mercedes-Benz", "Nissan", "Toyota", "Volkswagen"
  ];

  const modelsByMake = {
    "Toyota": ["Camry", "Corolla", "RAV4", "Highlander", "Tacoma"],
    "Honda": ["Civic", "Accord", "CR-V", "Pilot", "Odyssey"],
    "Ford": ["F-150", "Explorer", "Escape", "Mustang", "Edge"],
    // Add more makes/models as needed
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comments: '',
    requestedDate: '',
    licensePlate: '',
    state: '',
    year: '',
    make: '',
    model: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity()) {
      try {
        // Send email using your preferred method (e.g., EmailJS or backend API)
        const response = await fetch('/api/submit-appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setShow(false);
          // Add success notification here
        }
      } catch (error) {
        console.error('Submission error:', error);
        // Add error notification here
      }
    }
    setValidated(true);
  };

  return (
    <Col>
      <p>Click Below To Schedule<br/>Your Appointment</p>
      <Button id="schedule-btn" className="btn btn-dark" onClick={() => setShow(true)}>Schedule</Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule Service Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Contact Information */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First & Last Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <Form.Control.Feedback type="invalid">
                    Name is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone # <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Email and Comments */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email <span className="text-danger">*</span></Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Email is required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="comments">
              <Form.Label>Comments <span className="text-danger">*</span></Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                placeholder="Give us some details about your vehicle's symptoms"
                value={formData.comments}
                onChange={(e) => setFormData({...formData, comments: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Comments are required.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="requestedDate">
              <Form.Label>Requested Date <span className="text-danger">*</span></Form.Label>
              <Form.Control
                required
                type="date"
                value={formData.requestedDate}
                onChange={(e) => setFormData({...formData, requestedDate: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Requested date is required.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Vehicle Information */}
            <Form.Group className="mb-3">
              <Form.Label>Vehicle Information</Form.Label>
              <Form.Check
                type="switch"
                id="vehicle-input-switch"
                label="Enter license plate instead"
                checked={useLicensePlate}
                onChange={() => setUseLicensePlate(!useLicensePlate)}
              />
            </Form.Group>

            {useLicensePlate ? (
              <Row className="mb-3">
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="License Plate"
                    value={formData.licensePlate}
                    onChange={(e) => setFormData({...formData, licensePlate: e.target.value})}
                    required
                  />
                </Col>
                <Col sm={4}>
                  <Form.Select
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    required
                  >
                    <option value="">State</option>
                    {states.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            ) : (
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Select
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                    required
                  >
                    <option value="">Year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Select
                    value={formData.make}
                    onChange={(e) => setFormData({...formData, make: e.target.value})}
                    required
                  >
                    <option value="">Make</option>
                    {makes.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col md={4}>
                  <Form.Select
                    value={formData.model}
                    onChange={(e) => setFormData({...formData, model: e.target.value})}
                    required
                  >
                    <option value="">Model</option>
                    {formData.make && modelsByMake[formData.make]?.map(model => (
                      <option key={model} value={model}>{model}</option>
                    ))}
                  </Form.Select>
                </Col>
              </Row>
            )}
            <Container className="d-flex justify-content-center">
              <Button type="submit" id="form-submit" className="btn btn-dark">Submit Request</Button>
            </Container>
          </Form>
          <Form.Text className="mt-3" id="formMessage"></Form.Text>
          <p className="text-muted text-center mt-3"><small>This is just a request and does not confirm your appointment.<br/><span className="fw-bold">One of our staff members will contact you shortly!</span></small></p>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

export default ApptRequestForm;