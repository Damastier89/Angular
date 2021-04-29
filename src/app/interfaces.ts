export interface User {
    id: number
    name: string
    age: number
    deposit: number
}
export interface Post {
  title: string
  body: string
  userId?: number
}

export interface Todo {
  completed: boolean
  title: string
  id: number
  userId?: number
}

export interface validation {
  [key: string]: boolean
}
