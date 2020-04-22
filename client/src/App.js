import React, {Component} from 'react';
import AppNavbar from "./components/AppNavbar";
// import { Container } from 'reactstrap';
import './general.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Main from "./components/portfolio/main";

class App extends Component {

    render() {
        return (
            <div className="landing" >
                    <AppNavbar />


                    <div className="main container-fluid" style={{ marginTop: '10vh'}}>
                        <Main  />
                    </div>

                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            </div>
        );
    }
}

export default App;