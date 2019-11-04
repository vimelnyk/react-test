import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';

// const template = <p>Hello from react</p>;

// ReactDOM.render(template, document.getElementById('root'));

const title = React.createElement('h1', {}, 'My First React Code');
class Header extends React.Component {
    render() {
        return (
            <>                
                {title}
            </>
        ) ;
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
);