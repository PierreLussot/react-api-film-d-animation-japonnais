import React, {Component} from "react";

export class DetailFilm extends Component{
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}