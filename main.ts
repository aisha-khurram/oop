#! usr/bin/env node

import inquirer from "inquirer";
class Student{
    name:string
    constructor(name:string){
        this.name=name
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
let persons=new Person()
const ProgramStart=async(persons:Person)=>{
    do{

    console.log("Welcome!")
    const ans=await inquirer.prompt([{
        name:"select",
        type:"list",
        message:"Whom would you like to interact with?",
        choices:["admin","student","exit"]
    }])
    if(ans.select==="admin"){
        console.log("You approached the admin. please feel free to ask");

    }
    else if(ans.select==="student"){
        let ans= await inquirer.prompt([{
            name:"student",
            type:"input",
            message:"Enter student's name you wish to interact with",
            
        }])
        const student=persons.students.find(val=>val.name===ans.student)
        if(!student){
            const name=new Student(ans.student)
            persons.addStudent(name)
            console.log(`hello i am ${name.name}. Nice to meet you`);
            console.log("new student added")
                console.log("current student list:")
                console.log(persons.students);
            
        }
        else{
            console.log(`Hello i am ${student.name}. Nice to see you again`)
            console.log("existing student list:");
            console.log(persons.students)
        }
    } else if(ans.select==="exit"){
        console.log("exiting the program");
        process.exit()
    }} while(true)
    

}
ProgramStart(persons)