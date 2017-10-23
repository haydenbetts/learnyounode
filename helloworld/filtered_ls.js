// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. You will be provided a directory
// name as the first argument to your program (e.g. '/path/to/dir/') and a
// file extension to filter by as the second argument.
//
// For example, if you get 'txt' as the second argument then you will need to
// filter the list to only files that end with .txt. Note that the second
// argument will not come prefixed with a '.'.
//
// Keep in mind that the first arguments of your program are not the first
//
// values of the process.argv array, as the first two values are reserved for
// system info by Node.
//
// The list of files should be printed to the console, one file per line. You
// must use asynchronous I/O.
//
// ## HINTS
//
//  The fs.readdir() method takes a pathname as its first argument and a
//  callback as its second. The callback signature is:
//
//
//     function callback (err, list) { /* ... */ }
//
//  where list is an array of filename strings.
//
//  Documentation on the fs module can be found by pointing your browser here:
//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
//
//  You may also find node's path module helpful, particularly the extname
//  method.
//
//  Documentation on the path module can be found by pointing your browser
//  here:
//  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

//example input filtered_ls 'path/to/direc' 'txt'

var fs = require('fs')
var path = require('path')

function filter_files(){

  fs.readdir(process.argv[2], function(err, files_array){
    if (err) {
      console.log(err)

    }

    for(i = 0; i < files_array.length; i++){
      if (path.extname(files_array[i]) == process.argv[3]) {
        console.log(files_array[i])
      }
    }

  })
}

filter_files()
