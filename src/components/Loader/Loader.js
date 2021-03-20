import Loader from "react-loader-spinner";
import styles from './Loader.module.css';

export default function Loaders () {
  return (
    <div className={styles.containerLoader}>
        <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={1000} //3 secs
        />
      </div>  
    );
}