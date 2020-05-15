import React, {Component} from 'react';

class HobbyList extends Component{
	render() {
	  const liStyle = {fontSize: '1.5em'};
	  const hobbies = ['Sleeping','Eating','Cuddling'];
	  return (
		<ul>
			  {hobbies.map((h,i) => {
				return <li key={i} style={liStyle}>{h}</li>
			  })}
		</ul>
	  );
	}
}
export default HobbyList;