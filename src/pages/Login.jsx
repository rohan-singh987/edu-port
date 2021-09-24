import styled from 'styled-components'
import { Link } from "react-router-dom"
import './Login.css'

const Login = () => {
    return (
        <div>
         <div className="head">
         <img src="/images/2.0.png" alt="" />
            
         <Link to="/Home"><button className="btn">Login </button></Link>
            
            

        </div>
        <Container>
            <Content>
                <CTA>    
                    <CTALogoOne src="" alt="" />
                    <SignUp>Click For Future</SignUp>
                        <Description>
                            One Stop For All Your Courses Need
                        </Description>
                </CTA>    
            </Content>
        </Container>
        </div>
    )
}

const Container = styled.section`
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
    text-align: center;
//   height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;


const CTA = styled.div`
//   max-width: 650px;
//   width: 100%;
  display: flex;
  flex-direction: column;
`;


const CTALogoOne = styled.img`
// background-image:linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)),url("https://www.brixwelllimited.com/images/khan-academy.png")
    width: 400px;
    margin-bottom: 12px;
//   max-width: 600px;
//   min-height: 1px;
  display: block;
//   width: 100%;
`;


const Description = styled.p`
    color: hsla(0, 0%, 100%, 1);
    width : 400px;
    font-size: 30px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;


const SignUp = styled.a`
width: 400px;
    cursor: pointer;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
//   width: 100%;
  letter-spacing: 1.5px;
  font-size: 25px;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 10px;
  &:hover {
    background-color: #0483ee;
  }
  `;

export default Login
