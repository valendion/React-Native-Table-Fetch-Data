import {ResponseUserPayment} from '../model/ResponseUserPayment'
import {client} from './ClientAxios'
import {allUser} from '../constans/constans'
import {Userpayment} from '../model/UserPayment'
import {ResponseUser} from '../model/ResponseUser'

export class NetworkServices {
   async getAllPayment(): Promise<ResponseUser> {
      let responseUser: ResponseUser = {} as ResponseUser
      try {
         const payments = await client.get(allUser)
         responseUser = payments.data as ResponseUser
         return responseUser
      } catch (error) {
         console.log(error)
         return responseUser
      }
   }
}
