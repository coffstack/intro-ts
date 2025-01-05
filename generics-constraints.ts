// Generic Constraints - Restrições Genéricas
// genérico mas nem tanto

type TypeConstraints = {
  length: number;
};

function loggingIdentity<Type extends TypeConstraints>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const value: string = "value";

loggingIdentity(value);
loggingIdentity([3, 34]);
