/**
 * @description
 * A script for displaying information about coworkers
 * Can be called by running `npm start {command}` in the terminal
 *
 * @example
 * `npm start list`
 * Running this command will call the `runListCommand` function
 */

// The {command} the user types in the terminal e.g. "list"
const command = process.argv[2];

// The array of members that you defined in the previous task
const members = require("./members");

if (command === "list") {
  runListCommand();
} else {
  console.log(`Command "${command}" not found. Try "list" instead.`);
}

function runListCommand() {
  // Replace this with your implementation
  members.forEach(member => {//loops through each member in the members array
    if (member.manager === null) {//this checks if the member has no manager then returns a message
      console.log(`${member.firstName} ${member.lastName} is a ${member.jobTitle}, they have no manager.`);
    } else { // returns a different message if the member has a manager
      console.log(`${member.firstName} ${member.lastName} is a ${member.jobTitle}, their manager is ${member.manager}.`);
    }
  })
}
