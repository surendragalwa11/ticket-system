import React , {Component} from 'react';

import './index.css';

class NumberPanel extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className='number-panel h100'>
                <div className='preview-section'>
                    {
                        this.props.currentNumber ?
                        <span>{this.props.currentNumber}</span>
                        :
                        <span className='no-number-text'>Enter 6 digits</span>
                    }
                </div>
                <div className='number-section'>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(7)}>7</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(8)}>8</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(9)}>9</div>  
                    <div className="grid-item" onClick={() => this.props.onAddNumber(4)}>4</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(5)}>5</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(6)}>6</div>  
                    <div className="grid-item" onClick={() => this.props.onAddNumber(1)}>1</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(2)}>2</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(3)}>3</div>
                    <div className="grid-item" onClick={this.props.onDeleteLastDigit}>X</div>
                    <div className="grid-item" onClick={() => this.props.onAddNumber(0)}>0</div>
                    <div className="grid-item" onClick={this.props.onClearNumbers}>C</div>  
                </div>
                <div
                    className='footer'
                    onClick={this.props.onAddTicket}
                >
                    Add Ticket
                </div>
            </div>
        );
    }
}

export default NumberPanel;