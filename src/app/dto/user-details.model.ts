export interface UserDetails {
  id: number
  fullName: string
  email: string
  vatsimId?: string
  ivaoId?: string
  posconId?: string
  minutes: number
  roles: string[]
  active: boolean
  createdDate: string
  updatedDate: string
  firstLoginDate?: string
  lastLoginDate?: string
}
