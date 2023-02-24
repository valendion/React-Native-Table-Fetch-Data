import {Userpayment} from './UserPayment'

export class ResponseUserPayment {
   response: Userpayment[]
   constructor(response: Userpayment[]) {
      this.response = response
   }
}
