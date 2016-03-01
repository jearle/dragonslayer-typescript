
import '../shims/window';
import {
  MyClass
} from './my-class';

export class Funk {

  constructor (
    public prop: string,
    public prop1: string) { }

}
console.log(MyClass);
export default () =>
  
  new MyClass('BUNG!', '').prop1;