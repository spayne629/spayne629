import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import carwrench from '../assets/carwrench.png';
import cel from '../assets/celicon.png';
import spring from '../assets/springicon.png';
import caronlift from '../assets/caronlift.png';
import motor from '../assets/motor.png';
import svcdone from '../assets/svcdone.png';


const Services = () => {
  return (
    <>
      <Container fluid id="services">
        <Row className="align-items-center justify-content-around px-3" height="360">
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="justify-content-around align-items-center">
            <Card.Img src={carwrench} id="gearTire" alt="an outline icon of a car & wrench" className="card-img mb-2 pb-1 pt-4" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center pt-2">15<span>+</span> Years Experience</Card.Title>
              <Card.Text className="justify-content-around pb-2 px-2 mx-2 mb-2 text-center">
                Dr. T has been delivering top-notch automotive service with a commitment to excellence for over 15 years. Whether it's routine maintenance or complex repairs, you can count on Dr. T's expertise and dedication to keep your vehicle running smoothly. Trust your car with the best in the business!
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="justify-content-around align-items-center">
            <Card.Img src={cel} alt="check engine light icon" className="card-img mb-2 pt-4" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center pt-2">Thorough Diagnostics</Card.Title>
              <Card.Text className="justify-content-around p-2 m-2">
                We pride ourselves on providing thorough diagnostic services to pinpoint any issues with your vehicle. Our state-of-the-art equipment and experienced technicians ensure that no problem goes undetected, giving you peace of mind and a smooth ride every time.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="align-items-center">
            <Card.Img src={spring} alt="auto battery icon" className="card-img mb-2 pt-4" id="battery" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center">Suspension Repairs</Card.Title>
              <Card.Text className="justify-content-around p-2 m-2">
                When it comes to suspension repairs, Dr. T has you covered. Our skilled technicians use the latest tools and techniques to ensure your vehicle's suspension system is in top condition, providing you with a smoother, safer ride.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row className="align-items-center justify-content-around px-3 pt-4 mb-4">
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="justify-content-around align-items-center">
            <Card.Img src={caronlift} id="gearTire" alt="an icon that looks like a gear & a tire" className="card-img mb-2 pb-1 pt-4" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center pt-2">High Quality, Affordable Auto Repairs</Card.Title>
              <Card.Text className="justify-content-around pb-2 px-2 mx-2 mb-2 text-center">
                When you need high-quality auto repairs that won't break the bank, Dr. T is your go-to guy. With a reputation for excellence and affordability, you can trust Dr. T to get the job done right without stretching your budget.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="justify-content-around align-items-center">
            <Card.Img src={motor} alt="motor icon" className="card-img mb-2 pt-4" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center pt-2">No Job Too Big or Too Small</Card.Title>
              <Card.Text className="justify-content-around p-2 m-2">
                Whether it's a minor fix or a major overhaul, Dr. T and his team tackle every task with the same level of dedication and expertise, ensuring your vehicle gets the care it deserves.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="secondary" style={{ width: '22rem', height: '25rem' }} className="align-items-center">
            <Card.Img src={svcdone} alt="car out of shop icon" className="card-img mb-2 pt-4" id="battery" />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-center">Getting Your Car Back in Tip-Top Shape</Card.Title>
              <Card.Text className="justify-content-around p-2 m-2">
                Dr. T is committed to getting your car back in tip-top shape every time. With meticulous attention to detail and a passion for perfection, you can count on Dr. T to have your vehicle running smoothly and safely.
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Services;
          