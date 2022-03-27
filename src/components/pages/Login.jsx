import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAdmin, setIsAdmin } from "../../actions/action";
import style from "../../styles/login.module.css";
import { mainUser } from "../../user";

const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const admin = useSelector((state) => state.user.isLogin);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visibleText, setVisibleText] = useState(0);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitData = (username, password) => {
    return () => {
      setVisibleText(visibleText + 1);
      dispatch(checkIsAdmin({ username, password }));
    };
  };
  console.log(visibleText);
  useEffect(() => {
    if (JSON.stringify(mainUser) === JSON.stringify(user)) {
      dispatch(setIsAdmin(true));
    }
  }, [user, dispatch, admin]);

  return (
    <div className={style.container}>
      <p>Login</p>
      <input
        onChange={usernameHandler}
        value={username}
        name="username"
        type="text"
        placeholder="Enter your username...."
      />
      <input
        onChange={passwordHandler}
        value={password}
        name="password"
        type="password"
        placeholder="Enter your password...."
      />

      {visibleText !== 0 && !admin ? (
        <p>Username or the password is entered incorrectly</p>
      ) : (
        <p>Hello {user.username}</p>
      )}
      {!admin ? (
        <button type="submit" onClick={submitData(username, password)}>
          Confirm
        </button>
      ) : (
        <p>Successful</p>
      )}
      {/* <button type="submit" onClick={submitData(username, password)}>
        Confirm
      </button> */}
    </div>
  );
};

export default Login;
