import { useState } from "react";
import TUser from '../../types/User';
import UserDetails from "../details/UserDetails";
import './User.css';

export default function User(props: { data: TUser }) {
  const [displayDetails, setDisplayDetails] = useState(false);
  const photoLink = `foto/${props.data.photo}`;

  return (
    <>
      <li className='user-item'>
        <div className="content">
          <img src={photoLink} alt='img' />
          <div className="text">
            <p className='name'>{props.data.name}</p>
            <p className='nickname'>{props.data.nickname}</p>
          </div>
        </div>
        <button onClick={() => setDisplayDetails(true)} className="view">View</button>
      </li>
      {displayDetails && <UserDetails data={props.data} />}
    </>
  )
}