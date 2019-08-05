import {IRootState} from './types';

const initialState: IRootState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        ssn: null,
    },
    selectedPlans: [],
    allPlans: [
        {
            type: 'CAR',
            name: 'basic',
            costPrMonth: 200,
            selected: false,
        }
    ],

};


const rootReducer = (state = initialState, action) => {

    return state;
}

export default rootReducer;