import React, {Component} from "react";
import * as S from "../style/style.js";
import image from "../imgs/imagem.jpg"

export default class Header extends Component {
    render(){
        return(
            <S.Div>
                <S.GlobalStyle/>
                <S.Titulo>Estou fazendo um Prop</S.Titulo>
                <p>{this.props.paragrafo}</p>
                <img src={image} alt="" />
                <ul>
                    <li>{this.props.nome}</li>
                    <li>{this.props.idade}</li>
                    <li>{this.props.estudando}</li>
                </ul>
            </S.Div>
        )
    }
}