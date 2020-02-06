var fs=require('fs');

console.log("debut\n");


fs.readFile('test.txt', function(error, data){

console.log("content: " +data);


});

console.log("Suite..");