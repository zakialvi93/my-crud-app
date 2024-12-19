Steps to run the project:
1. Run 'npm install' in the terminal
2. Create an .env file in root directory with the following:
    DB_HOST=string
    DB_USER=string
    DB_PASSWORD=string
    DB_NAME=string
    JWT_SECRET=string
    DB_DIALECT=string
    PORT=string
4. Run 'npx sequelize-cli init' in the terminal
5. Create a config.js file in the config folder with the following code:
        require('dotenv').config();
        module.exports = {
          development: {
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
          },
        };
6. Import/require the config.js in place of config.json file in the index.js file within the models folder
7. Delete config.json file
8. Create a User model using the following command:
    npx sequelize-cli model:generate --name User --attributes name:string,email:string,password:string
9. Update the generated migration in migrations/ to add unique constraint on email:
        email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
              }
10. Run 'npx sequelize-cli db:create' in the terminal
11. Run 'npx sequelize-cli db:migrate' in the terminal
12. Run 'npm run dev' in the terminal

