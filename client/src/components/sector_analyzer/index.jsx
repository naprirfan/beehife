import React, { Component } from 'react';
import callApi from "../../service/Api";
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

class SectorAnalyzer extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        callApi('/api/fetchStockData')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        if (!this.state.data.length) return <CircularProgress />;

        return (
            <>
                <Typography variant="h2" gutterBottom>
                    Sector analyzer
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Finance - Bank
                </Typography>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Rank</TableCell>
                                <TableCell>Stock code</TableCell>
                                <TableCell align="right">ROA</TableCell>
                                <TableCell align="right">Other indicator</TableCell>
                                <TableCell align="right">Fix this</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {index}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell align="right">{row.mass}</TableCell>
                                    <TableCell align="right">{row.birth_year}</TableCell>
                                    <TableCell align="right">{row.eye_color}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default SectorAnalyzer;