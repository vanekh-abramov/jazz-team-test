import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routerLinks";
import styles from "../../styles/data.module.css";
import DataItem from "./DataItem";
import dataForData from "../../dataForData.json";

const Data = () => {
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(LOGIN_ROUTE);
    }
  }, [isLogin, navigate]);

  return (
    <div className={styles.container_inner}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.table_title}>
            <th className={styles.title_item}>id</th>
            <th className={styles.title_item}>name</th>
            <th className={styles.title_item}>email</th>
            <th className={styles.title_item}>body</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {dataForData.map((data, index) => (
            <DataItem data={data} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
