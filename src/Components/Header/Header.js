import React from "react"
import "./header.css"

class Header extends React.Component{
    monAction = (destination) => {
        console.log(`Redirection vers ${destination}`);
    }

    currentPage = "Home";

    render(){
        let pageContent;
        if (this.currentPage == "Features") {
            pageContent = (<div>
                <p>Voici la page Features</p>
            </div>)
        }
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a onClick={() => this.monAction(`Home`)} class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a onClick={() => this.monAction(`Features`)} class="nav-item nav-link" href="#">Features</a>
                        <a onClick={() => this.monAction(`Pricing`)} class="nav-item nav-link" href="#">Pricing</a>
                        <a class="nav-item nav-link disabled" href="#">Disabled</a>
                        <button class="btn btn-dark" onClick={this.monAction}>Click</button>
                    </div>
                </div>
                {this.currentPage}
                {pageContent}
            </nav>
        );
    }
}

export default Header