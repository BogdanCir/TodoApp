import React from "react";
import { useParams } from "react-router-dom";
export const LongDescription = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
