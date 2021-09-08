import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mart'
})
export class MartPipe implements PipeTransform {

  transform(value: string, citycode: string): any {
    //return 'city name:' +city;
    //if(citycode ==="mum"){
 //return "hello mumbai"
   // }else{
      // return "bye"
    //}
  }

  

}
