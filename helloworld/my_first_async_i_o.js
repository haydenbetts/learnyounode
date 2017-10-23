  // Write a program that uses a single asynchronous filesystem operation to
  // read a file and print the number of newlines it contains to the console
  // (stdout), similar to running cat file | wc -l.
  //
  // The full path to the file to read will be provided as the first
  // command-line argument.
  var fs = require('fs')

  function num_newlines(){
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
      if (err) {
        return console.log(err)
      }
      console.log(fileContents.split('\n').length - 1)
    })
  }

  num_newlines()
