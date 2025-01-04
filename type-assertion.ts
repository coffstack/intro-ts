/**
 * Afirmações de Tipo - Type Assertions
 * palavra "as" - "como"
 *
 * Às vezes, você terá informações sobre o
 * tipo de um valor que o TypeScript não consegue conhecer.
 */

type Person = {
  firstName: string;
  lastName: string;
  email: string;
  address: {
    zipCode: string;
  };
};

const value = { firstName: "Lucas" } as Person; // recomendo usarem o "as"
// const value = <Person>{};

// 1 - algo que acontece em tempo de execução ou fator externo
value.firstName = "Lucas";

// 2 - criando mocks para testes automatizados
value.lastName = "Garcez"; // teste unitário para lastName

console.log(value);

// console.log(value.address.zipCode); // TypeError: Cannot read properties of undefined (reading 'zipCode')
