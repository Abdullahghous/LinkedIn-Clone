import React from 'react';
import './HeaderOption.css';
import Avatar from 'react-avatar';

function HeaderOption({ Icon, title, avatar, onClick }) {
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon" size="25" src={avatar} round={true} />
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
