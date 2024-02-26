import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <div className="w-full h-[100vh] items-center justify-center flex flex-col gap-2">
      <h1 className="text-3xl font-bold ">Oops </h1>
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <h4 className="text-xl">
        {err.status} {err.statusText}
      </h4>
    </div>
  );
};
export default Error;
