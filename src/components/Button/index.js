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
      {loading ? <PropagateLoader color="#36d7b7" /> : buttonText}
    </button>
  );
};

export default Button;
