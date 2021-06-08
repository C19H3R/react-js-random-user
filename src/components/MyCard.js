import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import {
  FaEnvelope,
  FaMapMarkedAlt,
  FaPhone,
  FaMale,
  FaFemale,
} from "react-icons/fa";

const MyCard = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h1>
            <span className="mx-2">{details.name?.title}</span>
            <span>{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h1>
        </CardTitle>
        <CardText>
          <p>
            <FaMapMarkedAlt className="mx-2" />
            {details.location?.city}
          </p>
          <p>
            <FaPhone className="mx-2" />
            {details.phone}
          </p>
          <p>
            <FaEnvelope className="mx-2" />
            {details.email}
          </p>
          <p>
            <FaMale className="mx-2" />/
            <FaFemale className="mx-2" />
            {details.gender}
          </p>
        </CardText>
      </CardBody>
    </Card>
  );
};
export default MyCard;
