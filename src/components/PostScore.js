import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardSharp from '@mui/icons-material/ArrowUpwardSharp';
import ArrowDownwardSharp from '@mui/icons-material/ArrowDownwardSharp';
import { CssBaseline } from '@mui/material';
import { Box } from '@mui/material';

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

class PostScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: props.score
        }
    }

    render() {
        return (
            <Box className='ScoreContainer'>
                <Box className = 'Score'>
                    <CssBaseline />
                    <IconButton>
                        <ArrowUpwardSharp />
                    </IconButton>
                    {kFormatter(this.state.score)}
                    <IconButton>
                        <ArrowDownwardSharp />
                    </IconButton>
                </Box>
            </Box>
        );
    }
}

export default PostScore;