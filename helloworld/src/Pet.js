import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component {
	render() {
		return (
			<div className="card">
				<h2 className="name">Moxie</h2>
				<img src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12221822/why-get-a-dog-hero.jpg" alt="Moxie dog" />
				<h5 style={{fontSize: '2em',margin: '2px'}}>Hobbies: </h5>
				<HobbyList />
			</div>
		)
	}
}

export default Pet;