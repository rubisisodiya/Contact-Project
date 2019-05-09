const bycryptjs = require('bcryptjs')
const password = "secret123"

bycryptjs.genSalt(10)
    .then(function(salt){
        console.log(salt)
        bycryptjs.hash(password,salt)
            .then(function(encryptedPassword){
                console.log(encryptedPassword)
            })
    })
	
