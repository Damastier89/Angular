export interface User {
    id: number
    name: string
    age: number
    deposit: number
}
export interface Post {
  title: string
  text: string
  subtext?: string
  id?: number
}

export interface validation {
  [key: string]: boolean
}
