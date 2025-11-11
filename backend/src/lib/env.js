//instead of imprting and configuring this dotemv in every fle we do it once here and export it from here 

import dotenv from "dotenv"

dotenv.config();

export const ENV ={
    PORT:process.env.PORT,
    DB_URL:process.env.DB_URL
};