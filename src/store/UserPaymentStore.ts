import {observable, action} from 'mobx'
import {ResponseUserPayment} from '../model/ResponseUserPayment'
import UserPaymentRepository from '../repository/UserPaymentRepository'
import {NetworkServices} from '../services/NetworkServices'

class UserPaymentStore {
   @observable
   responseUserPayment: ResponseUserPayment = new ResponseUserPayment([])

   private networkServices = new NetworkServices()
   private userPaymentRepository = new UserPaymentRepository(
      this.networkServices,
   )

   @action async getUserPayment() {
      await this.userPaymentRepository
         .getAllPayment()
         .then(data => (this.responseUserPayment = data))
   }
}

const userPaymentStore = new UserPaymentStore()

export default userPaymentStore
