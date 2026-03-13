import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const MembershipPage = () => {
  return (
    <div>
      <Head>
        <title>Gym Membership</title>
        <meta name="description" content="Gym Membership" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container fluid className="p-0 m-0">
        <Row className="m-0 p-0">
          <Col md={6} className="p-0 m-0">
            <Image src="/membership-card.jpg" alt="Gym Membership Card" width={600} height={400} />
          </Col>
          <Col md={6} className="p-0 m-0">
            <h1>Get Fit with Our Membership Plans</h1>
            <p>Choose from monthly and yearly plans to suit your fitness needs.</p>
            <Link href="/contact">Contact Us</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MembershipPage;