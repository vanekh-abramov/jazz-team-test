import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  CALENDAR_ROUTE,
  DATA_ROUTE,
  HOME_ROUTE,
  INFO_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
} from "../constants/routerLinks";
import styles from "../styles/header.module.css";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.isLogin);

  return (
    <>
      <header className={styles.header}>
        <a
          className={styles.logo}
          href="https://jazzteam.org"
          rel="noreferrer"
          target="_blank"
        >
          JazzTeam
        </a>
        <nav className={styles.nav}>
          <NavLink className={styles.nav_link} to={HOME_ROUTE}>
            home
          </NavLink>
          <NavLink className={styles.nav_link} to={PROFILE_ROUTE}>
            profile
          </NavLink>
          <NavLink className={styles.nav_link} to={CALENDAR_ROUTE}>
            calendar
          </NavLink>
          <NavLink className={styles.nav_link} to={DATA_ROUTE}>
            data
          </NavLink>
          <NavLink className={styles.nav_link} to={INFO_ROUTE}>
            info
          </NavLink>
          <NavLink className={styles.nav_link} to={LOGIN_ROUTE}>
            login
          </NavLink>
        </nav>

        {admin ? <h2>{user.username}</h2> : false}

      </header>
    </>
  );
};

export default Header;
