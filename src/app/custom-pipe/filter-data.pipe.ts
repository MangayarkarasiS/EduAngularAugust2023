import { Pipe, PipeTransform } from '@angular/core';
import { Stud } from '../stud/stud.model';

@Pipe({
  name: 'filterData',
  pure:false
})
export class FilterDataPipe implements PipeTransform {
    

  transform(value: Stud[], ...args: string[]): Stud[] {     
     if(value.length==0 || args[0]=='') return value;
     return value.filter((eachStudent)=>eachStudent.studGender.toLowerCase()==args[0].toLowerCase())
      


  }   

  /*transform(value: number, ...args: number[]): number {
    let ans=1;
    for(let i=0;i<args[0];i++)
     {
       ans=ans*value;
     }
    return ans;*/
  }


