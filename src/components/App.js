import React from 'react';

import styles from '../styles/app.scss';
import ImageSearch from './ImageSearch';

const App = () => {
    return (
            <div className={`App ${styles.app}`}>
                <ImageSearch />
            </div>
    );
};

export default App;
