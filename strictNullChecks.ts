// null (nulo) => representa ausência de valor
// undefined (não definido) => nem um valor foi atribuído
let value1;
console.log(typeof value1);

value1 = null;

console.log(typeof value1);

function hello(value: string | null | undefined) {
  if (value) {
    console.log("Hello, " + value.toUpperCase());
  }
}

hello("Lucas");
