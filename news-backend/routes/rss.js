var apicntrlr=require('../controller/api')
var exp=require("express")
var router=exp.Router()


router
.route('/getrss')
.post(apicntrlr.getrss)

module.exports=router