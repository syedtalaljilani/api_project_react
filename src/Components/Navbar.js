import { useState } from "react";
import styles from "./NavbarStyle.module.css";

export function Navbar() {
  const [users, setUser] = useState([]);
  const loadUsers = async (e) => {
    console.log("before");
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    setUser(jsonresponse.data);
  };
  const loadhandler = (e) => {
    e.preventDefault();
    
      }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <div className={styles.navbar__left}>
            <p className={styles.Logo}>API PROJECT</p>
          </div>
          <div className={styles.navbar__right}>
            <button className={styles.Btn} onClick={loadUsers}>
              Get Data
            </button>
          </div>
        </div>
      </div>
      <div className="data-container">
        {users.map((user) => {
          return (
            <div className={styles.d_container}>
              <img src={user.avatar} alt="user" className={styles.userimg} />
                <div className={styles.user__info}>
                    <p className={styles.user__name}>{user.first_name}</p>
                    <p className={styles.user__name}>{user.last_name}</p>
                    </div>
                  <div>
                  <p className={styles.user__email}>{user.email}</p>
                  </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
