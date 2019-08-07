import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import Octicon, { Person, Note, DeviceMobile, Mail, Organization, Globe } from '@primer/octicons-react';
import './css/register.scss';
import {saveUserInfo} from '../action';
import {connect} from 'react-redux';
import { IUser, IRootState } from '../types';

interface IProps {
    tempUser: IUser;
}

interface IDispatchers {
    saveUserInfo: typeof saveUserInfo;
}

const UserEditCore = (props: IProps & IDispatchers) => {
    
    const tempUser = props.tempUser;

    const [fullName, setFullName] = React.useState(tempUser.fullName);
    const [ssn, setSsn] = React.useState(tempUser.ssn);
    const [email, setEmail] = React.useState(tempUser.email);
    const [mobile, setMobile] = React.useState(tempUser.mobile);
    const [country, setCountry] = React.useState(tempUser.country);
    const [gender, setGender] = React.useState(tempUser.gender);

    const saveUser = () =>{
        const user = {
            fullName, 
            country,
            email,
            mobile, 
            ssn,
            gender,
            id: 1,
        } as IUser;
        props.saveUserInfo(user);
    }

    return (
        <div className='register'>
            <div className='page-title'>Register</div>

            <div className="register-form">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Person} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="full name"
                        aria-label="full name"
                        aria-describedby="basic-addon1"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Note} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="social security number"
                        aria-label="ssn"
                        aria-describedby="basic-addon1"
                        value={ssn +''}
                        onChange={e => setSsn(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={DeviceMobile} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mobile"
                        aria-label="mobile"
                        aria-describedby="basic-addon1"
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Mail} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Globe} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="select" onChange={e => setCountry(e.target.value)} defaultValue={country} >
                        <option>Norway</option>
                        <option>China</option>
                        <option>USA</option>
                        <option>UK</option>
                    </FormControl>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Organization} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <div className='gender-select form-control'>
                        <Form.Check
                            custom
                            inline
                            label="Male"
                            type='radio'
                            id='male'
                            name='gender'
                            checked={gender == 'Male'}
                            onChange={e => setGender('Male')}
                        />
                        <Form.Check
                            custom
                            inline
                            label="Female"
                            type='radio'
                            id='female'
                            name='gender'
                            checked={gender == 'Female'}
                            onChange={e => setGender('Female')}
                        />
                    </div>
                </InputGroup>
            </div>

            <div>
                <Button onClick={saveUser}>Save</Button>
            </div>

        </div>
    );
}


const mapStateToProps = (state: IRootState) => {
    return {
        tempUser: state.tempUser
    }
}

export const UserEdit = connect(mapStateToProps, {saveUserInfo})(UserEditCore);