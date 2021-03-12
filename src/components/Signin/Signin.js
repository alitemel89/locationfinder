import React, { useRef } from "react";
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
} from "./SigninStyles";

import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { signInWithGoogle } from "../Firebase/FirebaseUtils";


const Signin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, currentUser } = useAuth();
  console.log(currentUser);

  async function handleSubmit(e) {
    e.preventDefault()
    login(emailRef.current.value, passwordRef.current.value)


    try {
      await login(emailRef.current.value, passwordRef.current.value)
      
    } catch(error) {
      console.log(error.message);
      alert('Failed to sign in')
    }

  }

  
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CardHeading>
            Sign in with email
          </CardHeading>
        </CardHeader>

        <CardBody>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required ref={emailRef} />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required  ref={passwordRef} />
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
            <CustomButton onClick={handleSubmit} type="button">Sign in</CustomButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink to="/signup">
              <CardLinkText>Need an account?</CardLinkText>
            </CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </>
  );
};

export default Signin;
