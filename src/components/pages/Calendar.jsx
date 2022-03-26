import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routerLinks";

const Calendar = () => {
  const { isLogin } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(LOGIN_ROUTE);
    }
  }, [isLogin, navigate]);

  return <div>Calendar</div>;
};

export default Calendar;
