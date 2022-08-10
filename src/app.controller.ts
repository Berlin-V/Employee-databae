import { Controller,Body,Post,Get } from '@nestjs/common';
//Importing the pakages we want
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //To create an new employee 
  @Post('new-employee')
  newEmployee(@Body()data:any){
  //In body the data given in string number any thing will be posted
         console.log(data)
	  const response = this.appService.newEmployee(data);
          //sending the data to the service page and returning the data 
	  return response;
  }

  //To get all employee details
  @Post ('get-all-employee')
  getEmployee(){
  const response = this.appService.getEmployee();
  //sending the data to the service page and returning the data
  return response ;
  }

  //To get a employee
  @Post ('get-employee-by-id')
  getEmployeeById(@Body() data: any){
      const response = this.appService.getEmployeeById(data);
      //sending the data to the service page and returning the data 
      return response 
      }
      
  //To delete the employee detail that we don't want
  @Post('fire-employee')
  fireEmployee(@Body() data: any) {
    const response = this.appService.fireEmployee(data);
    //sending the data to the service page and returning the data
    return response;
  }

  //To Update employee the employee details that we already saved 
  @Post('update-employee')
  updateEmployee(@Body() data: any){
    const response = this.appService.updateEmployee(data)
    //sending the data to the service page and returning the data
    return response ;
  }
}

