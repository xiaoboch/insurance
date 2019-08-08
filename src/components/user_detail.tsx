import * as React from 'react';
import Octicon, { Person, Note, DeviceMobile, Mail, Organization, Globe } from '@primer/octicons-react';
import './css/home.scss';
import { IRootState, IUser } from '../types';

import './css/user_detail.scss';
import { editUserInfo } from '../action';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IProps {
    user: IUser,
}

interface IDispatchers {
    editUserInfo: typeof editUserInfo;
}

const UserDetailCore = (props: IProps & IDispatchers) => {
    console.log('user details: ', props);
    const { user, editUserInfo } = { ...props };
    return (
        <div className='user-detail'>
            <div className="user-detail-wrapper">
                <div className="detail-list">

                    <div className="icon"><Octicon icon={Person} size='medium' /></div>
                    <div className="label">Full name:</div>
                    <div className="value" data-cy='fullName'>{user.fullName}</div>

                    <div className="icon"><Octicon icon={Note} size='medium' /></div>
                    <div className="label">SSN:</div>
                    <div className="value" data-cy='ssn'>{user.ssn}</div>

                    <div className="icon"><Octicon icon={Mail} size='medium' /></div>
                    <div className="label">Email:</div>
                    <div className="value" data-cy='email'>{user.email}</div>

                    <div className="icon"><Octicon icon={DeviceMobile} size='medium' /></div>
                    <div className="label">
                        Mobile: </div>
                    <div className="value" data-cy='mobile'>{user.mobile}</div>

                    <div className="icon"><Octicon icon={Globe} size='medium' /></div>
                    <div className="label">Country: </div>
                    <div className="value" data-cy='country'>{user.country}</div>

                    <div className="icon"><Octicon icon={Organization} size='medium' /></div>
                    <div className="label">Gender: </div>
                    <div className="value" data-cy='gender'>{user.gender}</div>
                </div>

                <div className='btn btn-link' data-cy='edit-user-btn' onClick={editUserInfo}>Edit</div>
            </div>

            <Link to='/insurance-plans' className='select-plans-link'>
                <Button>Choose plans</Button>
            </Link>
        </div>
    );
}


export const UserDetail = connect(null, { editUserInfo })(UserDetailCore);