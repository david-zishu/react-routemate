import { useNavigate, Outlet } from "react-router-dom";
export const Contact = () => {
  const navigate = useNavigate();

  const handleData = () => {
    return navigate("/");
  };
  return (
    <>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={handleData}>Back to Home</button>
    </>
  );
};
