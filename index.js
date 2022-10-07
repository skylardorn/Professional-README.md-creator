// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: "input",
        name: "# Title",
        message: "What is the Title of your project?",
        },
        {
            type: "input",
            name: "## Description",
            message: "Give a brief description of what your app is about."
        },
        {
            type: "input",
            name: "## Installation",
            message: "What are the steps to install your project? Provide step-by-step description to get the development environment running."
        },
        {
            type: "input",
            name: "## Usage",
            message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repo and upload your screenshot to it. Then using the relative filepath, add it to your README using the following syntax:  ![alt text](assets/images/screenshot.png)",
        },
        {
            type: "input",
            name: "## Contributing",
            message: "",
        },
        {
            type: "input",
            name: "## Tests",
            message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        },
        {
            type: "input",
            name: "## Contributing",
            message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        },
        {
            type: "checkbox",
            name: "## License",
            message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
            choices: ["MIT", "Apache", "Mozilla Public", "The Unlicense", "Boost Software", ""],
            },
            {
                type: `input`,
                name: `## Project Link`,
                display: `["description]{link}`,
            },
        ];

    
const callbackFunction = (answers) => {
    const fileName = 'README.md'
    const answersStr = JSON.stringify(answers);
fs.writeFile(fileName, answersStr, (err) => err ? console.error(err) : console.log("Your new file has been updated."));
}
// let answers = "";
// const questions = [
//             {
//             type: "input",
//             name: "# Title",
//             message: "What is the Title of your project?",
//             },
//             {
//                 type: "input",
//                 name: "## Description",
//                 message: "Give a brief description of what your app is about."
//             },
//             {
//                 type: "input",
//                 name: "## Installation",
//                 message: "What are the steps to install your project? Provide step-by-step description to get the development environment running."
//             },
//             {
//                 type: "input",
//                 name: "## Usage",
//                 message: "Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an `assets/images` folder in your repo and upload your screenshot to it. Then using the relative filepath, add it to your README using the following syntax:  ![alt text](assets/images/screenshot.png)",
//             },
//             {
//                 type: "input",
//                 name: "## Contributing",
//                 message: "",
//             },
//             {
//                 type: "input",
//                 name: "## Tests",
//                 message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
//             },
//             {
//                 type: "input",
//                 name: "## Contributing",
//                 message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
//             },
//             {
//                 type: "checkbox",
//                 name: "## License",
//                 message: "The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).",
//                 choices: ["MIT", "Apache", "Mozilla Public", "The Unlicense", "Boost Software", ""],
//                 },
//                 {
//                     type: `input`,
//                     name: `## Project Link`,
//                     display: `["description]{link}`,
//                 },
//     ];
// questions.foreach(myFunction)
// // fruits.forEach(myFunction);

// // document.getElementById("demo").innerHTML = text;
 
// // function myFunction(item, index) {
// //   text += index + ": " + item + "<br>"; 
// // }



inquirer.prompt(questions)
.then((callbackFunction))
.catch(console.error)

// TODO: Create a function to write README file
// function writeToFile(answers, data, )  {
    //     if an
    // }
    
    // TODO: Create a function to initialize app
    // function init() {}
    
// // Function call to initialize app
// init();
