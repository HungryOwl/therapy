import React, { Component } from 'react';
import Item from './paginationItem'

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    renderItems(amount, activeNumber) {
        const { onClick } = this.props;

        return (
            Array(amount).fill('').map((item, i) => (
                <Item key={i} isActive={activeNumber === i} pageNumber={i} onClick={onClick}/>
            ))
        );
    }

    render() {
        const amount = this.props.amount;
        const activeNumber = this.props.activeNumber;

        return (
            <ul className='pagination'>
                {this.renderItems(amount, activeNumber)}
            </ul>
        );
    }
}

export default Pagination;
