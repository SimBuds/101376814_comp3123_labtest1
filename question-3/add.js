// Casey Hsu - 101376814
// Full Stack Web Development COMP3123 - Lab Test 1
// Date: 2023-10-05

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

// Question 3.2

// Create a Logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
}

// Change the current process to the new Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text into them
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file #${i}`);
    
    // Output the file names to console
    console.log(`File created: ${fileName}`);
}