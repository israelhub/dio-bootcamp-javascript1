// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Employee {
    code: number;
    name: string;
}

const employee = {} as Employee;
employee.code = 10;
employee.name = "John";

console.log(employee);