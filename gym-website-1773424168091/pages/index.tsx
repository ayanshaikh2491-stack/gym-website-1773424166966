import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Professional Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={6} className="p-0 m-0">
            <Image src="/hero-image.jpg" alt="Gym Hero Image" width={600} height={400} />
          </Col>
          <Col md={6} className="p-0 m-0">
            <h1>Welcome to Gym Website</h1>
            <p>Get fit with our state-of-the-art equipment and expert trainers.</p>
            <Link href="/services">Learn More</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;