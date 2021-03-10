import styled, { css } from "styled-components";

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
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 3.2rem;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.4rem;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: 0.55;
  transition: opacity 0.25s ease-in;
  font-size: 2.5rem;

  &:hover {
    opacity: 0.95;
  }

  ${(props) =>
    props.twitter &&
    css`
      color: #1da1f2;
    `}

  ${(props) =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${(props) =>
    props.facebook &&
    css`
      color: #4267b2;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 0.8rem;
  display: block;
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 1.6rem;
  }
`;

export const CustomButton = styled.button`
  height: 3rem;
  width: 8rem;
  background-color: #e5195f;
  color: #fff;
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);

    &:active {
      background-color: #f5a3bf;
    }
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 1.2rem;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;
