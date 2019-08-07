import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button, Breadcrumb } from 'react-bootstrap';
import { IInsurancePlan, IInsuranceType, IRootState } from '../types';
import Octicon, { Rocket } from '@primer/octicons-react';
import './css/insurance_plans.scss'

interface IProps {
    allPlans: { [key: string]: IInsurancePlan[] },
}

const InsurancePlansCore = (props: IProps) => {

    console.log('all plans: ', props.allPlans);
    const allPlans = props.allPlans;
    return (
        <div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link to='/user'>user</Link>
                </Breadcrumb.Item>
            </Breadcrumb>

            <div className='page-title'>Choose your plan</div>
            <div className="insurance-categories">
                {
                    Object.entries(allPlans).map((entry) => {
                        console.log(entry)
                        return (
                            <PlanCard {...{ cat: entry[0], subPlans: entry[1] }} key={entry[0]} />
                        )
                    })
                }
            </div>

        </div>
    );
}

interface IPlayCardProps {
    cat: string;
    subPlans: IInsurancePlan[];
}
const PlanCard = (props: IPlayCardProps) => {

    const url = `insurance-plans/${props.cat}`;
    return (

        <Card className='insurance-category-card'>
            <Octicon icon={Rocket} size='large' />
            <Card.Body>
                <Card.Title>{props.cat}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.
                </Card.Text>
                <Link to={url} >
                    <Button variant="primary">Detalije</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

const mapStateToProps = (state: IRootState) => ({
    allPlans: state.allPlans
});
export const InsurancePlans = connect(mapStateToProps)(InsurancePlansCore);