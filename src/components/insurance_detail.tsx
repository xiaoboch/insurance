import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion, Card, Button, Modal, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IRootState, IInsurancePlan } from '../types';
import './css/insurance_detail.scss';
import { selectInsurancePlan } from '../action';

interface IProps {
    allPlans: { [key: string]: IInsurancePlan[] },
    selectedPlans: IInsurancePlan[],
}

interface IDispatchers {
    selectInsurancePlan: typeof selectInsurancePlan;
}

const InsuranceDetailCore = ({ match, allPlans, selectedPlans, selectInsurancePlan }) => {

    const planKey = match.params.plan;
    const plans = allPlans[planKey];
    const [show, setShow] = React.useState(false);
    const [selectedPlan, setSelectedPlan] = React.useState(null);
    const handleClose = () => setShow(false);
    const selectedPlanId = selectedPlans[planKey] ? selectedPlans[planKey].id : [];
    console.log('selected plan ids: ', selectedPlanId);

    const handleShow = (plan: IInsurancePlan) => {
        setSelectedPlan(plan);
        setShow(true);
    }

    const handleSelect = (plan: IInsurancePlan) => {
        selectInsurancePlan({ planKey, plan });
        setShow(false);
    }



    return (
        <div className='insurance-detail'>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/user'>User</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item >
                    <Link to='/insurance-plans' data-cy='bc-insurance-plans'>Insurance plans</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{planKey}</Breadcrumb.Item>
            </Breadcrumb>

            <div className="page-title">{planKey}</div>
            <Accordion defaultActiveKey='1'>
                {plans.map(plan => (
                    <InsuranceDetailCard {...{ plan, handleShow, selected: selectedPlanId === plan.id }} key={plan.name} />
                ))}
            </Accordion>
            <SelectInsurancePlanModal {...{ show, handleClose, handleSelect, planKey, selectedPlan }} />
        </div>
    );
}

interface IInsuranceDetailCardProps {
    plan: IInsurancePlan;
    handleShow: (plan: IInsurancePlan) => void;
    selected: boolean;
}

const InsuranceDetailCard = (props: IInsuranceDetailCardProps) => {

    const { plan } = props;
    return (
        <Card className='plan-card'>
            <Accordion.Toggle as={Card.Header} eventKey={plan.order + ''} data-cy={`${plan.name}-accordion-header`}>
                <span className={`${props.selected ? 'plan-selected' : ''}`} data-cy={ `${plan.name}-selected` }>
                    {plan.name} {props.selected ? ' (Chosen one)' : ''}
                </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={plan.order + ''}>
                <Card.Body>
                    <div className="description">
                        {plan.description}
                    </div>
                    <div className="costPrMonth">
                        Kostnad:  {plan.costPrMonth}
                    </div>
                    <Button className='select-plan-btn' onClick={() => props.handleShow(plan)} disabled={props.selected} data-cy={`${plan.name}-select-btn`}>
                        {props.selected ? 'Selected' : 'Select'}
                    </Button>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}


const SelectInsurancePlanModal = ({ show, handleClose, handleSelect, planKey, selectedPlan }) => {
    console.log('plankey', planKey);
    console.log('selectedPlan', selectedPlan);
    if (selectedPlan) {
        return (
            <Modal data-cy='select-insurance-plan-modal' show={show} onHide={handleClose} centered >
                <Modal.Header data-cy={`${selectedPlan.name}-modal-header`} closeButton>
                    <Modal.Title>Choose insurance plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You will choose <span>{selectedPlan.name}</span> for your {planKey}.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
              </Button>
                    <Button variant="primary" onClick={() => handleSelect(selectedPlan)} data-cy='select-insurance-plan-choose-btn'>
                        Choose
              </Button>
                </Modal.Footer>
            </Modal>
        );
    } else {
        return <div>

        </div>
    }

}

const mapStateToProps = (state: IRootState) => ({
    allPlans: state.allPlans,
    selectedPlans: state.selectedPlans,
});

export const InsuranceDetail = connect(mapStateToProps, { selectInsurancePlan })(InsuranceDetailCore);