function findMatching(arr,name){
  return arr.filter(e=>e.toLowerCase()===name.toLowerCase())
}
function fuzzyMatch(arr,name){
  return arr.filter(e=>e.charAt(0)===name.charAt(0))
}