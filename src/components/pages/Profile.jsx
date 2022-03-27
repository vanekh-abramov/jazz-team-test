import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routerLinks";
const Profile = () => {
  const { isLogin } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate(LOGIN_ROUTE);
    }
  }, [isLogin, navigate]);

  return <div>Profile {user.username}</div>;
};

export default Profile;
