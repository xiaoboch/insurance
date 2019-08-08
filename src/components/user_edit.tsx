import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import Octicon, { Person, Note, DeviceMobile, Mail, Organization, Globe } from '@primer/octicons-react';
import './css/user_edit.scss';
import { saveUserInfo } from '../action';
import { connect } from 'react-redux';
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

    const saveUser = () => {
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
        <div className='user-edit'>
            <div className="user-edit-form">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="fullName">
                            <Octicon icon={Person} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="full name"
                        aria-label="full name"
                        aria-describedby="fullName"
                        value={fullName}
                        data-cy='fullName-input'
                        onChange={e => setFullName(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="ssn">
                            <Octicon icon={Note} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="social security number"
                        aria-label="ssn"
                        aria-describedby="ssn"
                        value={ssn + ''}
                        data-cy='ssn-input'
                        onChange={e => setSsn(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="mobile">
                            <Octicon icon={DeviceMobile} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mobile"
                        aria-label="mobile"
                        aria-describedby="mobile"
                        value={mobile}
                        data-cy='mobile-input'
                        onChange={e => setMobile(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="mail">
                            <Octicon icon={Mail} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="mobile"
                        value={email}
                        data-cy='email-input'
                        onChange={e => setEmail(e.target.value)}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="country">
                            <Octicon icon={Globe} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="select" onChange={e => setCountry(e.target.value)} defaultValue={country}
                        data-cy='country-select' >
                        <option value='Norway'>Norway</option>
                        <option value='China'>China</option>
                        <option value='USA'>USA</option>
                        <option value='UK'>UK</option>
                    </FormControl>
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="gender">
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
                            data-cy='male-radio'
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
                            data-cy='female-radio'
                            checked={gender == 'Female'}
                            onChange={e => setGender('Female')}
                        />
                    </div>
                </InputGroup>
            </div>

            <div>
                <Button onClick={saveUser} className='save-user-btn' data-cy='save-user-btn' >Save</Button>
            </div>

        </div>
    );
}


const mapStateToProps = (state: IRootState) => {
    return {
        tempUser: state.tempUser
    }
}

export const UserEdit = connect(mapStateToProps, { saveUserInfo })(UserEditCore);