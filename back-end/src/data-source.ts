import "reflect-metadata"
import { DataSource } from "typeorm";
import { Proyecto } from "./entity/Proyecto";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "proyecto",
    synchronize: true,
    // logging: true,
    entities: [Proyecto],
    subscribers: [],
    migrations: [],
})

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
