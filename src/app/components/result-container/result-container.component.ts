import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.css'],
})
export class ResultContainerComponent implements OnInit {
  @Input()
  answerSelected: string = '';

  constructor() {}

  ngOnInit(): void {}
}
