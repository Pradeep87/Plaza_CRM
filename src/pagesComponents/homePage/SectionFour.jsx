import { Container, ContentWrapper } from "../../layouts";
import {
    whiteCutElements,
    VideoIcon,
  } from "../../assets";

const SectionFour = () => (
    <Container className={"sectionfour"}>
      <ContentWrapper className="content">
        <img src={VideoIcon} alt="VideoIcon" />
        <p className="heading">Digital Solution for your Digital Problems</p>
        <img src={whiteCutElements} alt="whiteCutElements" />
        <p className="subtext">
          PlazaCRM enables a worldwide system of more than 100 kinds organizations
          in to change over more leads, draw in with clients, and develop their
          income. Change your business with the world's preferred client
          relationship the board programming.
        </p>
        <button>START YOUR FREE TRIAL</button>
      </ContentWrapper>
    </Container>
  );


  export default SectionFour