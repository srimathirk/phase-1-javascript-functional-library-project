const unmodifiedTestArr = [1, 2, 3, 4]
const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}



//myEach 
function myEach(testObj,spy){
  const objValues = Object.values(testObj)
  objValues.forEach((val)=>spy(val))
  return testObj
}
myMap
function myMap(testObj,callback){
  const nobjValues = Object.values(testObj)
  let mappedArr = [];
  for(let i=0; i<nobjValues.length; i++){
    mappedArr.push(callback(nobjValues[i],i,nobjValues));
  }
return (mappedArr);
}
myMap()
//myReduce
function myReduce(testObj,callback,acc){
  let keys = Object.keys(testObj);
  let start =0;
  if(acc === undefined){
    acc = testObj[keys[0]];
    start =1;
  }
  for(let i=start; i<keys.length; i++){
    acc = callback(acc,testObj[keys[i]],testObj)
  }
  return acc;
}


function myFind(testObj,predicate){
   const found = testObj.find( predicate);
   if (found === undefined){
    return undefined  
   }else{
   return found
  }
}

function myFilter(testObj,predicate){
  if(!Array.isArray(testObj)){
    return [];
  }
  const filtered = testObj.filter(predicate);
    return filtered
  }
function mySize(collection){
  if(Array.isArray(collection)){
    return collection.length;
  }else if (typeof collection === 'object' && collection !== null){
    return Object.keys(collection).length
  }else{
    return 0;
  }
}
function myFirst(array,n){
  if(n== undefined){
    return array[0];
  }else{
    return array.slice(0,n)
  }
}
function myLast(array,n){
  if(n=== undefined){
    return array[array.length -1]
  }else{
    return array.slice(-n)
  }
}
function myKeys(object){
  return Object.keys(object)
}
function myValues(object){
  return Object.values(object)
}