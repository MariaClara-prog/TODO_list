//Importa o decorator Component, que permite criar componentes no Angular, como uma caixinha que controla uma parte da tela da aplicação
import { Component, OnInit } from '@angular/core';

// Importado para usar diretivas como *ngFor no template HTMl 
import { CommonModule } from '@angular/common';

//Importa a classe Tarefa que representa o modelo de uma tarefa no app, serve de molde.
import { Tarefa } from './tarefa';

import { ItemComponent } from './item/item';

@Component({                    // Bloco de interface que organiza o código
  selector: 'app-root',         // Define o "apelido" HTML do componente - sempre que chamado, aplicará o componente
  standalone: true,             // Indica que o componente é standolone (não depende de módulo)
  imports: [CommonModule, ItemComponent],      // Importa o CommonModule para usar recursos como *ngFor no template
  templateUrl: './app.html',    // Caminho do arquivo HTML que define o template do componente
  styleUrls: ['./app.css']      // Caminho do arquivo CSS com os estilos do componente
})

//Definição da classe componente
export class AppComponent implements OnInit {

  // Título do app, usado no template para exibição
  title = 'TODOapp';

  // Array que guarda as tarefas criadas, usando o modelo Tarefa 
  arrayDeTarefas: Tarefa[] = [];

  //O constructor é chamado automaticamente quando o Angular cria uma novs instância do componente
  // Serve pra inicializar variáveis e preparar o componente
  constructor() {
    
  }
  // ngOnInit um método do ciclo de vida do Angular que é chamado logo após o constructor, quando o componente já está configurado e pronto pra interagir com a interface
  // Lugar ideal pra executar inicializações que dependem do template ou de dados externos
    ngOnInit(): void {
    this.read_tarefas();
  }

    // Método pra criar uma nova tarefa e adicioná-la no início da array de tarefas
  create_tarefa(descricaoNovaTarefa: string) {
   
    // Cria uma nova instância da classe Tarefa coma a descrição receda e status falso (não realizada ainda)
    var novaTarefa = new Tarefa(descricaoNovaTarefa, false);

    // Adiciona essa nova tarefa no começo do array (unshift)
   this.arrayDeTarefas.unshift(novaTarefa); 
  }

    //Método para carregar as tarefas iniciais (exemplo hardcoded)
  read_tarefas() {
    // Cria um array com três tarefas pré-definidas
    this.arrayDeTarefas = [
      new Tarefa("Estudar Frameworks WEB", false),
      new Tarefa("Comer Pizza", false),
      new Tarefa("Ajudar meus pais", false)
    ];

    

    // Para cada tarefa no array, exibe no console sua descrição e status
    this.arrayDeTarefas.forEach(tarefa => {
    console.log(`Descrição: ${tarefa.descricao}, Status: ${tarefa.statusRealizada}`);
  });
  }
  delete_tarefa(tarefaAserRemovida : Tarefa) {
  this.arrayDeTarefas.splice(this.arrayDeTarefas.indexOf(tarefaAserRemovida),1);
}
}

