import {IRootState, IInsuranceType} from './types';

const registeredUser = {
    id: 1,
    fullName: 'Ole jansen',
    email: 'ole.jansen@gmail.com',
    mobile: '50012345',
    ssn: 55555555,
    gender: 'Male',
    country: 'Norway',
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
    editUserMode:false,
    cars: [],
    selectedPlans: [],
    allPlans: {
        'CAR': [
            {
                name: 'plan-A',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 1,
            },
            {
                name: 'plan-B',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 2,
            },
            {
                name: 'plan-C',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 600,
                selected: false,
                order: 3,
            }
        ],
        'TRAVEL': [
            {
                name: 'plan-D',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 100,
                selected: false,
                order: 1,
            },
            {
                name: 'plan-E',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 200,
                selected: false,
                order: 2,
            },
            {
                name: 'plan-F',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 300,
                selected: false,
                order: 3,
            }
        ],
        'CONTENT': [
            {
                name: 'plan-G',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 50,
                selected: false,
                order: 1,
            },
            {
                name: 'plan-H',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 80,
                selected: false,
                order: 2,
            },
            {
                name: 'plan-I',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae condimentum velit. Nam luctus vel nunc in tincidunt.',
                costPrMonth: 120,
                selected: false,
                order: 3,
            }
        ]
    }
};


const rootReducer = (state = initialState, action) => {

    return state;
}

export default rootReducer;