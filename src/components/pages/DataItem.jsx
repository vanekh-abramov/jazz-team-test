import styles from "../../styles/data.module.css";
import { useState } from "react";

const DataItem = ({ data }) => {
  const [myState, setMyState] = useState({
    id: "",
    name: "",
    email: "",
    body: "",
  });

  const changeCell = (prop) => {
    return () => {
      const a = prompt();
      setMyState({ ...myState, [prop]: a });
    };
  };

  return (
    <tr key={new Date().toDateString} className={styles.row}>
      <td className={styles.row_item} onClick={changeCell("id")}>
        {myState.id ? myState.id : data.id}
      </td>
      <td className={styles.row_item} onClick={changeCell("name")}>
        {myState.name ? myState.name : data.name}
      </td>
      <td className={styles.row_item} onClick={changeCell("email")}>
        {myState.email ? myState.email : data.email}
      </td>
      <td className={styles.row_item} onClick={changeCell("body")}>
        {myState.body ? myState.body : data.body}
      </td>
    </tr>
  );
};

export default DataItem;
