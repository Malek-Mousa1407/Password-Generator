import fs from 'fs';
import path from 'path';
import os from 'os';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const savePassword = password => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.yellow('Password saved to passwords.txt'));
            });
        })
    })
}

export default savePassword;