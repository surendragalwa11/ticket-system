import React , {Component} from 'react';
import './index.css';

import NumberPanel from '../../components/NumberPanel';
import Spinner from '../../components/Spinner';
import TicketView from '../../components/TicketView';

class TicketEntryPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            tickets: [
                // 123456, 121233,
                // 123455, 121253,
                // 123455, 121293,
                // 123223, 121283,
            ],
            currentNumber: null,
        };
    }

    onAddNumber = (number) => {
        number = String(number);
        let {currentNumber} = this.state;
        currentNumber = currentNumber ? currentNumber + number : number;

        this.setState({currentNumber})
    }

    onDeleteLastDigit = () => {
        let {currentNumber} = this.state;
        currentNumber = currentNumber ? currentNumber.slice(0, -1) : null;
        this.setState({currentNumber})
    }

    onClearNumbers = () => {
        this.setState({currentNumber: null})
    }

    onAddTicket = () => {
        // check if number is b/w 100000-999999
        const {currentNumber} = this.state;
        if(currentNumber !== null) {
            const number = Number(currentNumber);
            if(100000 <= number && number <= 999999) {
                let {tickets} = this.state;
                tickets = [
                    ...tickets,
                    number
                ];
                this.setState({tickets, currentNumber: null})
            } else {
                this.setState({currentNumber: null})
            }
        }
    }

    onDeleteTicket = (ticketIndex) => {
        const {tickets} = this.state;
        const newTickets = tickets.filter((t, i) => i !== ticketIndex);
        this.setState({tickets: newTickets})
    }

    onGenerateRandomTicket = () => {
        const ticket = this.randomTicket(100000, 999999);
        const tickets = [
            ...this.state.tickets,
            ticket,
        ];
        this.setState({tickets, currentNumber: null})
    }

    randomTicket = (min, max) => {
        const minNum = Math.ceil(min);
        const maxNum = Math.floor(max);
        return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    }

    render(){
        return(
            <div className='page-container ticket-entry-page h100'>
                <div className='create-ticket-section h100'>
                    <div className='number-panel-container'>
                        <NumberPanel
                            currentNumber={this.state.currentNumber}
                            onAddNumber={this.onAddNumber}
                            onDeleteLastDigit={this.onDeleteLastDigit}
                            onClearNumbers={this.onClearNumbers}
                            onAddTicket={this.onAddTicket}
                        />
                    </div>
                    <div className='spinner-section'>
                        <Spinner
                            onSpin={this.onGenerateRandomTicket}
                        />
                    </div>
                </div>
                <div className='view-ticket-container h100'>
                    <TicketView
                        tickets={this.state.tickets}
                        onDeleteTicket={this.onDeleteTicket}
                    />
                </div>
                
            </div>
        );
    }
}

export default TicketEntryPage;