class Pessoa {
  constructor(name) {
      this.name = name;
  }
}

class Funcionario extends Pessoa {
  constructor(name, ordens, salary) {
      super(name);
      this.ordens = ordens;
      this.salary = salary;
  }

  aumento() {
      const newSalary = this.salary * 1.1;
      this.salary = newSalary;
  }
}

class Estagiario extends Funcionario {
  constructor(name) {
      super(name, "Estagiário", 2000);
  }

  aumento() {
      const newSalary = this.salary * 1.07;
      this.salary = newSalary;
  }
}

class Gerente extends Funcionario {
  constructor(name) {
      super(name, "Gerente", 10000);
  }

  aumento() {
      const newSalary = this.salary * 1.1;
      this.salary = newSalary;
  }
}

const worker1 = new Funcionario("Erick", "dev front-end", 5000);
const worker2 = new Estagiario("Roberta");
const worker3 = new Gerente("Thiago");

worker1.aumento();
console.log(`Funcionário ${worker1.name} , seu salário é $${worker1.salary}R$, sua profissão é ${worker1.ordens}.`);

worker2.aumento();
console.log(`Funcionário ${worker2.name}, seu salário é  ${worker2.salary}R$, sua profissão é ${worker2.ordens}. `);

worker3.aumento();
console.log(`Funcionário ${worker3.name}, seu salário é   ${worker3.salary}R$, sua profissão é ${worker3.ordens}.`);
