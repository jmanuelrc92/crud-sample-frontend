import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {
  id: number;
  comentario: any;

  constructor(private aRoute: ActivatedRoute, private _comentarioService: ComentarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getComentario();
  }

  getComentario() {
    this._comentarioService.getComentario(this.id).subscribe(data => {
      this.comentario = data;
    }, error => {
      console.log(error);
    });
  }
}
