// import { PrismaClient } from "@prisma/client";
const {PrismaClient}=require("@prisma/client");
const database=new PrismaClient();

async function main(){
    try{
        await database.category.createMany({
            data:[
                {name:"Computer Sciene"},
                {name:"Music"},
                {name:"Fitness"},
                {name:"Photography"},
                {name:"Accounting"},
                {name:"Engineering"},
                {name:"Filming"},
            ]
        });
        console.log("success");

    } catch(error){
        console.log("Error seeding the databse categories");
    } finally{
        await database.$disconnect();
    }
}

main();
// node scripts/seed.ts seeded all these into db