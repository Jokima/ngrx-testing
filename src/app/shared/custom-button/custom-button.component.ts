import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<any>();

  @Input() label!: string;
  @Input() icon!: string;

  @Input() width!: string;
  @Input() height!: string;

  @Input() color!: string;
  @Input() backgroundColor!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.width = this.width ? this.width : '100%';
    this.height = this.label ? '50px' : '35px';
    this.color = this.color || 'var(--fundo-elemento)';
    this.backgroundColor = this.backgroundColor || 'var(--primary)';

    if (!this.label) {
      this.backgroundColor = 'transparent';
      this.color = 'var(--fonte-normal)';
    }
  }

}
