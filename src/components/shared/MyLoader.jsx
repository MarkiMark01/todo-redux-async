import { Hourglass } from "react-loader-spinner";
import styles from "./styles/styles.module.scss";

export const MyLoader = () => {
  return (
    <div className={styles.loader}>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        // colors={["#306cce", "#72a1ed"]}
        colors={["#c70101", "#c70101"]}
      />
    </div>
  );
};
