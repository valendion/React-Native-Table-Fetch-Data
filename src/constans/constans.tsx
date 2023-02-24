export const users = [
   {
      user_id: 1,
      name: 'dion',
      pay_id: 12,
      status: true,
   },
   {
      user_id: 2,
      name: 'lio',
      pay_id: 1234,
      status: false,
   },
]

export const titleTable: Array<String> = ['User_id', 'Name', 'Pay_id', 'status']

export const baseUrl = 'https://devapi.pepcorns.com/api/test/'
export const allPaymentUrl = `${baseUrl}getAllPayments`
export const allUserUrl = `${baseUrl}getAllUsers`
