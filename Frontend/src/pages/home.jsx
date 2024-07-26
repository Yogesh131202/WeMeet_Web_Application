import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import server from '../environment';
import { lightBlue } from '@mui/material/colors';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <div className='home'>

            <div className="navBar">

                <div style={{ display: "flex", alignItems: "center" }}>

                    <h2>WeMeet</h2>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                   <Button startIcon={<RestoreIcon /> } onClick={() => {navigate("/history")}}>
                      History
                   </Button>
                    
                    <Button onClick={() => {
                        localStorage.removeItem("token")
                        navigate("/auth")
                    }}>
                        Logout
                    </Button>
                </div>


            </div>


            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2>Providing Quality Video Call Just Like Quality Education</h2>

                        <div style={{ display: 'flex', gap: "10px" }}>

                            <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
                            <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

                        </div>
                    </div>
                </div>
                <div className='rightPanel'>
                    <img srcSet='/logo3.png' alt="" />
                </div>
            </div>
        </div>
    )
}


export default withAuth(HomeComponent)




















// import React, { useState } from 'react'
// import withAuth from '../utils/withAuth'
// import { useNavigate } from 'react-router-dom'

// let navigate = useNavigate();
// const [meetingCode, setMeetingCode] = useState("");
// let handleJoinVideoCall = async ()=>{
//     navigate(`/${meetingCode}`);
// }

// function HomeComponent() {
//   return (
//     <div>HomeComponent</div>
//   )
// }


// export default withAuth(HomeComponent)