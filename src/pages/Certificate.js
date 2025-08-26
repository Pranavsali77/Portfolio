import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../components/Particle";

const certificates = [
  {
    imgPath: "https://i.ibb.co/7tK4swhq/Future-Skill-certificate.jpg",
    title: "Exploratory data analysis (Level 2 - AI Ready of AI ASCEND) by Accenture",
    link: "https://drive.google.com/file/d/1wPHNst3VDjA08NP23W5yYerRrIv3XD98/view?usp=drive_link",
  },
  {
    imgPath: "https://i.ibb.co/BVfpL7bg/Screenshot-2025-08-26-133506.png",
    title: "Java Fundamentals",
    link: "https://drive.google.com/file/d/1SE4_QOR9AYXTiAAZ2vT5afB3CxmZo8Kz/view?usp=drive_link",
  },
  {
    imgPath: "https://i.ibb.co/gZ4pzcdL/Mongodb-Certificate.jpg",
    title: "MongoDB",
    link: "https://drive.google.com/file/d/1detYE5FKynE82yteq2xFThEd55Bx7YkP/view?usp=drive_link",
  },

  {
    imgPath: "https://i.ibb.co/yBB3Vxrb/problem-solving-basic-certificate.jpg",
    title: "Problem Solving",
    link: "https://drive.google.com/file/d/1E-ydibsAjsLB7JHiJdcqH_RdWOplbsa9/view?usp=drive_link",
  },
  {
    imgPath: "https://i.ibb.co/VGcLmt0/Tailwand-Workshop.jpg",
    title: "National Chung cheng University,Taiwan:",
    link: "https://drive.google.com/file/d/14KoS6tnuv100UcV3EVDBw0OnUlBfgoov/view?usp=drive_link",
  },

  {
    imgPath: "https://i.ibb.co/W4XN1BTD/Certificate-Of-Completion-What-Is-Generative-AI-1.jpg",
    title: "What Is Generative AI?",
    link: "https://drive.google.com/file/d/1WtZn4YXDcNzqyla_ajdWjnTyobCNzYOa/view?usp=drive_link",
  },
];

const Certificate = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="yellow">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my certificates showcasing my skills and accomplishments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificates.map((cert, index) => (
            <Col md={4} className="project-card" key={index}>
              <Card className="project-card-view">
                <Card.Img
                  variant="top"
                  src={cert.imgPath}
                  alt="Certificate"
                  style={{
                    height: "250px", // Adjust height to make the image smaller
                    objectFit: "contain",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Button
                    variant="primary"
                    href={cert.link} // Link to open the certificate
                    target="_blank"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Open
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Certificate;
