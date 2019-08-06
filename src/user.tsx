import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/home.scss';
import { IRootState, IUser, IInsurancePlan } from './types';
import UserDetail from './user_detail';
import UserEdit from './user_edit';

interface IProps {
    user: IUser,
    editUserMode: boolean;
    selectedPlans: IInsurancePlan[];
}

const UserCore = (props) => {
    console.log('User id: ', props.user.id)
    return (
        <div className='user'>
            <div className='page-title'>Your information</div>

            <div className="user-info">
                {(props.user.id && !props.editUserMode) ? <UserDetail {...{ user: props.user }} /> : <UserEdit />}
            </div>
            <div className="selected-insurance-plan">

            </div>

        </div>
    );
}

const mapStateToProps = (state: IRootState) => ({
    user: state.user,
    editUserMode: state.editUserMode,
    selectedPlans: state.selectedPlans,
});

export const User = connect(mapStateToProps)(UserCore);