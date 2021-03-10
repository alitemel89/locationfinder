import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 3.2rem;
  margin: 48px auto 0;
  width: 350px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

`;

export const CardHeader = styled.header`
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
`;

export const CardHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;

  
`;

export const CardBody = styled.div`
  padding-right: 3.2rem;
  padding-left: 3.2rem;
  font-size: 1.4rem;
`;

export const CardImage = styled.img`
  height: 10rem;
  width: 10rem;
  background: url("https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg")
    no-repeat;
  background-size: cover;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

export const CardField = styled.div`
  padding: 2rem 3rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const CardText = styled.p`
  font-weight: 100;
  color: rgba(0, 0, 0, 0.5);
`;

export const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 2.5rem;

`;

export const CardIcon = styled.i`
  color: #e5195f;
  cursor: pointer;
  &:active {
      color: #f28caf;
      transition:all .1s ease-in-out;
  }

`;




export const CardButton = styled.button`
    height: 3rem;
    width: 16rem;
    background-color: #e5195f;
    color: snow;
    padding: 0 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    letter-spacing: 1px;
    display:block;
    margin: 3rem auto;
    

    &:hover {
    transform: scale(1.05);
    transition: all .2s ease-in-out;
    }

    &:active {
    background-color: #f5a3bf;
    }
`

