import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import lockerRouter from "./routers/lockerRouter";
import { localsMiddleware } from "./middlewares";
//expressjs.com 홈페이지에서 express()에 대한 정보를 확인 가능


const app = express();
//이 밑으로 request에 대한 response 동작을 수행하는 코드를 작성
const loggermiddleware = morgan("dev");//설치형 자동 middleware 

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");


app.use(loggermiddleware);
app.use(express.urlencoded({ extended: true}));

console.log(process.env.DB_URL);
app.use(
    session({
        store: MongoStore.create({mongoUrl: process.env.DB_URL}),
        secret: process.env.COOKIE_SECRET,
        resave :false,
        saveUninitialized: false,
        cookie: {
            maxAge: 2000000,
        },
       

    })
);

// app.use((req,res,next) => {
//     req.sessionStore.all((error,sessions) =>{
//         console.log(sessions);
//         next();
//     });
// });
//1 get
//app.get("/",() => console.log("someone is in my server"));
//or  const Home = () => console.log("someone is in my server");
//    app.get("/",Home);
// 브라우저가 request를 보내고 있지만 응답하지 않아 무한 로딩화면임

//  const Home = (req,res) => {
//     return res.send("hello is my first responce!");
//    // res.end()를 responce하여 로딩이 끝나고 응답을 함. 하지만 응답을 끝내기만 할 뿐 아무것도 출력 되지 않음
//     //res.send("문구");는 문구를 응답으로 출력함
//  }
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/locker", lockerRouter);
app.use("/user", userRouter);

// const gossipMiddleware = (req,res,next) => {
//     console.log(`request on the :${req.url}`);
//     next();
// };
// const privateMiddleware = (req,res,next) => {
//     const url = req.url;
//     if(url === "/protected"){
//         return res.send("<h1>Not Allowed</h1>");
//     }
//     next();
// };
//3 morgan middleware
//const loggermiddleware = morgan("dev");  //설치형 자동 middleware 
//app.use(loggermiddleware);
//app.use(gossipMiddleware);  //global middleware임, 따로 get함수 안에 명시 안해줘도 모든 respond 전 작동함
//app.use(privateMiddleware);
// const Handlelogin = (req,res) => {
//     return res.send("This is login page");
//  };
// app.get("/login", Handlelogin);

//2 middleware (=req와 res 사이에 작동하는 동작)
// const gossipMiddleware = (req,res,next) => {
//     console.log("I'm in the middle!");
//     next();
// }

//  const Home = (req,res,next) => {
//     return res.send("hello is my first responce!");
//     //res.end()를 responce하여 로딩이 끝나고 응답을 함. 하지만 응답을 끝내기만 할 뿐 아무것도 출력 되지 않음
//    // res.send("문구");는 문구를 응답으로 출력함
//  };

 //app.get("/", gossipMiddleware, Home); //이게 route임
//3 app.use 모든 url에 middleware을 작동하게 하는 Global middleware
//app.use는 모든 response보다 앞에 명시되어야 함
//app.use(gossipMiddleware);

//app.get("/", Home);
// const handleProtected = (req,res) => {
//     return res.send("Welcome to the private lounge");
// };
// app.get("/protected", handleProtected);

export default app;



