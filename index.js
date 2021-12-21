import program from 'commander';
import chalk from 'chalk';
import createPassword from './utils/createPassword.js'
import savePassword from './utils/savePassword.js'
import copyToClipboard from './utils/copyToClipboard.js';

program.version('1.0.0').description('Simple password generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .option('-cc, --copy', 'copy password to clipboard')
    .parse()

const { length, save, numbers, symbols, clipboard } = program.opts();
// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Output generated
console.log(
    chalk.hex('#63c1ff')('Generated password: ') + chalk.bold(generatedPassword)
);

// Copy to clipboard
!clipboard && copyToClipboard(generatedPassword)

// Save file
save && savePassword(generatedPassword)