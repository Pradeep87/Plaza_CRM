import React from 'react'
import { Container, ContentWrapper } from '../../layouts';
import {
  SliderImage, Illustration, FinanceSolution, BusinessAnalysis, MarketingStrategy,
  CustomerService, Sales
} from '../../assets';
import { Link } from 'react-router-dom';


const solutions = [
  {
    id:1,
    icon: FinanceSolution,
    heading: "Finance Solutions",
    text: "Finance is the management of money, particularly in relation to companies, organisations, or"
  },
  {
    id:2,
    icon: BusinessAnalysis,
    heading: "Business Analysis",
    text: "Business analytics refers to the skills, technologies, practices for continuous iterative exploration"
  },
  {
    id:2,
    icon: MarketingStrategy,
    heading: "Marketing Strategy",
    text: "A market analysis studies the attractiveness and the dynamics of a special market ..."
  },
  {
    id:4,
    icon: CustomerService,
    heading: "Customer Service",
    text: "Customer service is the provision of service to customers before, during, and after a purchase"
  },
  {
    id:5,
    icon: Sales,
    heading: "Sales",
    text: "generating sales requires potential customers to understand that a product exists,"
  },
]



const Solutions = ({ id, icon, heading, text }) => {
  return (
    <div className="solutionsCard">
      <img src={icon} alt={heading} />
      <p className='heading'>{heading}</p>
      <p className='text'>{text}</p>
      <Link to={`/solutions/${id}`}>Read More</Link>
    </div>
  )
}



const SectionOne = () => <Container className={'sectionOne'}>
  <ContentWrapper className={'content'} >
    <div className='text'>
      <p className='heading'>Digital Solution for your  <span>Digital Problems</span></p>
      <p className='subtext'>
        PlazaCRM enables a worldwide system of more than 100 kinds organizations in to change over more leads, draw in with clients, and develop their income. Change your business with the world's preferred client relationship the board programming.
      </p>
      <button>KNOW MORE</button>
    </div>
    <div className='image'>
      <img src={SliderImage} alt="SliderImage" />
    </div>
  </ContentWrapper>
</Container>


const SectionTwo = () => <Container className={'sectionTwo'}>
  <ContentWrapper className={'content'} >
    <div className='image'>
      <img src={Illustration} alt="Illustration" />
    </div>
    <div className='registerForm'>
      <p className='heading'>Get started with your <br /> <span>14-day free trial</span></p>
      <form action="" >
        <input type="text" name='companyName' placeholder='Company Name' />
        <input type="text" name='email' placeholder='Email' />
        <input type="text" name='phoneNumber' placeholder='Phone Number' />
        <input type="password" name='password' placeholder='Password' />
        <input type="password" name='confirmPassword' placeholder='Confirm Password' />
        <div className='conditions'>
          <input type="checkbox" name="" id="" />
          <p className='text'>
            Agree with <span>Term & Conditons</span></p>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  </ContentWrapper>
</Container>


const SectionThree = () => <Container className={'sectionThree'}>
  <ContentWrapper >
    <p className='heading'>Solutions</p>
    <p className='subtext'>One Application solver your all Digital Problems</p>

    <div className='solutions'>
      {solutions.map((data, idx) => <Solutions key={idx} {...data} />)
      }
    </div>
  </ContentWrapper>
</Container>


const Home = () => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  )
}

export default Home
