const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

//writing files
// fs.writeFile('./docs/blog1.txt', "Hello, world", () => {
//     console.log("file was written");
// });

// fs.writeFile('./docs/blog2.txt', "Hello there, general kenobi", () => {
//     console.log("file was written");
// });


//directories
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder created");
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("folder deleted");
//     });
// }

//deleting files
fs.unlink('./docs/blog2.txt', () => {
    console.log("file deleted");
})