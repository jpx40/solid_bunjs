import {Database} from "bun:sqlite";



function getParkplatz(){
    const db = new Database("/home/jonas/code/web/api_py/test.sqlite");
    const query = db.query("select * from parkplatz;");
    return query.all();
}

console.log(getParkplatz())
