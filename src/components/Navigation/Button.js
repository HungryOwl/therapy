import React from 'react';
import cn from 'classnames';

const Button = (props) => {
    const btnClasses = cn({
        'btn': true,
        [`${props.parentClass}__btn`]: props.parentClass,
        [`btn--${props.btnType}`]: props.btnType
    });

    return <button className={btnClasses} onClick={props.onClick}>{props.text && props.text}</button>;
};

export default Button;
