import React from 'react';
import Container from 'react-bootstrap/Container';
import FooterBranding from './FooterBranding';
import Contact from './Contact';
import ApptRequestForm from './ApptRequestForm';
import Stack from 'react-bootstrap/Stack';

const DrTFooter = () => {
  return (
    <>
      <Container className="container text-center mb-4">
        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <FooterBranding />
          <Contact />
          <ApptRequestForm />
        </Stack>
      </Container>
    </>
  );
};

export default DrTFooter;