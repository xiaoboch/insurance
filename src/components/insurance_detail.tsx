import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion, Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState, IInsurancePlan } from './types';
import './css/insurance_detail.scss';

interface IProps {
    allPlans: { [key: string]: IInsurancePlan[] },
}

const InsuranceDetailCore = ({ match, allPlans }) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const planKey = match.params.plan;
    const plans = allPlans[planKey];

    return (
        <div className='insurance-detail'>
            <div className="page-title">{planKey}</div>
            <Accordion defaultActiveKey='1'>
                {plans.map(plan => (
                    <InsuranceDetailCard {...{ plan, handleShow }} key={plan.name} />
                ))}
            </Accordion>
            <SelectInsurancePlanModal {...{show, handleClose}} />                    
        </div>
    );
}

interface IInsuranceDetailCardProps {
    plan: IInsurancePlan;
    handleShow: () => void;
}

const InsuranceDetailCard = (props: IInsuranceDetailCardProps) => {

    const { plan } = props;
    return (
        <Card className='plan-card'>
            <Accordion.Toggle as={Card.Header} eventKey={plan.order + ''}>
                {plan.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={plan.order + ''}>
                <Card.Body>
                    <div className="description">
                        {plan.description}
                    </div>
                    <div className="costPrMonth">
                        {plan.costPrMonth}
                    </div>
                    <Button className='select-plan-btn' onClick={props.handleShow}>Select</Button>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

const SelectInsurancePlanModal = ({show, handleClose}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose insurance plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You have chosen the plan.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
          </Button>
                <Button variant="primary" onClick={handleClose}>
                    I am sure
          </Button>
            </Modal.Footer>
        </Modal>
    );
}

const mapStateToProps = (state: IRootState) => ({
    allPlans: state.allPlans,
});

export const InsuranceDetail = connect(mapStateToProps)(InsuranceDetailCore);