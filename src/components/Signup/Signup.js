import React from "react";

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
} from "./SignupStyles";

import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter";
import { signInWithGoogle } from "../Firebase/FirebaseUtils";

const Signup = () => {
  return (
    <>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign up</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Confirm Password"
              type="password"
              required
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
            <CustomButton type="button">Sign up</CustomButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </>
  );
};

export default Signup;
