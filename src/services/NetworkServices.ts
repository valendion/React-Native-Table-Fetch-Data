import {ResponseUserPayment} from '../model/ResponseUserPayment'
import {client} from './ClientAxios'
import {allPaymentUrl} from '../constans/constans'

export class NetworkServices {
   async getAllPayment(): Promise<ResponseUserPayment> {
      try {
         const payments = await client.get(allPaymentUrl)
         let responseUserPayment = new ResponseUserPayment(payments.data)
         return responseUserPayment
      } catch (error) {
         console.log(error)
         return new ResponseUserPayment([])
      }
   }
}
