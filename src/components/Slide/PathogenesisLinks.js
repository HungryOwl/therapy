import React, { Component } from 'react';
import ChainLink from "../ChainLink/ChainLink";

class PathogenesisLinks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return [
            <h3 className='slide__title'>Звенья патогенеза СД2</h3>,
            <ChainLink layout='column-reverse' align='start' contentLayout='column' contentAlign='center' text='Мышцы' index={2} modificator='musle'/>,
            <ChainLink layout='column-reverse' align='end' contentLayout='column' contentAlign='center' text='Печень' index={3} modificator='liver'/>,
            <ChainLink layout='column-reverse' align='end' contentLayout='column' contentAlign='center' text='β-клетки' index={3} modificator={null} symbol='β'/>
        ];
    }
}

export default PathogenesisLinks;
