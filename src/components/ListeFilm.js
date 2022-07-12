import React, {Component} from "react";
import Connecteur from "../connecteur/Connecteur";
import Tile from "./Tile";

export class ListeFilm extends Component{
    state = {
        films: []
    }

    async componentDidMount() {
        const response = await Connecteur.get("/films", {});
        console.log(response.data)
        this.setState({films : response.data});
    }

    render() {
        return (
            <div className="container">
                {this.state.films.map(film => (
                    <Tile film={film} key={film.id}/>
                ))}
            </div>
        );
    }
}