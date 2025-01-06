// "keyof" Type Operator - Produz um novo tipo a partir da união das chaves de um objeto

import { lucas, publication1 } from "./data";
import { User } from "./models";

// const email = lucas["email"];
// console.log(email);

// type UserKey = "firstName" | "lastName" | "email";
function getProperty<T>(value: T, key: keyof T) {
  return value[key];
}

console.log(getProperty(publication1, "description"));
