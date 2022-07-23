import { Request, Response } from "express"
import createUser from "./services/CreateUser"

export function helloWorld (req: Request, res: Response) {
  const user = createUser({
    email: 'email@teste',
    password: 'pass',
    techs: ['reactjs', 'typescript', {
      title: 'Javascript', experience: 100
    }]
  })
  
  return res.json({ message: 'Hello world' })
} 
