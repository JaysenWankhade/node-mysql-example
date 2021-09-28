1st Step -> create a .env file with following data.

HOST=host_name
USER=user_name
PASSWORD=db_password
DATABASE=database_name

2nd step -> run npm i
3rd step-> run npm start
4th step -> if getting an error while trying to coneect suc as
"Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
then try this command ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';
