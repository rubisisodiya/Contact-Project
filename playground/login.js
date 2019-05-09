const bycryptjs = require('bcryptjs')

const encrypted = '$2a$10$cRQPxtAc8qiQhKv1TbWNje2rd2kCGgoO/leTkCf1HgIC3SAzWUuvi'
const password  ="secret123"

bycryptjs.compare(password,encrypted)
    .then(function(result){
        console.log(result)
    })