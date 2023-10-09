//use high level api to open and  read the file  
const fileSystm = require("fs");


// console.log('read start');
// //Asynchronous way to read   file
// fileSystm.readFile('input.txt',function(err, data) {
// if(err)
// {
//     console.log('Error',err);
//     return err;
// }
// console.log('data',data.toString());
// console.log('Read End');
// return data
// });

// console.log('Other stuff');

// //synchronous way
// var data= fileSystm.readFileSync('input.txt');
// console.log('Data: ',data.toString());

// console.log('Read end');
// console.log('Other stuff');

//===================================================================================================

// //2nd method use low level API(do all thing manually)
// const buff = new Buffer(1024);
// // open the file
// fileSystm.open("input.txt", "r+", function (err, fd) {
//   if (err) {
//     console.log("Error in opening file:", err);
//   }
//   console.log("File Open Succesfully: ");

//    //read the file
//   fileSystm.read(fd, buff, 0, buff.length, 0, function (er, bytes)
//   {
//     if (er) {
//       console.log("err", er);
//     }

//     console.log("Data", bytes);
//     console.log("data",buff.slice(0,bytes).toString());

//     //close the file
//    fileSystm.close(fd,function(er){
//     if(er){
//         console.log('Err in closing file');
//     }
//     else{
//         console.log("Succesfully close the file");
//     }
//    })
//   });
// });


//===================================================================================================

// // Writing to file
// fileSystm.writeFile('input.txt', 'Hello gi ',function(err){
//     if(err)
//     {
//         console.log("Error in writing file");
//     }
//     else{
//     console.log("Succesfull write in file: ");}
// })


//===================================================================================================
// //Append to file (Jo data hai uske aage dusra data likhnaa usko bina htaye)
// fileSystm.appendFile('input.txt',' --Ram ram bhai sarya ne', 'utf8' ,function(err){
//     if(err)
//     {
//         console.log("Error in Appnending file");
//     }
//     else{
//     console.log("Succesfully Appnending   in file: ");}
// })

//===================================================================================================
// // Delete file
fileSystm.unlink('input.txt',function(err){
    if(err)
    {
        console.log("error in deleteing file");
    }else{
        console.log("Delet file succefullly");
    }
})



