import React, { useRef, useState } from "react";
import { useAuth } from '../../contexts/AuthContext';

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardLink,
  CustomButton,
  CardLinkText
} from "./SignupStyles";

import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { signInWithGoogle } from "../Firebase/FirebaseUtils";


const Signup = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      alert('Passwords do not match');
      return;
    }

    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch(error) {
      console.log(error.message);
    }

  }
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CardHeading>
            Sign up 
          </CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required ref={userNameRef}/>
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required ref={emailRef} />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required  ref={passwordRef} />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Confirm Password"
              type="password"
              required
              ref={passwordConfirmRef}
            />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Or log in using</CardOptionsNote>

            <CardOptions>
              <CardOptionsItem>
                <CardIcon twitter>
                  <FiTwitter style={{ fontSize: 36 }} />
                </CardIcon>
              </CardOptionsItem>

              <CardOptionsItem>
                <CardIcon>
                  <FcGoogle
                    onClick={() => signInWithGoogle()}
                    style={{ fontSize: 36 }}
                  />
                </CardIcon>
              </CardOptionsItem>
            </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CustomButton onClick={handleSubmit} type="button">Sign up</CustomButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink to="/signin">
              <CardLinkText>I already have an account</CardLinkText>
            </CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </>
  );
};

export default Signup;
