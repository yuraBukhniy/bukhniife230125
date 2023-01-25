import { useState } from "react";
import { useSelector } from "react-redux";
import TUser from '../../types/User';
import User from "../user/User";
import './Users.css'

export default function Users() {
  const userData = useSelector((state: TUser[]) => state);
  const [displayAll, setDisplayAll] = useState(false);

  return (
    <ul className="users-list">
      {userData.map((user, idx) => {
        if (!displayAll && idx >= 3) return null;
        return (
          <User key={idx} data={user} />
        )
      })}
      {!displayAll && <li className="view-all">
        <button onClick={() => setDisplayAll(true)}>View all</button>
      </li>}
    </ul>
  )
}