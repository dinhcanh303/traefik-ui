"use strict";
const Post = require("../models/user.model");
const EntitySchema = require("typeorm").EntitySchema;
module.exports = new EntitySchema({
    name: "User",
    target: Post,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        username: {
            type: "varchar",
            unique: true,
        },
        password: {
            type: "varchar",
            
        },
        first_name: {
            type: "varchar",
            nullable: true,
        },
        last_name: {
            type: "varchar",
            nullable: true,
        },
    }
})