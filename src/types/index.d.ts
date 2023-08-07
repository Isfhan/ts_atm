export interface ILoginDetails {
    userId: string,
    userPin: number
}


export interface IUser {
    id: string;
    pin: number;
    currency: string;
    accountBalance: number;

}


export interface IMenuChoice {
    action: string
}


export interface IWithdrawAmount {
    withdrawAmount: number
}