import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function Widgets() {

    const newArtical = (heading, subtitle) => (
        <div className="widget__artical">
            <div className="widget__articalLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget__articalRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widget">
            <div className="widget__header">
                <h2>linkedIn New</h2>
                <InfoIcon />
            </div>
            {newArtical("Styling in ReactJS", "Reads 121")}
            {newArtical("React Native", "Reads 121")}
            {newArtical("NodeJS", "Reads 89")}
        </div>
    )
}
