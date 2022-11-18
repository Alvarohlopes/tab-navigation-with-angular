import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-page',
  templateUrl: './fourth-page.component.html',
  styleUrls: ['./fourth-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FourthPageComponent implements OnInit {

  teste: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
