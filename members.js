const members = [
  {
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering",
    manager: null,
    location: "Glasgow",
    firstAider: "No",
    userSlack: "johndoe",
    timeZone: "America/Los_Angeles",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering",
    manager: "John Doe",
    location: "Leeds",
    firstAider: "No",
    userSlack: "janedoe",
    timeZone: "America/Los_Angeles",
  },
  {
    firstName: "Bob",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering",
    manager: "Jane Doe",
    location: "Cape Town",
    firstAider: "No",
    userSlack: "bobdoe",
    timeZone: "America/Los_Angeles",
  },
  {
    firstName: "Sally",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    department: "Engineering",
    manager: "Jane Doe",
    location: "Rome",
    firstAider: "No",
    userSlack: "sallydoe",
    timeZone: "America/Los_Angeles",
  }
]; //members is an array of objects showing the member data

module.exports = members;
