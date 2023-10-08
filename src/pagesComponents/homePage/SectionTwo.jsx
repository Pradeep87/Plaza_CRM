import { useState } from "react";
import { Container, ContentWrapper } from "../../layouts";
import { InputBox } from "../../components";
import {
  Illustration,
  CompanyName,
  EmailAddress,
  Phonenumber,
  Password,
  ConfirmPassword,
  Facebook,
  Twitter,
} from "../../assets";

const SectionTwo = () => {
  const [input, setInput] = useState({
    companyName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const _onSubmit = (e) => {
    e.preventDefault();
  };

  const _onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <Container className={"sectionTwo"}>
      <ContentWrapper className={"content"}>
        <div className="image">
          <img src={Illustration} alt="Illustration" />
        </div>
        <div className="registerForm">
          <p className="heading">
            Get started with your <br /> <span>14-day free trial</span>
          </p>
          <form action="" onSubmit={_onSubmit}>
            <InputBox
              type="text"
              icon={CompanyName}
              name="companyName"
              placeholder="Company Name"
              onChange={_onChange}
              value={input.companyName}
            />
            <InputBox
              type="text"
              icon={EmailAddress}
              name="email"
              placeholder="Email"
              onChange={_onChange}
              value={input.email}
            />
            <InputBox
              icon={Phonenumber}
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={_onChange}
              value={input.phoneNumber}
            />
            <InputBox
              icon={Password}
              type="password"
              name="password"
              placeholder="Password"
              onChange={_onChange}
              value={input.password}
            />
            <InputBox
              type="password"
              icon={ConfirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={_onChange}
              value={input.confirmPassword}
            />
            <div className="conditions">
              <input type="checkbox" name="Conditions" />
              <p className="text">
                Agree with <span>Term & Conditons</span>
              </p>
            </div>

            <button type="submit">Create Account</button>
          </form>
          <div className="or">
            <span></span>
            <p>Or</p>
            <span></span>
          </div>

          <div className="socialIcon">
            <a href="https://www.facebook.com/">
              <img src={Twitter} alt="" />
            </a>
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="" />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default SectionTwo;
