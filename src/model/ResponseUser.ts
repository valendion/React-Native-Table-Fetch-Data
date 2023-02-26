import {User} from './User'

export interface ResponseUser {
   page: number
   per_page: string
   total: string
   total_pages: string
   data: Array<User>
}
