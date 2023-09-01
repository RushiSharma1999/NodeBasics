const fs = require('fs');

//creating a read stream
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
//creating a write stream
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//listening to the read stream i.e. reading the data from the blog3.txt file
// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     //printing the chunk that is read
//     console.log(chunk);
//     //writing the chunk to the write stream i.e. to the blog4.txt file
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//piping the read stream to the write stream
readStream.pipe(writeStream);