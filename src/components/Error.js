import { useRouteError } from "react-router-dom";



const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Opps!</h1>
      <p>Something went wrong!!</p>
      <p>{error.status}: {error.statusText}</p>
    </div>
  );
};

export default Error;
