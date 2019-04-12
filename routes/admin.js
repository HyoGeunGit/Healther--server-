module.exports = (router, Users, Boards, Admin, multer,CORS)=>{
    var storage = multer.diskStorage({
        destination: (req,file,cb)=>{
          cb(null, '/home/ubuntu/TVserver/public'); //'C:\\Users\\parktea\\Desktop\\weju\\TVserver\\public' /home/ubuntu/TVserver/public
        },
        filename: (req,file,cb)=>{
          console.log(file.originalname)
          var newStr = file.originalname
          cb(null, newStr);
        },
        limits: {
          fileSize: 5 * 1024 * 1024
        }
    })
    const upload = multer({storage : storage});
    router.post('/addAdminAcount', async(req,res)=>{
        var new_user = new Admin(req.body);
        var result = await new_user.save();
        res.status(200).json({message : "success!"});
    })
    router.post('/fixAdmin', async(req,res)=>{
        let result = await Admin.updateOne({id : req.body.id}, { $set : {passwd : req.body.passwd}})
        res.status(200).json({message : "success!"})
    })
    router.post('/loginAdmin', async(req,res)=>{
        let adminChk = await Admin.findOne({"id" : req.body.id, "passwd" : req.body.passwd})
        if(!adminChk) return res.status(404).json({message : "fail"})
        else return res.status(200).json({message : "success!"})
    })
    router.post('/userInfo', async (req,res)=>{
        let result = await Users.find().sort({"_id" : -1})
        res.status(200).json({list : result})
    })
    router.post('/boardsInfo', async (req,res)=>{
        let result = await Boards.find().sort({"_id" : -1});
        res.status(200).json({list : result})
    })
    router.post('/delUser', async(req,res)=>{
        let result = await Users.remove({token : req.body.token})
        return res.status(200).json({message : "success!"})
    })
    router.post('/delBoard', async(req,res)=>{
        let result = await Boards.remove({token : req.body.token})
        return res.status(200).json({message : "success!"})
    })
    .post('/banner', upload.single('photo'), (req,res)=>{
        res.status(200).json({message : req.file.filename})
    })
    return router;
}
