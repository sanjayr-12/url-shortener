import { useLocation } from "react-router-dom";
const Links = () => {
  const location = useLocation();

  return (
    <div className="primary-content min-h-screen p-20">
      Links
      {console.log(location)}
    </div>
  );
};

export default Links;
