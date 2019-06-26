// Write your solution in this file!
const driver = {name: "Rudi"}

function updateDriverWithKeyAndValue(obj, key, value){
  const newDriver = {...obj}
  newDriver[key] = value
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromDriverByKey(obj, key){
  const newObj = Object.assign({}, obj)
  delete newObj[key];
  return newObj
  // return
  // console.log(newObj)

}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}

//same but mutates the driver passedin
//choose between dot/bracket notation
