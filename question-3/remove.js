// Casey Hsu - 101376814
// Full Stack Web Development COMP3123 - Lab Test 1
// Date: 2023-10-05

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

// Question 3.1

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);
    
    // Output the file names to delete
    files.forEach(file => {
        console.log(`Deleting: ${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });
    
    // Remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
}
