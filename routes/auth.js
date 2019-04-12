module.exports = (router,Users,rndstring,CORS)=>{

  router.post('/regi', async (req,res)=>{
     let newUser = new Users();

    newUser.name = req.body.name;
    newUser.id = req.body.id;
    newUser.passwd = req.body.passwd;
    newUser.phone = req.body.phone;

    Users.findOne({ id: req.body.id })
        .then((user) => {
            if (user === null) {
                newUser.save((err) => {
                    if (err) {
                        res.status(500).json({
                            'result': 'failure'
                        });
                        return;
                    } else {
                        res.status(200).json({
                            'result': 'success'
                        });
                    }
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                res.status(500).json({
                    'result': 'failure'
                });
            }
        });
  })
  .post('/login', async (req,res)=>{
     Users.findOne({ id: req.body.id })
        .then((user) => {
            if (user === null) {
                res.status(405).json({
                    'result': '유저불명'
                });
            } else if (user.passwd === req.body.passwd) {
                res.status(200).json({
                    'result': '로그인에 성공하셨습니다.'
                });
            } else {
                res.status(405).json({
                    'result': 'failure'
                });
            }
        })
        .catch((err) => {
            if(err){
                res.status(500).json({
                    'result': 'failure'
                });
            }
        });
    })
  .get('/logout/:token', async (req,res)=>{
    const token = req.params.token;
    var result = await Users.update({token : token}, {$set:{isLogined : false}});
    if(result.ok) return res.status(200);
    else return res.status(500);
  })
  .get('/auto/:token', async (req,res)=>{
    const token = req.params.token;
    const result = await Users.findOne({token : token});
    if(result.isLogined == 1) return res.status(200).json(result);
    else if(!result) return res.status(404).json({message : "유저 불명"});
    else return res.status(401);
  });
  return router;
};
