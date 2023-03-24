import React from 'react';
import 'reactjs-popup/dist/index.css';
import DisplayModal from './DisplayModal';
import Card from '@mui/material/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from "@mui/joy/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/joy/Button";


function TaskItem(props) {
    const task = props.task;
    let color = task.isOnGoing ? '#065DC6' : '#C61B06';
    color = task.isDone ? '#187506' : color;

    const buttons = {
        backgroundColor: 'transparent',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
        }
    };

    const card = (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <div style={{position:"relative", textAlign:"right", zIndex:1}}>
                    <DisplayModal
                        props={task}
                        onValueChangeTitle={props.onValueChangeTitle}
                        onValueChangeDescription={props.onValueChangeDescription}
                        onValueChangeComment={props.onValueChangeComment}
                        onClick1={() => props.onClick1(task)}
                        onClick2={() => props.onClick2(task)}
                        onClick3={() => props.onClick3(task)}
                        onClick4={() => props.onClick4(task)}
                    />
                </div>
                <div >
                    <CardContent className='center' style={{position:"relative", bottom:"1.5rem", zIndex:0, display:"flex", flexDirection:"column", gap:20}}>
                        <Typography level="h3" sx={{width:"100%", textAlign:"center", paddingBottom:1, borderBottom:"solid 2px rgba(0, 0, 0, 0.5)"}}>{task.title}</Typography>
                        <Typography level="h6">{task.description}</Typography>
                        <Typography level="body1">{task.comment}</Typography>
                    </CardContent>
                    <CardContent className='center'>
                        {(!task.isOnGoing && !task.isDeleted && !task.isDone) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    sx={buttons}
                                    variant="outlined"
                                    onClick={() => props.onClick3(task)
                                }>Commencer</Button>
                            </div>
                        }
                        {(!task.isDone && task.isOnGoing && !task.isDeleted) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    sx={buttons}
                                    variant="outlined"
                                    onClick={() => props.onClick1(task)
                                }>Terminer</Button>
                            </div>
                        }
                        {(task.isDone && !task.isDeleted) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    sx={buttons}
                                    variant="outlined"
                                    onClick={() => props.onClick2(task)
                                }>Supprimer</Button>
                            </div>
                        }
                        {(task.isDeleted) &&
                            <div>
                                <Button
                                    color="neutral"
                                    sx={buttons}
                                    variant="outlined"
                                    onClick={() => props.onClick4(task)
                                }>Restaurer la tâche</Button>
                            </div>
                        }
                    </CardContent>
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <Box sx={{minWidth: 275}}>
            <Card
                sx={{backgroundColor: color, borderRadius: 3}}
                orientation="horizontal"
                className='card'
            >{card}</Card>
        </Box>

    );
}

export default TaskItem;