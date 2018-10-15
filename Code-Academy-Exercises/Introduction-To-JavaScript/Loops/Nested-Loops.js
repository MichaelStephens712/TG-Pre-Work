// Write your code below


var bobsFollowers = ['a', 'b', 'c', 'd'];
var tinasFollowers = ['a', 'b', 'e'];
var mutualFollowers = [];
for(let i = 0; i < bobsFollowers; i++){
  for(let j = 0; j < tinasFollowers; j++){
    if(bobsFollowers[i] == tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
//One use for a nested for loop is to compare the elements in two arrays. 
