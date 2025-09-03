export class Tarefa {

    // Propriedade que guarda a descrição da tarefa
 descricao: string;

    // Propriedade que indica se a tarefa já foi realizada (true) ou não (false)
 statusRealizada: boolean;

    // Constructor é um método especial para criar novos objetos da classe Tarefa
    // Ele recebe a descrição e o status inicial e atribui ás propriedades da classe Tarefa
 constructor(_descricao: string, _statusRealizada: boolean) {
 this.descricao = _descricao;   // atribui a descrição recebida ao objeto
 this.statusRealizada = _statusRealizada;   // atribui o status recebido ao objeto
 }
}