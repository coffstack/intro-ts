// Generics (genéricos) - Capacidade de criar código (função, classe, tipos)
// que funcionam em uma variedade de tipos ao em vez de apenas um.

// type variable - variável de tipo
function identity<Type>(arg: Type): Type {
  return arg;
}

const argString: string = "value";
const value = identity(argString);

const value2 = identity<number>(4);
