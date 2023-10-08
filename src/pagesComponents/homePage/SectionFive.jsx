import { Container, ContentWrapper } from "../../layouts";

import {

    SellingEasier,
  } from "../../assets";

  const features = [
    {
      text: "Process Management",
      id: 1,
    },
    {
      text: "Analytics",
      id: 2,
    },
    {
      text: "Performance Management",
      id: 3,
    },
    {
      text: "Predictive Sales and Intelligence",
      id: 4,
    },
    {
      text: "Customization",
      id: 5,
    },
    {
      text: "Marketing Automation",
      id: 6,
    },
    {
      text: "Mobile apps",
      id: 7,
    },
    {
      text: "Security",
      id: 8,
    },
    {
      text: "Developer Platform",
      id: 9,
    },
  ];
  
  
  


const SectionFive = () => (
    <Container className={"sectionFive"}>
      <ContentWrapper className="content">
        <div className="contentBox">
          <p className="heading">FEATURES THAT MAKE SELLING EASIER</p>
          <p className="subtext">
            Conquer every stage of the customer journey with PLAZA CRM
          </p>
          <ul>
            {features.map((f) => (
              <li key={f.id}>{f.text}</li>
            ))}
          </ul>
          <button>Join Now</button>
        </div>
        <div className="image">
          <img src={SellingEasier} alt="Illustration" />
        </div>
      </ContentWrapper>
    </Container>
  );

  export default SectionFive