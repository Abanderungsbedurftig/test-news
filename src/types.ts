export type PagePath = '/news' | '/profile' | '/'

export type UserInfo = {
  login: string | null
  isAuth: boolean
}

export type ErrorInfo = {
  isError: boolean
}

export type AuthFields = {
  login: string
  password: string
}
