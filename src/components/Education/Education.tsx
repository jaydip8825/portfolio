import { Container } from "../Experience/styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Education() {
  return (
    <Container id="educations">
      <h2>Education</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3>  Bachelor of Computer Applications </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Swami Sahajanand College of computer science
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2021 - 2024
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3> Higher Secondary School Certificate </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Shree Sharda Mandir Vidya Mandir,Talaja,Bhavnagar
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2019 - 2021
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div
              className="body"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3> Secondary School Certificate </h3>
            </div>
            <h4 style={{ display: "flex", justifyContent: "center" }}>
              {" "}
              Shree Saraswati Vidya Mandir,Talaja,Bhavnagar{" "}
            </h4>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              2018 - 2019
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
