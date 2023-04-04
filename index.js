#!/usr/bin/env node

// Import the helloWorld function from the hello-world.js file
import helloWorld from "./commands/hello-world.js";
import { program } from "commander";

const gitExtension = (args) => {
  // Extract the command and arguments from the command line
  const [command, ...rest] = args;

  // Call the appropriate function based on the command
  program
  .description("A CLI for git extensions")
    .command("hello")
    .description("Say hello")
    .action(() => {
      helloWorld();
    });
  program
    .command("greet <name>")
    .description("Greet a user by name")
    .action((name) => {
      helloWorld(name);
    });
  program.on("command:*", () => {
    console.error("Invalid command: %s\n", program.args.join(" "));
    program.help();
    process.exit(1);
  });
  program.parse(process.argv);
};

gitExtension(process.argv.slice(2));

export default gitExtension;
