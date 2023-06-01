import { PropagateLoader } from "react-spinners";
import "./index.css";

const Button = (props) => {
  const { buttonText, onClick, loading } = props;
  return (
    <button
      type="button"
      className="get-started-button"
      onClick={onClick}
      disabled={loading}
    >
      {buttonText}
      {loading && <PropagateLoader color="#36d7b7" />}
    </button>
  );
};

export default Button;
