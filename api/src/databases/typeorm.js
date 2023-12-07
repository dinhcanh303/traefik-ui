const typeorm = require('typeorm');


const configDB = require("../configs/config").db;
const dataSource = new typeorm.DataSource({
    type: configDB.adapter,
    host: configDB.host,
    port: configDB.port,
    username: configDB.username,
    password: configDB.password,
    database: configDB.name,
    synchronize: true,
    entities: [
        require("./entities/user.schema")
    ]
})