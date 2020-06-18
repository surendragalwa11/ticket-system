import React , {Component} from 'react';

import './index.css';

import logo from '../../logo.svg'

class Spinner extends Component{
    constructor(props){
        super(props);
        this.state = {
            spin: false,
        };
    }

    onSpin = () => {
        this.setState({spin: true});
        setTimeout(() => {
            this.setState({spin: false});
            this.props.onSpin();
        }, 3000)
    }

    render(){
        return(
            <div className='spinner h100'>
                <span className='spinner-header'>
                    Click on the wheel to generate random tickets
                </span>
                <img
                    src={logo}
                    className={this.state.spin ? 'logo App-logo' : 'logo'}
                    alt='spinner'
                    onClick={this.onSpin}
                />
                <span className='spinner-footer'>
                    Ticket number range: 100000-999999
                </span>
            </div>
        );
    }
}

export default Spinner;