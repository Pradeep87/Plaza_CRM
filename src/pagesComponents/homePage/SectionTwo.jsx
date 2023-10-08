import { Container, ContentWrapper } from "../../layouts";
import {
    Illustration,
  } from "../../assets";

const SectionTwo = () => (
    <Container className={"sectionTwo"}>
      <ContentWrapper className={"content"}>
        <div className="image">
          <img src={Illustration} alt="Illustration" />
        </div>
        <div className="registerForm">
          <p className="heading">
            Get started with your <br /> <span>14-day free trial</span>
          </p>
          <form action="">
            <input type="text" name="companyName" placeholder="Company Name" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="phoneNumber" placeholder="Phone Number" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <div className="conditions">
              <input type="checkbox" name="" id="" />
              <p className="text">
                Agree with <span>Term & Conditons</span>
              </p>
            </div>
  
            <button type="submit">Create Account</button>
          </form>
        </div>
      </ContentWrapper>
    </Container>
  );
  

  export default SectionTwo