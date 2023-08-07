// Import third party packages
import inquirer from "inquirer";
import chalk from "chalk";


// Import custom modules
import { askLoginDetails, askToSelectMenu, askUserForWithdrawAmount } from "./questions.js";


// Import demo data
import { BankName, Users } from "./DB/index.js";


// Import types
import { type IUser, type ILoginDetails, type IMenuChoice, type IWithdrawAmount } from "./types/index.js";



export class ATM {

    private user: IUser | undefined;

    /**
     * Start ATM
     */
    public async start(welcomeUser: boolean = true) {

        // Invoke welcome method first time 
        if (welcomeUser) {
            this.welcome();
        }

        // Invoke login
        const isUserLogin: boolean = await this.login();

        if (isUserLogin) {
            // Invoke show menu
            this.showMenu();
        }



    }


    /**
     * Show Welcome Message
     */
    private welcome(): void {

        console.log('');
        console.log(chalk.bgWhite.red.bold(` Welcome to The ${BankName} `));
        console.log('');

    }


    private async login(): Promise<boolean> {

        // Prompt questions and get user input
        const { userId, userPin }: ILoginDetails = await inquirer.prompt(
            askLoginDetails
        );


        // Check user exist in DB
        const user = Users.find((user: IUser) => {
            return user.id === userId && user.pin === userPin
        });


        if (user) {

            // Set Current user
            this.user = user;

            // Log message
            console.log('');
            console.log(chalk.greenBright.bold(`Hello ${this.user.id}`));
            console.log('');

            return true;

        } else {

            // Log message
            console.log('');
            console.log(chalk.bold.red('UserId or UserPin is Invalid'));
            console.log('');

            // Ask user agin to add UserId and UserPin
            this.start(false);

            return false;
        }
    }


    private async showMenu(): Promise<void> {

        // Prompt questions and get user input
        const { action }: IMenuChoice = await inquirer.prompt(
            askToSelectMenu
        );

        // Invoke user selection function
        switch (action) {
            case 'Show Balance':
                this.showBalance();
                break;
            case 'Withdraw':
                await this.withdraw();
                break;
            case 'Exit':
                this.exit();
                break;
        }
    }


    private showBalance(): void {

        // Log message
        console.log('');
        console.log(chalk.bgBlueBright.white.bold(` Your available balance is ${this.user?.accountBalance} ${this.user?.currency}`));
        console.log('');


    }


    private async withdraw() {

        // Prompt questions and get user input
        const { withdrawAmount }: IWithdrawAmount = await inquirer.prompt(
            askUserForWithdrawAmount
        );

        
        const userData = this.user as IUser;

        // Check Limit
        if (withdrawAmount > userData.accountBalance) {

            // Log message
            console.log('');
            console.log(chalk.bold.red('Limit exceed aborting transaction'));
            console.log('');

            this.exit();
        } else {

            // Detect amount from account  
            userData.accountBalance = userData.accountBalance - withdrawAmount;

            // Update current user data
            this.user = userData;

            // Log message
            console.log('');
            console.log(chalk.bold.green('Transaction...'));
            console.log('');
            console.log(chalk.bgGreen.white.bold(' Transaction complete successfully! '));
            console.log('');

            // Show remaining balance 
            this.showBalance();
        }

    }


    private exit() {

        // Log message
        console.log('');
        console.log(chalk.bold.bgBlue.white(' You are exit please take your card '));
        console.log('');

    }


}