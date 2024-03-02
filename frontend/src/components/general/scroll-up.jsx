import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

export default function ScrollUpButton() {
    const styles = {
        borderRadius: '5px', 
        padding: '5.5px',
        boxShadow: '0px 0px 10px rgb(0, 0, 0)',
    };

    return (
        <div>
            <ScrollToTop
                smooth
                top={300}
                style={styles}
            />
        </div>
    );
}
