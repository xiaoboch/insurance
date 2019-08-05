export interface IRootState {
    user: IUser;
    cars: ICar[];
    selectedPlans: IInsurancePlan[];
    allPlans: IInsurancePlan[];
}

export interface IUser {
    firstName: string;
    lastName: string;
    ssn: number;
    email: string;
    mobile: string;
}

export interface ICar {
    brand: string;
    year: number;
    plateNr: string;
}

export interface IInsurancePlan {
    type: string;
    name: string;
    costPrMonth: number;
    selected: boolean;
}