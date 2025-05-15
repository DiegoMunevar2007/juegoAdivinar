import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formNumero',
  templateUrl: './formNumero.component.html',
  styleUrls: ['./formNumero.component.css'],
  imports: [ReactiveFormsModule]
})
export class FormNumeroComponent implements OnInit {

  formNumero!: FormGroup;
  @Output() numeroSeleccionado: EventEmitter<number> = new EventEmitter<number>();
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.formNumero = this.formBuilder.group({
      numero: [null, Validators.required]
    });
  }
  enviar(){
    if (this.formNumero.valid) {
      console.log(this.formNumero.value);
      const numero:number = this.formNumero.get("numero")?.value;
      this.numeroSeleccionado.emit(numero);
    }
  }

}
