import * as React from 'react';
import Octicon, { Person, Note, DeviceMobile, Mail, Organization, Globe } from '@primer/octicons-react';
import './css/home.scss';
import { IRootState, IUser } from './types';

import './css/user_detail.scss';
import { Button } from 'react-bootstrap';

interface IProps {
    user: IUser,
}

const UserDetail = (props) => {
    console.log('user details: ', props);
    const { user } = { ...props };
    return (
        <div className='user-detail'>
            <div className="user-detail-wrapper">
                <div className="detail-list">

                    <div className="icon"><Octicon icon={Person} size='medium' /></div>
                    <div className="label">Full name:</div>
                    <div className="value">{user.fullName}</div>

                    <div className="icon"><Octicon icon={Note} size='medium' /></div>
                    <div className="label">SSN:</div>
                    <div className="value">{user.ssn}</div>

                    <div className="icon"><Octicon icon={Mail} size='medium' /></div>
                    <div className="label">Email:</div>
                    <div className="value">{user.email}</div>

                    <div className="icon"><Octicon icon={DeviceMobile} size='medium'/></div>
                    <div className="label">
                        Mobile: </div>
                    <div className="value">{user.mobile}</div>

                    <div className="icon"><Octicon icon={Globe} size='medium'/></div>
                    <div className="label">Country: </div>
                    <div className="value">{user.country}</div>

                    <div className="icon"><Octicon icon={Organization} size='medium'/></div>
                    <div className="label">Gender: </div>
                    <div className="value">{user.gender}</div>
                </div>

                <div className='btn btn-link'>Edit</div>
            </div>
        </div>
    );
}

export default UserDetail;