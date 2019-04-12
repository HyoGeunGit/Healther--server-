module.exports = (router, Users, request, CORS) => {
    router.get('/getVList', async (req, res) => {
        let url = 'http://bcast4u.net/usr/bcast.php?mode=pc'
        let result = request(url, (err, response, body) => {
            let returnList = []
            //--------soccer------------------------------------------------------------------------------
            var position = new Array();
            var pos = body.indexOf("cate_soccer");
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_soccer", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                // console.log(asaa)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 133, position[i] + 177)
                let title = body.substring(position[i] + 180, position[i] + 250)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i=i;
                else returnList.push(json)
            }


            //--------농구------------------------------------------------------------------------------
            var position = new Array();
            var pos = body.indexOf("cate_basketball");
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_basketball", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 130, position[i] + 150)
                let title = body.substring(position[i] + 160, position[i] + 280)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) console.log(json);
                else returnList.push(json)
            }


            //-------하키------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_hockey")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_hockey", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }


            //-------야구------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_baseball")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_baseball", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 118, position[i] + 197)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }

            //-------풋볼------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_football")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_football", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 118, position[i] + 187)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }

            //-------테니스------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_tennis")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_tennis", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 118, position[i] + 187)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }


            //-------배구------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_volleyball")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_volleyball", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 118, position[i] + 197)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }

        
            //-------이게임------------------------------------------------------------------------------

            position = [];
            pos = body.indexOf("cate_lol")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_lol", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 108, position[i] + 197)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }


            //-------이게임------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_egame")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_egame", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 108, position[i] + 209)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }



            //-------티비------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_ch_btn2")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_ch_btn2", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }



            //-------배구------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_volleyball")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_volleyball", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }


            //-------하키------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_hockey")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_hockey", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let date = body.substring(position[i] + 115, position[i] + 145)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    date: date.substring(date.indexOf("<td>") + 4, date.indexOf("</t")),
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i=i;
                else returnList.push(json)
            }



            //-------티비------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_tv")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_tv", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let date = body.substring(position[i] + 105, position[i] + 185)
                let broad = body.substring(position[i] + 100, position[i] + 207)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    date: date.substring(date.indexOf("<td>") + 4, date.indexOf("</t")),
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i=i;
                else returnList.push(json)
            }



            //-------UFC------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_ufc")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_ufc", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }




            //-------테니스------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_tennis")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_tennis", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }




            //-------올------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_ALL")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_ALL", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 400, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let broad = body.substring(position[i] + 138, position[i] + 157)
                let title = body.substring(position[i] + 165, position[i] + 245)
                let json = {
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i = i;
                else returnList.push(json)
            }






            //-------KBS------------------------------------------------------------------------------
            position = [];
            pos = body.indexOf("cate_kbs")
            while (pos > -1) {
                position.push(pos);
                pos = body.indexOf("cate_kbs", pos + 1);
            }
            for (var i = 0; position[i] != null; i++) {
                let asaa = body.substring(position[i] + 370, position[i] + 900)
                let load_video1 = asaa.indexOf("load_video('")
                let load_video2 = asaa.substring(load_video1 + 12, load_video1 + 19)
                let date = body.substring(position[i] + 115, position[i] + 195)
                let broad = body.substring(position[i] + 128, position[i] + 187)
                let title = body.substring(position[i] + 170, position[i] + 245)
                let json = {
                    date: date.substring(date.indexOf("<td>") + 4, date.indexOf("</t")),
                    broadcastStation: broad.substring(broad.indexOf("<td>") + 4, broad.indexOf("</td>")),
                    title: title.substring(title.indexOf("t:bold;'>") + 9, title.indexOf("</td>")),
                    key: load_video2
                }
                if (load_video1 === -1) i=i;
                else returnList.push(json)
            }
            res.status(200).json({ list: returnList })
        })
    })
  .get('/test', async (req, res) => {
    let url = "http://reystream.tv/index.php?mid=FADO_MOBILE&document_srl=1041874&act=dispDocumentMultiPlayer"
    let result = await request(url, (err, response, body) => {
      res.send(body)
    })
  })
  .get('/getVideo/:key', async (req, res) => {
    let result = { // 임시 데이터
      url: "http://reystream.tv/index.php?mid=FADO_MOBILE&document_srl=" + req.params.key + "&act=dispDocumentMultiPlayer", // 영상 링크
      thumbnail: 'asdasd' // 썸네일 링크
    }
    return res.status(200).json(result)
  })
  return router;
}

