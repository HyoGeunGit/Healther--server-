# API Document

* POST /regi : User Signup (유저 회원가입)

> Response

    HTTP 200 : user json (회원 정보)

    HTTP 409 : 이미 있는 회원

    HTTP 400 : 에러메시지

* POST /login : User login (유저 로그인)

> Params

    ex)
    {
      email : "shimhg02@naver.com",
      passwd : "password"
    }
> Response

    HTTP 200 : {token : User token} (유저 토큰)

    HTTP 404 : {message : "유저 불명"}

* GET /auto/:token : User auto Signin (자동 로그인)

> Response

    HTTP 200 : {user :  User's Json} (유저 정보)

    HTTP 404 : {message : "유저 불명"}

* POST /notice (게시판)

> Params

    ex)
      {
    writer: "글 작성자",
    title: "글 제목",
    contents: "글 내용",
    comments: [{
        name: "댓글 작성자",
        memo: "댓글 내용",
        date: {type: Date, default: Date.now} (날짜)
    }],
    date: {type: Date, default: Date.now}
});
 
 

   
