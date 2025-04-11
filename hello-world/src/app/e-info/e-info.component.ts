import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-e-info',
  imports: [CommonModule, FormsModule],
  providers: [DataService],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css'
})
export class EInfoComponent implements OnInit {
  
  infoReceived1 : string[] = [];
  infoReceived2 : string[] = [];
  infoReceived3 : string[] = [];

  //methods
  getinfoReceived1(){
    this.infoReceived1 = this.dservice.getinfo1();
  }
  getinfoReceived2(){
    this.infoReceived2 = this.dservice.getinfo2();
  }
  getinfoReceived3(){
    this.infoReceived3 = this.dservice.getinfo3();
  }


  constructor( private dservice:DataService){}
  
  
  ngOnInit(): void {
  }

  updateInfo(frm :any){
    this.dservice.addInfo(frm.value.location)
  }


}
