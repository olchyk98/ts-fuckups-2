interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  department: string
  startDate: Date
}

function printDetails (person: Person): void {
  console.log(`Name: ${person.name}, Age: ${person.age}`)
}

const employee: Employee = {
  name: 'John',
  age: 25,
  department: 'HR',
  startDate: new Date('2020-01-01'),
}

printDetails(employee)

function addYears (employee: Employee, years: string | number): void {
  employee.age += years
}

addYears(employee, '5')
