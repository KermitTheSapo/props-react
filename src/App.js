import React, {Component} from "react"
import Header from "./components/header/header.js"

export default class Pros extends Component {
  render(){
    return(
      <header>
        <Header paragrafo="Isto é um props" nome= "Meu nome é Robert" idade="Tenho 18 anos" estudando="estudando props"/>
      </header>
    )
  }
}