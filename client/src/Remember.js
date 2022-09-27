import './App.css';
import React, { Component } from "react"

export default class Remember extends Component {
    render() {
        return(
            <div class="remember-me">
                <div class="remember-btn">
                    <input class="btn-remember-me" type="checkbox" id="exampleUniq" />
                 </div>
                <label class="rm-label" for="exampleUniq">Se souvenir de moi</label>
            </div>
        )
    }
}



