const config = {
    app: {
        port: process.env.PORT,
        env: process.env.NODE_ENV
    },
    db: {
        adapter: process.env.DB_ADAPTER || "postgres",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || "5432",
        name: process.env.DB_NAME || "traefik-ui",
        username: process.env.DB_USERNAME || "admin",
        password: process.env.DB_PASSWORD || "admin"
    },
}
module.exports = config