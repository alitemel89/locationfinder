import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 6rem;
  background: linear-gradient(45deg, #173f5f 30%, #20639b 90%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Public Sans", sans-serif;
  font-weight: 300;
  font-size: 1.4rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 426px) {
        width: auto;
        font-size: 1.2rem;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0rem 1.2rem;
  margin-right: 2rem;
  cursor: pointer;

  @media screen and (max-width: 426px) {
        width: 40rem;
        font-size: 1.2rem;
        margin: 0 auto;
  }
`;

export const NavButton = styled.button`
  height: 3rem;
  width: 10rem;
  background-color: #e5195f;
  color: snow;
  padding: 0 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;
  letter-spacing: 1px;
  &:hover {
    transform: scale(1.05);
    transition: all .2s ease-in-out;
  }

  &:active {
    background-color: #f5a3bf;
  }

  @media screen and (max-width: 426px) {
        font-size: 1.2rem;
  }
`;