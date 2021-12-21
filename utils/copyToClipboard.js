import clipboardy from 'clipboardy';
import chalk from 'chalk';

const copyToClipboard = password => {
    clipboardy.writeSync(password);
    console.log(chalk.green('✔ Password copied to clipboard'));
}

export default copyToClipboard