
function destroyer(arr) {
  
  var args = Array.from(arguments);
  
  var newArray = arr.filter(function(value) {
      if (args.includes(value))
        return false;
    
      else 
        return true;   
  });
  
  return newArray;
}

//test case
//destroyer([1, 2, 3, 1, 2, 3], 2, 3);
