import React from "react";
import { BsMap } from "react-icons/bs";
import { auth } from "../Firebase/FirebaseUtils";
import { Nav, StyledLink, NavButton } from "./HeaderStyles";
import { Redirect } from 'react-router-dom';

const Header = ({ currentUser }) => {
  return (
    <>
      <Nav>
        <div>
          <StyledLink to="/">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 2rem",
              }}
            >
              LocationFinder &nbsp; <BsMap style={{ fontSize: "1.5rem" }} />
            </div>
          </StyledLink>
        </div>

        <div>
          <StyledLink to="/profile">Profile</StyledLink>

    
            {currentUser ? (
              
              <StyledLink>
                <Redirect to="/"></Redirect>
                <NavButton onClick={() => auth.signOut()}>Sign out</NavButton>
              </StyledLink>

            ) : (
              <StyledLink to="/signup" >
                <NavButton>Log in</NavButton>
              </StyledLink>
            )}

        </div>
      </Nav>
    </>
  );
};

export default Header;
