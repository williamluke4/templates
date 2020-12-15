import inquirer from "inquirer";
import meow from "meow";

async function run() {
  const cli = meow(
    `
  Usage
    $ npx fster <dest> <...options>
      
      dest     (optional) Directory to output to

      options
        -(-s)etup         Runs npm install 
`,
    {
      autoHelp: true,
      flags: {
        help: {
          alias: "h",
          type: "boolean",
        },
        setup: {
          alias: "s",
          type: "boolean",
        },
      },
    }
  );
  const argOutputDir = cli.input[0];
  const { who } = await inquirer.prompt([
    {
      type: "list",
      name: "who",
      required: true,
      default: 'prisma',
      message: "Who's examples are you looking for",
      pageSize: Object.keys([]).length,
      choices: Object.keys([]),
    },
  ]);

}


module.exports = {
  run: run,
};
