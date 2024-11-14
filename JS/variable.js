const accountId = 144553
let accountEmail = "ayush17102000@gmail.com"
var accountPassword = "12345"
accountCity = "Varanasi"

//accountId = 2 // not allowed

accountEmail = "aman123@gmail.com"
accountPassword = "2125412"
accountCity = "varanasi"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope*/

console.table([accountId, accountEmail, accountPassword, accountCity])