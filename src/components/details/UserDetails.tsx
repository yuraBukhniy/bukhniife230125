import { useState } from "react";
import TUser from '../../types/User';
import './UserDetails.css';

export default function UserDetails(props: { data: TUser }) {
  const [visible, setVisible] = useState(true);
  const photoLink = `foto/${props.data.photo}`;

  return (
    <>
      {visible && (
        <>
          <div id="page-mask"></div>
          <div className='user-details-container'>
            <button className='close' onClick={() => setVisible(false)} data-testid='close-button'>&#10006;</button>
            <div className='basic-info'>
              <img src={photoLink} alt='img' />
              <span className='name'>{props.data.name}</span>
              <span className='position'>{props.data.position}</span>
            </div>
            <hr />
            <div className='detailed-info'>
              <table>
                <tbody>
                  <tr>
                    <td>Phone</td>
                    <td>{props.data.phone}</td>
                  </tr>
                  <tr>
                    <td>URL</td>
                    <td>
                      <a href='https://example.com'>https://example.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className='send-msg'>Send message</button>
            </div>
          </div>
        </>
      )}
    </>
  )
}