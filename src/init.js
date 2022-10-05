import "dotenv/config";
import "./db";
import "./models/Locker";
import "./models/User";
import app from "./server";

const PORT = 4000;
const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);
//큰따옴표나 작은따옴표가 아닌 벡틱이라는 문구로 ESC 밑에 있는 걸로 묶어야됨 

//app.listen(4000, () => console.log("Server listening on port 4000"));
app.listen(PORT, handleListening); //위의 방식과 동일함
