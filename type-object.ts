// Type Aliases (type) and Interface

// type Person = { firstName: string; lastName: string };
interface Person {
  firstName: string;
  lastName: string;
}

interface User extends Person {
  email: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}

// Structural type system ⇒  Sistema de tipo estrutural
const person: User = {
  firstName: "Lucas",
  lastName: "Garcez",
  email: "contato@coffstack.com",
};

const fullName = getFullName(person);
console.log(fullName);
