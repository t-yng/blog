const fs = require('fs');
const { join } = require('path');

module.exports = {
    prompt: ({ prompter }) => {
        const CHOICE_NEW_DIRECTORY = 'new directory';
        const componentsPath = join(process.cwd(), 'src/components');
        const directories = fs
            .readdirSync(componentsPath, {
                withFileTypes: true,
            })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        return prompter
            .prompt({
                type: 'select',
                name: 'directory',
                message: 'Where is the directory to place the component?',
                choices: [...directories, CHOICE_NEW_DIRECTORY],
            })
            .then((args) => {
                if (args.directory !== CHOICE_NEW_DIRECTORY) {
                    return Promise.resolve(args);
                }
                return prompter.prompt({
                    type: 'input',
                    name: 'directory',
                    message: 'Enter the new directory to place the component',
                });
            });
    },
};
