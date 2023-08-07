import { generateAccountBalance } from "../utils/index.js";


// Import types
import { IUser } from "../types/index.js";



// Bank Name
export const BankName: string = "World Bank";


// User data
export const Users: IUser[] = [
    {
        id: 'isfhan',
        pin: 1234,
        currency:'PKR',
        accountBalance: generateAccountBalance(),
    },
    {
        id: 'Ali',
        pin: 3214,
        currency:'Euro',
        accountBalance: generateAccountBalance(),
    },
    {
        id: 'Saba',
        pin: 4567,
        currency:'Dollars',
        accountBalance: generateAccountBalance(),
    }
]

