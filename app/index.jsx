// Libs
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import App                              from './components/App.jsx';
import {ThemeProvider}                  from 'styled-components';
import {ThemeContext, theme}            from './theme-context';

// Styles
import './global-styles.js';

/**
 * RenderDOM connects the root JSX logic (App.jsx) to the root HTML id, and
 * imports render
 * @param  {[JSX File]} <App/> Root of the application
 */

ReactDOM.render((
    <ThemeContext.Provider value={theme}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </ThemeContext.Provider>
), document.getElementById('app'));
