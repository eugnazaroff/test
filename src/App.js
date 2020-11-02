import './App.css';
import React, {Component} from "react";
import {CardList} from './components/card-list/card-list'
import {SearchBox} from './components/search-box/search-box'

class App extends Component {

    constructor(props) {
        super(props);
        //Init state
        this.state = {
            monsters: [],
            searchField: ""
        }
    }

    /*
    Fetching data from fake API in the lifecycle method componentDidMount
    Notice that this method is async so we can use await in the fetch method
    Fetch method returns a resolved promise with a full response
    Next we again await for .json() method that returns another promise with a body
     */

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        this.setState({monsters: users})
    }

    render() {
        const {monsters, searchField} = this.state
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div className='App'>
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder=" search me"
                    handleChange={e =>
                        this.setState({searchField: e.target.value})
                    }
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        )
    }
}

export default App;
