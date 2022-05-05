import { Box } from "@mui/material";
import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import '../style/PostForm.css';
import axios from "axios";

class SearchForm extends React.Component {

    handleSubmit = async (event) => {
        
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        if (!data.get("text")) return
        let m = {
            userid: this.props.userData.id, 
            text: data.get("text"), 
        }
        if (data.get("checkbox")) {
            m.type = 1
        }
        else {
            m.type = 2
        }

        const str = 'http://localhost:4000/api/post/search/'
        const res = await axios.post(str, m, {withCredentials: true})
        console.log(res.data)
        this.props.setMsgList(res.data)
    }

    render() {
        return (
            <Box component="form" noValidate onSubmit={this.handleSubmit} className="PostFormContainer">
                <TextField id="text" name="text" label="Search" multiline rows={1} defaultValue="" fullWidth />
                <div className="PostFormHeaderContainer">
                    <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}> Search </Button>
                    <FormControlLabel
                            id="checkbox"
                            name="checkbox"
                            control={<Checkbox value="remember" color="primary" />}
                            label="Only followers & followed"
                        />
                </div>
            </Box>
        )
    }
}

export default SearchForm;