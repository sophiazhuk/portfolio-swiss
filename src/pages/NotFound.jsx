import { useNavigate } from "react-router-dom";
import Meta from "../components/seo/Meta";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Meta
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <div className={styles.container}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <button className={styles.button} onClick={() => navigate("/")}>
          Return Home
        </button>
      </div>
    </>
  );
};

export default NotFound;
