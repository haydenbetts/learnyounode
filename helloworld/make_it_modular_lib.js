// somehow file I call the module in has access to these dependencies...?
var fs = require('fs')
var path = require('path')


module.exports = function (dirname, ext, callback) {

    // these functions in node's fs module are pretty commonly going to
    // provide results to a callback

    fs.readdir(dirname, function(err, files_array){

      if (err) {
        return callback(err)
      }

      var filtered_files_array = []

      for(i = 0; i < files_array.length; i++){
         if (path.extname(files_array[i]) == '.' + ext) {
           filtered_files_array.push(files_array[i])
         }
         else if (path.extname(files_array[i]) == ext) {
           filtered_files_array.push(files_array[i])
         }
      }

      // the null here is just to indicate we no errors... mbe useless?
      callback(null, filtered_files_array)

    })

 }
