import React , {Component} from 'react';

import './index.css';

class TicketView extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <React.Fragment>
                <h4>Your Selected Tickets:</h4>
                <div className='tickets'>
                    {
                        this.props.tickets.map((ticket, i) => (
                            <div className='ticket' key={i}>
                                <span
                                    className='dlt-ticket'
                                    onClick={() => this.props.onDeleteTicket(i)}
                                >
                                    X
                                </span>
                                <div className='ticket-header'>Ticket #{i+1}</div>
                                <div className='ticket-number'>
                                    {
                                        ticket.toString().split('')
                                        .map((n, j) => <span key={j} className='number'>{n}</span>)
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default TicketView;