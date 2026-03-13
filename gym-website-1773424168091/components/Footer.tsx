import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={6} className="p-0 m-0">
            <p>&copy; 2023 Gym Website</p>
          </Col>
          <Col md={6} className="p-0 m-0">
            <p>Follow us:</p>
            <a href="#" className="social-link">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="#" className="social-link">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
            <a href="#" className="social-link">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;