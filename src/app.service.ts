import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entity';

 @Injectable()
 export class AppService {
       //  employees: any = [];
         //Creating an emty array in the name of Employee


     /**  async  newEmployee (data:any) {
             
                this.employees.forEach((employee) => {
                // forEach is u8sed to check the data enter is same or not
                   if (employee.name === data.name ){
                   //if the data we given is already entred
                         throw new Error ('Employee already exit');
                         //Telling to print that tha employee is already is exit
                   }
                })

                const employeeId = Math.floor(Math.random()*1000)
                //Math.floor is used to give a value rounfly and Math.random is used to generate the value randomly
                const companyMail =`${data.name.toLowerCase()}@surfboard.se`
                //`$` is use to add a sting in it.toLowerCase is used to chnage the letter to small letters
                const newEmp = {...data, employeeId, companyMail};
                //...data is the spread operator
               this.employees.push(newEmp)
	      await this.ER.save (newEmp)
       	       return this.employees
                }
	          

    getEmployee(){
     const data = this.employees
     //Telling to print all the data in the employees array
      return data ;
    }
   
    getEmployeeById(data: any){
	     return this.employees.filter(v => v.employeeId)
	     //filter is used to filter the employee id that we want and checking the poistion of the id with the help of indexOff and tells tp print it
     }

     fireEmployee(data: any) {
             const empId = data.employeeId ;
             const emp = this.employees ;
          const idIndex = emp.map(v => v.empId).indexOf(empId)
          //map is used to find the employee id that we want and indexOf is used tp find the poistion in the array of that particular data
	  const fired =  emp.splice(idIndex,1);
	  //splice is used to delete the data
             return (`you are fired`)
   }

  updateEmployee(data: any){
    const empId = data.employeeId ;
    let dbData;
    let dbIndex;
    this.employees.forEach((v,i)=> {
          if (empId === v.employeeId) {
            dbData = {...v};
            dbIndex = i;
            }
          });
    if(!dbData) return 'No data found for the given id';
 const updatedData ={
      ...dbData,
      ...data
    };

    console.log("updated data", updatedData);
    console.log("db", JSON.stringify(this.employees));
    this.employees.splice(dbIndex, 1);
    //splice is used to delete the data
    this.employees.push(updatedData);
    //push is used to push the data to the array
    console.log("UPDATED db", JSON.stringify(this.employees));
    return this.employees;
  } **/


constructor(
       @InjectRepository(Employee)
       private ER:Repository<Employee>,
 ){}

 async  newEmployee (body){
                    console.log(body.name);
	 const data = await this.ER.findOne({where: { name:body.name },});

                                if (data  == null) {
					const employeeId = Math.floor(Math.random()*1000)
                                        const companyMail =`${body.name.toLowerCase()}@surfboard.se`
                                        const newEmp = {...body, employeeId, companyMail};
					const postEmp = await this.ER.save(newEmp);
                                        
                                        console.log(
                                                "New Employee details is  posted ",
                                                postEmp
                                        );

                                        return {
                                                status: "SUCCESS",
                                                message: "The Employee profile created successfully",
                                        };
                                } else {
                                        throw new Error(
                                                "Invalid Input : The Employee profile  is present already"
                                        );
                                }
 }

async getEmployee (){
       const getAll =await this.ER.find()
       return getAll;
}

async getEmployeeById(body){
        const get = await this.ER.findOne({where: { employeeId:body.employeeId },});
          return get
}

async fireEmployee(body){
	const detail = await this.ER.findOne({where: { employeeId:body.employeeId },});
	const del = await this.ER.delete({employeeId:body.employeeId})
       	return (`you are fired`)
}

async  updateEmployee(body){
	const profile = await this.ER.findOne({where: { employeeId:body.employeeId },});
	await this.ER.update({employeeId:body.employeeId},body)

}


 }
