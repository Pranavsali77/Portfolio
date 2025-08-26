import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/Ps9jybjT/Screenshot-2025-08-26-135257.png"
              isBlog={false}
              title="E-Royalty Authority Platform And Overload Detection System"
              description="The E-Royalty Authority Platform and Overload Detection System aims to revolutionize the way royalties are managed and detected in the online marketplace. This platform provides a comprehensive solution for tracking and managing royalties in real-time, while also detecting potential overload scenarios that can lead to unauthorized usage and loss of revenue. The E-Royalty Authority Platform solves this problem by providing a centralized system that enables content creators and rights holders to register their works and monitor their royalty earnings. By integrating with various online marketplaces and platforms, this system ensures that every sale or usage of the registered content is tracked and accounted for, allowing for accurate royalty calculations and timely payment distribution."
              techStack={["HTML", "CSS", "JS", "MYSQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/SJ2pQBR/ecomm.png"
              isBlog={false}
              title="Amazon Clone Page"
              description="This project is a full-featured E-Commerce application built with ReactJS. It supports user authentication, product listings, and cart functionalities. The app is deployed on Firebase, and the backend API is hosted on Render."
              techStack={["HTML", "CSS"]}
              ghLink="https://github.com/Pranavsali77/Amazon-Clone-Page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/tx2zND2/weather.png"
              isBlog={false}
              title="Weather Forecast GUI with Python"
              description="The Weather Forecast App is a Python-based GUI application designed to provide comprehensive weather details for a specified location. It leverages various weather parameters to offer users a detailed and accurate forecast."
              techStack={["Python"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/NZnJ41x/project.jpg"
              isBlog={false}
              title="Market Basket Analysis for Amazon Product Recommendation"
              description="Conducted Market Basket Analysis (MBA) on Amazon product dataset to enhance recommendations. Identified top-selling products and top products in each category using review count. Implemented association rule mining for personalized recommendations. Evaluated effectiveness through metrics."
              techStack={["Python", "Pandas", "NumPy", "Kaggle"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://i.ibb.co/SJ2pQBR/ecomm.png"
              isBlog={false}
              title="Ecommerence Online Marketplace"
              description="This project enables users to browse, buy, and sell products through a user-friendly web platform. It supports admin management, product listings, secure transactions, and order tracking features."
              techStack={["Springboot", "Java", "Angular", "MYSQL"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
