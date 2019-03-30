var apicntrlr=require('../controller/api')
var exp=require("express")
var router=exp.Router()


router
.route('/getnews')
.get(apicntrlr.getnews)



router
.route("/addfollow")
.post(apicntrlr.addfollow)


module.exports=router   