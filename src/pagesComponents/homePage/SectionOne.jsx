import { Container, ContentWrapper } from "../../layouts";
import {
    SliderImage,
  } from "../../assets";

const SectionOne = () => (
    <Container className={"sectionOne"}>
      <ContentWrapper className={"content"}>
        <div className="text">
          <p className="heading">
            Digital Solution for your <span>Digital Problems</span>
          </p>
          <p className="subtext">
            PlazaCRM enables a worldwide system of more than 100 kinds
            organizations in to change over more leads, draw in with clients, and
            develop their income. Change your business with the world's preferred
            client relationship the board programming.
          </p>
          <button>KNOW MORE</button>
        </div>
        <div className="image">
          <img src={SliderImage} alt="SliderImage" />
        </div>
      </ContentWrapper>
    </Container>
  );


  export default SectionOne