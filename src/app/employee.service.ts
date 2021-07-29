import { Injectable } from '@angular/core';
import { Employee } from 'Models/Employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService 
{
  //Creating a list of Employees.
  employeeList:Employee[]=
  [
    {
      id:1,
      name:"Mukesh Ambani",
      salary:200000,
      permanent:true,
      department:{id:1,name:"PayRoll"},
      skill:[{id:1,name:"HTML"},{id:2,name:"CSS"},{id:3,name:"JavaScript"}],
      dateOfBirth:new Date("2000-07-15"),
      photoURL:"assets/Images/mukesh.jpg"
    },
    {
      id:2,
      name:"Barak Obama",
      salary:300000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"PHP"},{id:2,name:"MYSQL"},{id:3,name:"React"}],
      dateOfBirth:new Date("1999-06-15"),
      photoURL:"assets/Images/Obama.jpg"
    },
    {
      id:3,
      name:"Elon Musk",
      salary:100000,
      permanent:false,
      department:{id:3,name:"HR"},
      skill:[{id:1,name:"JAVA"},{id:2,name:"SpringBoot"},{id:3,name:"Angular"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/Elon.jpg"
    },
    {
      id:4,
      name:"Adani",
      salary:300000,
      permanent:true,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"C#"},{id:2,name:"ASP.NET MVC"},{id:3,name:"VUE"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/Adani.jpg"
    },
    {
      id:5,
      name:"Tanmay Bhatt",
      salary:250000,
      permanent:false,
      department:{id:2,name:"Internal"},
      skill:[{id:1,name:"Go"},{id:2,name:"ASP.NET CORE"},{id:3,name:"Python"}],
      dateOfBirth:new Date("1993-08-15"),
      photoURL:"assets/Images/Tanmay.jpg"
    }
  ];

  constructor() { }
  
  //Creating an empty employee object.
  empty_emp:any={};

  //Get all employees.
  getAllEmployees():Employee[]
  {
    return this.employeeList;
  }

  //Get employee by id.
  getEmployee(employeeId:number):Employee
  {
    

    this.employeeList.forEach(item => {
      if(item.id==employeeId)
      this.empty_emp=item;  
    });

    return this.empty_emp;
  }

}
