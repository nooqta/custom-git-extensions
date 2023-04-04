#!/usr/bin/env node

// Import the helloWorld function from the hello-world.js file
import helloWorld from "./commands/hello-world.js";

  const gitExtension = (args) => {
    // Extract the command and arguments from the command line
    const [command, ...rest] = args;
  
    // Call the appropriate function based on the command
    if (command === "hello") {
      helloWorld();
    } else if (command === "greet") {
      const [name] = rest;
      helloWorld(name);
    } else {
      console.log("Unknown command");
    }
  };

  gitExtension(process.argv.slice(2));
  
  export default gitExtension;