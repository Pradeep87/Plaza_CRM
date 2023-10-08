import { Container, ContentWrapper } from "../../layouts";
import { SolutionsCard } from "../../components";

import {
    FinanceSolution,
    BusinessAnalysis,
    MarketingStrategy,
    CustomerService,
    Sales,
    CutElements,
  } from "../../assets";


  
const solutions = [
    {
      id: 1,
      icon: FinanceSolution,
      heading: "Finance Solutions",
      text: "Finance is the management of money, particularly in relation to companies, organisations, or",
    },
    {
      id: 2,
      icon: BusinessAnalysis,
      heading: "Business Analysis",
      text: "Business analytics refers to the skills, technologies, practices for continuous iterative exploration",
    },
    {
      id: 2,
      icon: MarketingStrategy,
      heading: "Marketing Strategy",
      text: "A market analysis studies the attractiveness and the dynamics of a special market ...",
    },
    {
      id: 4,
      icon: CustomerService,
      heading: "Customer Service",
      text: "Customer service is the provision of service to customers before, during, and after a purchase",
    },
    {
      id: 5,
      icon: Sales,
      heading: "Sales",
      text: "generating sales requires potential customers to understand that a product exists,",
    },
  ];
  

const SectionThree = () => (
    <Container className={"sectionThree"}>
      <ContentWrapper>
        <div className="head">
          <p className="heading">Solutions</p>
          <img src={CutElements} alt="" />
          <p className="subtext">
            One Application solver your all Digital Problems
          </p>
        </div>
  
        <div className="solutions">
          {solutions.map((data, idx) => (
            <SolutionsCard key={idx} {...data} />
          ))}
        </div>
      </ContentWrapper>
    </Container>
  );
  

  export default SectionThree