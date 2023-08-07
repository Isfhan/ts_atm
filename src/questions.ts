export const askLoginDetails = [
    {
        name: "userId",
        type: "string",
        message: "Enter Your Id:",
        validate(input: string): string | boolean | Promise<string | boolean> {

            if (input) {
                return true;
            }
            return "Please your valid user id";
        },
    },
    {
        name: "userPin",
        type: "number",
        message: "Enter Your Pin:",
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter a valid userPin";
        },
    }
];


export const askToSelectMenu = [
    {
        type: 'rawlist',
        name: 'action',
        message: 'Please select an action:',
        choices: ['Show Balance', 'Withdraw', 'Exit'],
    }
];


export const askUserForWithdrawAmount = [
    {
        name: "withdrawAmount",
        type: "number",
        message: "Enter withdraw amount:",
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter withdraw amount in number";
        },
    }
];