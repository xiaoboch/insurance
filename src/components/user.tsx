import * as React from 'react';
import { connect } from 'react-redux';
import './css/home.scss';
import { IRootState, IUser, IInsurancePlan } from '../types';
import { UserDetail } from './user_detail';
import { UserEdit } from './user_edit';
import { Breadcrumb } from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface IProps {
    user: IUser,
    editUserMode: boolean;
    selectedPlans: IInsurancePlan[];
}

const UserCore = (props) => {
    console.log('User id: ', props.user.id)
    return (
        <div className='user'>
            <Breadcrumb>
                <Link to='/'>Home</Link>
            </Breadcrumb>

            <div className='page-title'>Your profile</div>

            <div className="user-info">
                {(props.user.id && !props.editUserMode) ? <UserDetail {...{ user: props.user }} /> : <UserEdit />}
            </div>
        </div>
    );
}

const SelectedInsurances = () => {

}

const mapStateToProps = (state: IRootState) => ({
    user: state.user,
    editUserMode: state.editUserMode,
    selectedPlans: state.selectedPlans,
});

export const User = connect(mapStateToProps)(UserCore);