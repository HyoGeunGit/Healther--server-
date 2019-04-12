module.exports = (router, Users, Boards, rndstring,CORS) => {
    router.get('/getList', async(req,res)=>{
        let result = await Boards.find().sort({"_id" : -1});
        let list = [];
        for (var i=0; result[i] != null; i++) {
            let json = {
                title : result[i].title,
                writer : result[i].writer,
                date: result[i].date,
                token: result[i].token
            }
            list.push(json)
        }
        return res.status(200).json({list : list})
    })
    .post('/newNotice', async (req,res)=>{
        let notice = new Boards(req.body)
        notice.token = rndstring.generate(20)
        let result = await notice.save();
        res.status(200).json({message : "success"})
    })
    .get('/getItem/:token', async (req,res)=> {
        let result = await Boards.findOne({token : req.params.token})
        if(!result) return res.status(404).json({message : "Item Not Found!"})
        else return res.status(200).json({item : result})
    })
    .post('/newReply', async(req,res)=>{
        let new_reply = {
            name: req.body.name,
            memo: req.body.memo
        }
        let result = await Boards.update({"token" : req.body.token},
            {$push : {comments: new_reply}
        })
        if(!result.ok) return res.status(500).json({message: "ERR!"})
        else return res.status(200).json({message: "success!"})
    })
    .get('/getSearchList/:title', async(req,res)=>{
        let result = await Boards.find({title : {$regex: req.params.title, $options:"$i"}})
        let list = []
        for( var i = 0; result[i] != null; i++) {
            let json = {
                title: result[i].title,
                token: result[i].token
            }
            list.push(json)
        }
        return res.status(200).json({list : list})
    })
    return router
}
