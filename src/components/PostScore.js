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

    render() {
        return (
            <Box className='ScoreContainer'> 
                <Box className = 'Score'>
                    <CssBaseline />
                    <IconButton onClick={this.props.upvote}>
                        {this.props.ud === 1 && <ArrowUpwardSharp color='primary' />}
                        {this.props.ud !== 1 && <ArrowUpwardSharp />}
                    </IconButton>
                    {kFormatter(Number(this.props.score))}
                    <IconButton onClick={this.props.downvote}>
                        {this.props.ud === 2 && <ArrowDownwardSharp color='primary' />}
                        {this.props.ud !== 2  && <ArrowDownwardSharp />}
                    </IconButton>
                </Box>
            </Box>
        );
    }
}

export default PostScore;