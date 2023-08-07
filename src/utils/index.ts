/**
 * Generate random number
 */
export const generateAccountBalance = (min=1000,max=100000): number => {

    // Generate Number based on provided range
    return Math.floor(Math.random() * (max - min)) + min;


}