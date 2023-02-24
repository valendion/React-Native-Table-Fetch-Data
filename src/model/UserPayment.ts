export class Userpayment {
   user_id: string
   name: string
   pay_id: string
   pay_ref: string
   status: string
   constructor(
      user_id: string,
      name: string,
      pay_id: string,
      pay_ref: string,
      status: number,
   ) {
      this.user_id = user_id
      this.name = name
      this.pay_id = pay_id
      this.pay_ref = pay_ref
      this.status = status == 0 ? 'failed' : 'active'
   }
}
