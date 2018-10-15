const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];



const foundAnimal = animals.findIndex(jj => {
  return jj == 'elephant';
})
const startsWithS = animals.findIndex(jj => {
  return jj[0] == 's';
})
//Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.
