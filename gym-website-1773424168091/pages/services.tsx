import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesPage = () => {
  return (
    <div>
      <Head>
        <title>Gym Services</title>
        <meta name="description" content="Gym Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={4} className="p-0 m-0">
            <Image src="/equipment.jpg" alt="Gym Equipment" width={300} height={200} />
          </Col>
          <Col md={8} className="p-0 m-0">
            <h1>State-of-the-Art Equipment</h1>
            <p>Get the best workout with our latest and greatest equipment.</p>
            <Link href="/membership">Join Now</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesPage;