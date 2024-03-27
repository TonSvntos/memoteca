import { Component } from '@angular/core';
import { Pensamento } from '../IPensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent {

  pensamento: Pensamento = {
    id: "",
    conteudo:"",
    autoria: "",
    modelo:"",
    favorito: false
  }



  constructor(private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute){}

  excluirPensamento(){

    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(() =>{
        this.router.navigate(['/listarPensamento'])
      })
    }

  }


  cancelar(){
    this.router.navigate(['/listarPensamento'])

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
        this.pensamento = pensamento
    })
}
}