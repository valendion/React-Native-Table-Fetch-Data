import {ResponseUser} from '../model/ResponseUser'
import {ResponseUserPayment} from '../model/ResponseUserPayment'
import {NetworkServices} from '../services/NetworkServices'

class UserPaymentRepository {
   networkServices: NetworkServices

   constructor(networkServices: NetworkServices) {
      this.networkServices = networkServices
   }

   getAllPayment(): Promise<ResponseUser> {
      return this.networkServices.getAllPayment()
   }
}

export default UserPaymentRepository
