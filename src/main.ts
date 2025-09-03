// Importa a função responsável por iniciar a aplicação Angular no navegado
import { bootstrapApplication } from '@angular/platform-browser';

// Importa o componente raiz da aplicação (AppComponent)
// que geralmente é o ponto de partida da interface
import { AppComponent } from './app/app';


// Inicia a aplicação usando o componente raiz
bootstrapApplication(AppComponent)

  // Caso ocorra algum erro no processo de inicialização, ele é capturado e exibido no console
  .catch((err) => console.error(err));

  //FLUXO DE INICIALIZAÇÃO
  /*
  index.html
  ↓ (tem a plaquinha)
  <app-root></app-root>
  ↓ (substituído por)
  AppComponent (chefe) → "Meu nome é app-root, meu desenho é em app.component.html"
  ↓
  app.component.html (o desenho)
  ↓ (é mostrado na tela)
  <h1>Olá, mundo!</h1>
  <p>Vamos brincar de Angular!</p>//
  */
