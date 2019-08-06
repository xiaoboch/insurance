export interface IRootState {
    user: IUser;
    editUserMode: boolean;
    cars: ICar[];
    selectedPlans: IInsurancePlan[];
    allPlans: {[key: string]: IInsurancePlan[]};
}

export enum IInsuranceType {
    CAR,
    TRAVEL,
    CONTENT,
}

export interface IUser {
    id: number;
    fullName: string;
    ssn: number;
    email: string;
    mobile: string;
    country: string;
    gender: string;
}

export interface ICar {
    brand: string;
    year: number;
    plateNr: string;
}

export interface IInsurancePlan {
    name: string;
    description: string;
    order: number;
    costPrMonth: number;
    selected: boolean;
}