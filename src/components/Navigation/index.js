import React from 'react';
import Countdown from './Countdown';
import Button from './Button';
import Timer from './Timer';
import Modal from '../Modal/Modal'

class Navigation extends Countdown {
    constructor(props) {
        super(props, props.minutes);
    }

    componentDidMount() {
        this.start();
    }

    componentWillUnmount() {
        this.pause();
    }

    get actionName() {
        return (this.isTicking) ? 'pause' : 'play';
    }

    renderNavBtn(btnArr) {
        return (
            btnArr.map((btn, i) => (
                <Button parentClass='navigation' btnType={btn.type} onClick={btn.onclick} text={btn.text} key={i}/>
            ))
        );
    }

    render() {
        const btnTypes = [
            {type: 'video'},
            {type: 'close'},
            {type: 'accept'},
            {type: this.actionName, onclick: this.toggle.bind(this)},
            {type: 'ellipsis', text: '∙∙∙'}];

        return [
            <Modal isActive={this.isTimeOver}/>,

            <section className='navigation'>
                <div className='navigation__column w-half flex-align-center'>
                    {this.renderNavBtn(btnTypes)}
                </div>

                <div className='navigation__column w-half flex-jalign-end flex-align-end'>
                    <Timer text={this.timerValue}/>
                </div>
            </section>
        ];
    }
}

export default Navigation;
