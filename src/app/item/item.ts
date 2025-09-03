// item.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-item', // o HTML vai usar <app-item>
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.html',
  styleUrls: ['./item.css']
})
export class ItemComponent {
 emEdicao = false;
 @Input() tarefa: Tarefa = new Tarefa("", false);
 @Output() removeTarefa = new EventEmitter();
}
