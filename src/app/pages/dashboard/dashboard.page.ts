import { Component, OnInit } from '@angular/core';

interface ItemList {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,
})
export class DashboardPage implements OnInit {
  isAlertOpen = false;
  alertButtons = ['Fechar'];
  productHeader = 'Header';
  productMessage = 'Message';

  items: ItemList[] = [
    { id: 1, name: 'Cesla Hive', description: 'Gestão documental de empresas e colaboradores terceiros.' },
    { id: 2, name: 'Cesla Horus', description: 'APRs e permissões de trabalho eletrônicas.' },
    { id: 3, name: 'Cesla Loto', description: 'Notificar, bloquear e testar antes de liberar de forma totalmente eletronica.' },
    { id: 4, name: 'Cesla Inspect', description: 'Inspeções e Checklists customizáveis com cruzamento de risk assessment.' },
    { id: 5, name: 'Cesla Confine', description: 'Gestão de Espaços Confinados e Áreas Restritas.' },
    { id: 6, name: 'Cesla Report', description: 'Antecipação do risco de forma friendly.'},
    { id: 7, name: 'Cesla Integra', description: 'Integrações virtuais e diálogos de segurança.'},
    { id: 8, name: 'Cesla Training', description: 'Jornada de aprendizado e-learning, conectado com matriz de competencia.'},
    { id: 9, name: 'Cesla Manager', description: 'Gestão de projetos de engenharia.'},
    { id: 10, name: 'Cesla Response', description: 'Planos de atendimento a emergências'},
    { id: 11, name: 'Cesla Shield', description: 'Gestão de EPIs-EPCs conectados com almoxarifado.'}
  ];

  constructor() { }

  ngOnInit() {
  }

  setIsAlertOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  onClick(item: ItemList) {
    this.productHeader = `${item.name}`;
    this.productMessage = `${item.description}`;
    this.setIsAlertOpen(true)
  }

}
