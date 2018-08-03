import React from 'react';
import { LaPanel, LaPanelHeader, LaPanelBody } from '../src';

class Example extends React.Component {
    render() {
        return (<div>
            <LaPanel collapsible={false} className="example-panel">
                <LaPanelHeader>This panel has disabled collapsible</LaPanelHeader>
                <LaPanelBody>Panel body is expanded by default</LaPanelBody>
            </LaPanel>
            <LaPanel defaultExpanding={false} className="example-panel">
                <LaPanelHeader>This panel is collapsible</LaPanelHeader>
                <LaPanelBody>This body</LaPanelBody>
            </LaPanel>
        </div>);
    }
}

ReactDOM.render(<Example />, document.getElementById('example'));