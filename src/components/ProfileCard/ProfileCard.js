import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { usePosition } from "../hooks/usePosition";

import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";
import { IoMdPersonAdd } from "@react-icons/all-files/io/IoMdPersonAdd";
import { MdMessage } from "@react-icons/all-files/md/MdMessage";
import { BsHeartFill } from "@react-icons/all-files/bs/BsHeartFill";
import { useAuth } from "../../contexts/AuthContext";

import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardImage,
  CardField,
  CardText,
  CardIconContainer,
  CardIcon,
  CardButton,
} from "./ProfileCardStyles";

export default function ProfileCard() {
  const { currentUser } = useAuth();
  const [userName, setUserName] = useState("");
  const [userPhotoUrl, setUserPhotoUrl] = useState(
    "https://secure.gravatar.com/avatar/d6fd6bff19d7f0ad4024f3811474fe92?s=180&d=mm&r=g"
  );

  useEffect(() => {
    if (currentUser != null) {
      currentUser.providerData.forEach(function (profile) {
        setUserName(profile.displayName);
        setUserPhotoUrl(profile.photoURL);
        console.log(profile.photoURL);
      });
    }
  }, []);

  if (userName === null) {
    setUserName("");
  }

  if (userPhotoUrl === null) {
    setUserPhotoUrl(
      "https://secure.gravatar.com/avatar/d6fd6bff19d7f0ad4024f3811474fe92?s=180&d=mm&r=g"
    );
  }

  const { latitude, longitude } = usePosition(true);
  const [county, setCounty] = useState("");
  const [province, setProvince] = useState("");

  var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  async function fetchAddress() {
    let locationArray = [];
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
      {
        method: "GET",
      }
    ).then((response) => {
      getJSON(response.url, function (err, data) {
        if (err !== null) {
          console.log("Something went wrong: " + err);
        } else {
          locationArray.push(data.address.county);
          locationArray.push(data.address.province);
          setCounty(locationArray[0]);
          setProvince(locationArray[1]);
        }
      });
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAddress();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <CardWrapper>
        <CardHeader>
          <CardHeading>{`Hello ${userName} 👋`}</CardHeading>
        </CardHeader>

        <CardBody>
          <CardImage src={`${userPhotoUrl}`} />
          <CardField>
            <MdLocationOn style={{ color: "#e5195f" }} />{" "}
            {county && province ? `${county} ${province}` : "Location blocked!"}
          </CardField>

          <CardText>
            Art party whatever literally hella beard synth yuccie. Normcore
            hoodie trust fund franzen. Pabst gentrify echo park shabby chic
            salvia, fixie enamel pin gochujang woke raclette four dollar toast
            tumeric. Godard umami pug fam. Slow-carb chia craft beer cornhole yr
            actually you probably haven't heard of them deep v flannel.
          </CardText>
        </CardBody>

        <CardIconContainer>
          <CardIcon>
            <MdMessage />
          </CardIcon>
          <CardIcon>
            <IoMdPersonAdd />
          </CardIcon>
          <CardIcon>
            <BsHeartFill />
          </CardIcon>
        </CardIconContainer>
      </CardWrapper>

      <Link to="/">
        <CardButton>Back to Home</CardButton>
      </Link>
    </div>
  );
}
