function createCheckDigit(membershipId) {
  // Write the code that goes here.
  if (membershipId.length===1){
    return membershipId;
  }
  var digits = membershipId;
  while (digits.length!==1){
    var sum=0
    for(i=0;i<digits.length;i++){
      sum+=Number(digits[i]);
    }
    digits=String(sum);
  }
  return Number(digits);
}

console.log(createCheckDigit("55555"));
