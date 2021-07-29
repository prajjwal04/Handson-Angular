import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Engineer } from 'Models/Engineer';
import { EngineerService } from '../engineer-service.service';

@Component({
  selector: 'app-engineer-data',
  templateUrl: './Engineer-data.component.html',
  styleUrls: ['./Engineer-data.component.css']
})
export class EngineerDataComponent implements OnInit {
  
  //Array to store the Engineer objects.
  engineers:Engineer[]=[];

  //Engineer object to be used in forms.
  engineer:Engineer={
    e_No:0,
    e_Name:"",
    e_Age:0,
    e_Branch:""
  };
  
  //Other required variables.
  msg:string="";
  u_msg:string="";
  d_msg:string="";
  e_msg:string="";

  flag_get:boolean=false;
  flag_post:boolean=false;
  flag_put:boolean=false;
  flag_delete:boolean=false;
  flag_register:boolean=false;

  update_id:number=0;
  delete_id:number=0;

  //Injecting Player service inside this component.
  constructor(private obj:EngineerService)
  {
  }

  ngOnInit(): void {
  }
  
  get_api():void
  {
    this.obj.getAllUsers().subscribe(data=>{
      this.engineers=data;
      this.flag_get=true;this.flag_post=false;this.flag_put=false;this.flag_delete=false;this.flag_register=false;
      //Logging the response recieved from web api.
      console.log(this.engineers);
    });
  }

  post_api(data:any):void
  {
    this.obj.createUser(data).subscribe(data=>{
    this.msg="Successfully created "+data.e_Name;
    //Logging the response received from web api.
    console.log(data);
    })
  }

  put_api(id:number,data:any):void
  {
    this.obj.updateUser(id,data).subscribe(data=>{
      this.u_msg="Successfully updated ID "+id;
      console.log(data);
    })
   

  }

  delete_api(id:number):void
  {
    this.obj.deleteUser(id).subscribe(data=>{
      this.d_msg="Successfully deleted Engineer details "+id;
      console.log(data);
    })
    
  }

  error_api():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=true;

    this.obj.register().subscribe((data)=>{
    console.log(data);
    },
    (error)=>{
    this.e_msg=error;
    }
    );
  }

  btn_post():void
  {
    this.flag_get=false;
    this.flag_post=true;
    this.flag_put=false;
    this.flag_delete=false;
    this.flag_register=false;
  }
  
  btn_put():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=true;
    this.flag_delete=false;
    this.flag_register=false;
  }

  btn_delete():void
  {
    this.flag_get=false;
    this.flag_post=false;
    this.flag_put=false;
    this.flag_delete=true;
    this.flag_register=false;
  }

}
