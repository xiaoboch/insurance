export interface IRootState {
    user: IUser;
    tempUser: IUser;
    editUserMode: boolean;
    cars: ICar[];
    selectedPlans: {[key: string]: IInsurancePlan};
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
    id: number;
    name: string;
    type: string;
    description: string;
    order: number;
    costPrMonth: number;
    selected: boolean;
}