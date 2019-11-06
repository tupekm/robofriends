import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';


class App extends Component {
    constructor(){
        super()
        this.state ={
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
        //this.setState({robots: name})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
        
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (this.state.robots.lenght === 0){
            return <h1>Loading</h1>
        }else{

            return (
                <div className= 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots}/>
                            </ErrorBoundry>
                    </Scroll>
                 </div>
                );
            }
    }
}
export default App;