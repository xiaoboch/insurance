import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import Octicon, { Person, Note, DeviceMobile, Mail, Organization, Globe } from '@primer/octicons-react';
import './css/register.scss';

const UserEdit = () => {
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
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">
                            <Octicon icon={Globe} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="select">
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
                        />
                        <Form.Check
                            custom
                            inline
                            label="Female"
                            type='radio'
                            id='female'
                        />
                    </div>
                </InputGroup>
            </div>

            <div>
                <Button>Save</Button>
            </div>

        </div>
    );
}

export default UserEdit;