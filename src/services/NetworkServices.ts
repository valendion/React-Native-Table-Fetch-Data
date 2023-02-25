import {ResponseUserPayment} from '../model/ResponseUserPayment'
import {client} from './ClientAxios'
import {allPaymentUrl} from '../constans/constans'
import {Userpayment} from '../model/UserPayment'

export class NetworkServices {
   async getAllPayment(): Promise<ResponseUserPayment> {
      try {
         const payments = await client.get(allPaymentUrl)

         const responseUserPayment = payments.data.response.map(
            (userPayment: Userpayment) =>
               new Userpayment(
                  userPayment.user_id,
                  userPayment.name,
                  userPayment.pay_id,
                  userPayment.pay_ref,
                  +userPayment.status,
               ),
         )

         return new ResponseUserPayment(responseUserPayment)
      } catch (error) {
         console.log(error)
         return new ResponseUserPayment([])
      }
   }
}
