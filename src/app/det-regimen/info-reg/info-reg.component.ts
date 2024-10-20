import { Component } from '@angular/core';
import { Usuario } from '../../shared/models/usuario.model';

@Component({
  selector: 'app-info-reg',
  templateUrl: './info-reg.component.html',
  styleUrl: './info-reg.component.css'
})
export class InfoRegComponent {

  userTO?: Usuario;
  ngOnInit(): void {
    this.userTO = history.state.data;
    console.log("Inicia info-reg");
    console.log(this.userTO);
  }

}
