import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  teste: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  sendForm(e: any): void {
    e.preventDefault();
    alert(`submitted value: ${e.target[0].value}!`)
  }

}
