function input_iterator(array) {
  var sum = 0
  for (i = 2; i < array.length; i++) {
    sum = sum + Number(array[i])
  }
  console.log(sum)
}

input_iterator(process.argv)
