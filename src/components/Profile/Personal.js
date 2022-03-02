import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";

function Personal() {
  const [userObj, setUserObj] = useState({});
  let navigate = useNavigate();
  const SERVER_API_URL = "/api/dev/";
  useEffect(() => {
    fetch("/api/dev/auth/checkUser", {
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserObj(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="personal">
      <table>
        <thead>
          <tr>
            <th>{`姓名`}</th>
            <th>{`email`}</th>
            <th>{`密碼`}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userObj.username}</td>
            <td>{userObj.email}</td>
            <td>
              <button
                className="pwd"
                onClick={() => {
                  navigate("/profile/changePwd");
                }}
              >
                改變密碼
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Personal;
