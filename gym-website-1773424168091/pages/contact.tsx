import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Gym Contact</title>
        <meta name="description" content="Gym Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={6} className="p-0 m-0">
            <Image src="/contact-image.jpg" alt="Gym Contact Image" width={600} height={400} />
          </Col>
          <Col md={6} className="p-0 m-0">
            <h1>Get in Touch with Us</h1>
            <p>Contact us for any queries or to join our gym.</p>
            <Link href="/membership">Join Now</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;