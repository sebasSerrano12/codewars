// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
// function validatePIN (pin) {
//   const pinLength = pin.length === 4 || pin.length === 6; //we are checking for the pin.length to be b/w (4 =< pin =< 6) characters
//   const num = /^[0-9]/g //num constant is b/w 0-9 on characters
//   return pinLength && pin.match(num)? true //if both conditions are met => return true
//     : false //else return false
//if else solution  
//   if (pinLength && pin.match(num)){
//     return true
//   }else {
//     return false
//   }
//}
// validatePIN('1234') => true
// validatePIN('a234') => false
