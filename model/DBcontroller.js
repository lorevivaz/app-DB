


export default class DBcontroller {

    constructor() {
        this.db = null;
    }

    async openDB() {
        this.db =  await SQLite.openDatabaseSync('usersBD');
        const query = "CREATE TABLE IF NOT EXISTS Users (ID INTEGER PRIMARY KEY AUTOINCREMENT, sid TEXT );";
        await this.db.execAsync(query);    
    
       }

       async saveUser(sid) {
        const query = "INSERT INTO Users (sid) VALUES (?);";
        await this.db.runAsync(query, sid);
    }

    
    


    }