import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import caronreallift from '../assets/caronreallift.jpg';
import interior from '../assets/interior.jpg';
import cuzzin from '../assets/cuzzin.jpg';

const Featurettes = () => {
  return (
    <>
      <hr className="featurette-divider" />
      <Row className="featurette" id="about">
        <Col className="col-md-7 feature-col pt-3 px-5">
          <h2 className="featurette-heading fw-normal h1 text-primary lh-1 text-center">Dealership Quality</h2>
          <p className="lead text-center px-5 pt-3">You don't have to pay dealership prices to get dealership quality.</p>
        </Col>
        <Col className="col-md-5 feature-col pt-3 px-5">
          <Image src={caronreallift} className="bd-placeholder-img p-2 bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" aria-label="placeholder: 400x400" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>car on real lift</title>
        </Col>
      </Row>

      <hr className="featurette-divider" />

      <Row className="featurette">
        <Col className="col-md-7 order-md-2 feature-col pt-3 px-5">
          <h2 className="featurette-heading fw-normal lh-1 text-primary text-center h1">Competitive Prices</h2>
          <p className="lead text-center px-5 pt-3">If you find a better price somewhere else, we will beat it by 10%<sup>*</sup>.</p>
        </Col>
        <Col className="col-md-5 order-md-1 feature-col pt-3 px-4">
          <Image src={interior} className="bd-placeholder-img p-2 bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" aria-label="placeholder: 400x400" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>interior</title>
        </Col>
      </Row>
        <hr className="featurette-divider" />
        <Row className="featurette">
        <Col className="col-md-7 feature-col pt-3 px-4">
          <h2 className="featurette-heading fw-normal text-primary ps-2 h1 lh-1 text-center">Certified Technicians</h2>
          <p className="lead text-center px-5 pt-3">Dr. T only employees certified technicians, so you can rest assured that only skilled hands will be repairing your vehicle.</p>
        </Col>
        <Col className="col-md-5 feature-col -2 pt-3 px-4">
          <Image src={cuzzin} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mb-4 mx-auto" width="400" height="400" aria-label="placeholder: 400x400" preserveAspectRatio="xMidYMid slice" focusable="false" /><title>cuzzin</title>
        </Col>
      </Row>
    </>
  );
};

export default Featurettes;