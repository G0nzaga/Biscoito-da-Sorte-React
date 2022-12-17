import React, {Component} from "react";
import './Praticando.css'

class Praticando extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase:''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this)
        
        this.frases = [' "Nada é tão lamentável e nocivo como antecipar desgraças", Sêneca',
        ' "Exige muito de ti e espera pouco dos outros. Assim, evitarás muitos aborrecimentos", Confúcio',
        ' "Procure descobrir o seu caminho na vida. Ninguém é responsável por nosso destino, a não ser nós mesmos", Chico Xavier',
        ' "É preciso que o discípulo da sabedoria tenha o coração grande e corajoso. O fardo é pesado e a viagem longa", Confúcio',
        ' "O saber a gente aprende com os mestres e os livros. A sabedoria se aprende é com a vida e com os humildes", Cora Carolina']
    }

    quebraBiscoito(){
       let state = this.state;
       let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
       state.textoFrase = this.frases[numeroAleatorio];
       this.setState(state);
    }

    render(){
        return(
            <div className="container">

                <img src={require('../assets/biscoito.png')} alt="biscoito" className="img" />
                <Botão nome="Abrir Biscoito" açãoBtn={this.quebraBiscoito}></Botão>
                <h1 className="textofrase">{this.state.textoFrase}</h1>

            </div>
        )
    }
}

class Botão extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.açãoBtn}>{this.props.nome}</button>
            </div>
        )
    }
}



export default Praticando;