import React, { useEffect } from "react";
import "./login.css";
import { useAuth } from "../../contexts/AuthContext";

function LoginSuccess() {
  const SERVER_API_URL = "/api";
  const { setUser } = useAuth();
  useEffect(() => {
    fetch(`${SERVER_API_URL}/auth/user`, {
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          // console.log(user);
          setUser(true);
        } else {
          console.log("未正確登入");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const close = () => {
    window.close();
  };
  return (
    <>
      <div className="success">
        <div className="success_title">恭喜你註冊成功</div>
        <div className="success_content">
          <p>你的預設密碼為: default_password </p>
          <p>請更改密碼以確保帳戶安全</p>
          <button className="success_btn" onClick={close}>
            關閉
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginSuccess;
