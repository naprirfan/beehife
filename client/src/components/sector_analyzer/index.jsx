import React, { Component } from 'react';
import callApi from "../../service/Api";

class SectorAnalyzer extends Component {
    state = {
        data: {},
    };

    componentDidMount() {
        callApi('/api/fetchStockData')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <>
                <h2>Sector Analyzer</h2>
                <pre>
                    { JSON.stringify(this.state.data, null, 2) }
                </pre>
            </>
        )
    }
}

export default SectorAnalyzer;