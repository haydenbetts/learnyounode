//   You must write a module file to do most of the work. The module must
//   export a single function that takes three arguments: the directory name,
//   the filename extension string and a callback function, in that order. The
//   filename extension argument must be the same as what was passed to your
//   program. Don't turn it into a RegExp or prefix with "." or do anything
//   except pass it to your module where you can do what you need to make your
//   filter work.

// passing to the exported function: directory name, filename extension string, a call back function
// what do they mean by directory name? directory path? probably...

var make_it_modular = require('./make_it_modular_lib')

// /path/to/dir
var dirname = process.argv[2];

// 'txt'
var ext = process.argv[3];

// we null into the callback function...
make_it_modular(dirname, ext, function(err, filtered_files_array) {
  if(err) {
    return console.error('There was an error:', err)
  }

  for (i = 0; i < filtered_files_array.length; i++) {
    console.log(filtered_files_array[i]);
  }
});
