import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorContent from "../components/Error/ErrorContent";

const Error = () => {
  const error = useRouteError();

  let errorTitle = "An error ocurred!";
  let errorMessage = "Something went wrong...";

  if (error.status === 500) {
    errorMessage = error.data.message;
  }

  if (error.status === 404) {
    errorTitle = "Not found!";
    errorMessage = "Could not find resource or page....";
  }
  return (
    <ErrorContent title={errorTitle}>
      <p>{errorMessage}</p>
    </ErrorContent>
  );
};

export default Error;
