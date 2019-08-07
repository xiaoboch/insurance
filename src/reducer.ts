import {IRootState, IInsuranceType} from './types';
import { handleActions } from 'redux-actions';
import * as Action from './action';
import { User } from './components/user';

const registeredUser = {
    id: 1,
    fullName: 'Ole jansen',
    email: 'ole.jansen@gmail.com',
    mobile: '50012345',
    ssn: 55555555,
    gender: 'Male',
    country: 'China',
}

const emptyUser = {
    id: null,
    fullName: '',
    email: '',
    mobile: '',
    ssn: null,
    gender: '',
    country: '',
}

const initialState: IRootState = {
    user: registeredUser,
    tempUser: emptyUser,
    editUserMode: false,
    cars: [],
    selectedPlans: {},
    allPlans: {
        'CAR': [
            {
                id: 1,
                name: 'plan-A',
                type: 'CAR',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 1,
            },
            {
                id: 2,
                name: 'plan-B',
                type: 'CAR',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 2,
            },
            {
                id: 3,
                name: 'plan-C',
                type: 'CAR',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 600,
                selected: false,
                order: 3,
            }
        ],
        'TRAVEL': [
            {
                id: 4,
                name: 'plan-D',
                type: 'TRAVEL',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 100,
                selected: false,
                order: 1,
            },
            {
                id: 5,
                name: 'plan-E',
                type: 'TRAVEL',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 2,
            },
            {
                id: 6,
                name: 'plan-F',
                type: 'TRAVEL',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 300,
                selected: false,
                order: 3,
            }
        ],
        'CONTENT': [
            {
                id: 7,
                name: 'plan-G',
                type: 'CONTENT',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 50,
                selected: false,
                order: 1,
            },
            {
                id: 8,
                name: 'plan-H',
                type: 'CONTENT',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 80,
                selected: false,
                order: 2,
            },
            {
                id: 9,
                name: 'plan-I',
                type: 'CONTENT',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 120,
                selected: false,
                order: 3,
            }
        ]
    }
};


const rootReducer = handleActions(
    {
        [Action.EDIT_USER_INFO]: (state: IRootState, action) => ({
            ...state, 
            tempUser: state.user,
            editUserMode: true,
        }),

        [Action.SAVE_USER_INFO]: (state: IRootState, action: any) => {
            return {
                ...state, 
                user: action.payload,
                editUserMode: false
            }
        },
        [Action.SELECTE_INSURANCE_PLAN]: (state: IRootState, action: any) => {
            const planKey = action.payload.planKey;
            const plan = {...action.payload.plan, selected: true};

            return {
                ...state,
                selectedPlans: {...state.selectedPlans, [planKey]: plan},
            }
        }
        
    }, 
    initialState
);


export default rootReducer;