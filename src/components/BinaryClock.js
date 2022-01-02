import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function BinaryClock({ color, backgroundColor, size }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000 * 60);

        return () => clearInterval(intervalId);
    });

    const hour = currentTime.getHours().toString(2).split('');
    const minutes = currentTime.getMinutes().toString(2).split('');

    while (hour.length < 5) {
        hour.unshift(0);
    }

    while (minutes.length < 6) {
        minutes.unshift(0);
    }

    return (
        <div style={{ backgroundColor, color, display: 'inline-block', padding: 10 }}>
            <div>
                {hour.map((digit, index) => {
                    return (
                        <span key={index} style={{
                            height: size,
                            width: size,
                            marginRight: index < hour.length - 1 ? 4 : 0,
                            color,
                            backgroundColor: digit === '1' ? color : backgroundColor,
                            border: `solid 1px ${color}`,
                            display: 'inline-block'
                        }}></span>
                    );
                })}
            </div>
            <div>
                {minutes.map((digit, index) => {
                    return (
                        <span key={index} style={{
                            height: size,
                            width: size,
                            marginRight: index < minutes.length - 1 ? 4 : 0,
                            color,
                            backgroundColor: digit === '1' ? color : backgroundColor,
                            border: `solid 1px ${color}`,
                            display: 'inline-block'
                        }}></span>
                    );
                })}
            </div>
        </div>
    );
}

BinaryClock.prototype = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.number,
};

BinaryClock.defaultProps = {
    color: 'black',
    backgroundColor: 'white',
    size: 10,
}