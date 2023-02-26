import {observable, action, makeAutoObservable, runInAction} from 'mobx'
import {createContext} from 'react'
import {ResponseUser} from '../model/ResponseUser'
import {ResponseUserPayment} from '../model/ResponseUserPayment'
import UserPaymentRepository from '../repository/UserPaymentRepository'
import {NetworkServices} from '../services/NetworkServices'

class UserPaymentStore {
   responseUser: ResponseUser = {} as ResponseUser

   constructor() {
      makeAutoObservable(this)
   }
   private networkServices = new NetworkServices()
   private userPaymentRepository = new UserPaymentRepository(
      this.networkServices,
   )

   async getUserPayment() {
      const allUSer = await this.userPaymentRepository.getAllPayment()

      runInAction(() => (this.responseUser = allUSer))
   }
}

class RootStore {
   userPaymentStore = new UserPaymentStore()
}

export const rootStore = new RootStore()

export const RootStoreContext = createContext(rootStore)
