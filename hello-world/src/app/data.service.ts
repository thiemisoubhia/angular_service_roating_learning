import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[] = ["John", 'E354', 'j@abc.net']
  info2:string[] = ["Rob", 'E673', 'rb@abc.net']
  info3:string[] = ["Rose", 'E865', 're@abc.net']


//methods that return this employees infos
getinfo1():string[]{
  return this.info1
}

getinfo2():string[]{
  return this.info2
}

getinfo3():string[]{
  return this.info3
}

  constructor() { }

  addInfo(info: string){
    this.info1.push(info);
    this.info2.push(info);
    this.info3.push(info);

    return this.info1
  }

}
