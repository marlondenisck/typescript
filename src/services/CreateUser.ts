interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // ? significa opcional
  email: string;
  password: string;
  techs: Array<string | TechObject> // recebe um array e cada tipo interno do array é string OU outra interface
  // techs: string[] // recebe um array e cada tipo interno do array é string
}

function createUser({ name, email, password }: CreateUserData) {
  const user = { name, email, password }
  return user
}
export default createUser