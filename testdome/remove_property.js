function removeProperty(obj, prop) {
  var check = prop in obj;
  if (check){
    delete obj[prop];
    return true;
  }
  else{
    return false;
  }
}
