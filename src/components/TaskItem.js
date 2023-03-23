import React from 'react';
import 'reactjs-popup/dist/index.css';
import DisplayModal from './DisplayModal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


function TaskItem(props) {
    const task = props.task;
    let color = task.isOnGoing ? '#065DC6' : '#C61B06';
    color = task.isDone ? '#187506' : color;

    const card = (
        <React.Fragment>
            <div style={{width: '100%'}}>
                <div className='modif'>
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
                <div className='center'>
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{textAlign: "center"}}>
                            {task.title}
                        </Typography>
                        <Typography sx={{mb: 1.5, textAlign: "center"}} color="text.secondary">
                            {task.description}
                        </Typography>
                        <Typography sx={{fontSize: 14, textAlign: "center"}} color="text.secondary" gutterBottom>
                            {task.comment}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {(!task.isOnGoing && !task.isDeleted) &&
                            <div className='status'>
                                <Button variant="outlined" onClick={() => props.onClick3(task)}>Commencer</Button>
                            </div>
                        }
                        {(!task.isDone && task.isOnGoing && !task.isDeleted) &&
                            <div className='status'>
                                <Button variant="outlined" onClick={() => props.onClick1(task)}>Terminer</Button>
                            </div>
                        }
                        {(task.isDone && !task.isDeleted) &&
                            <div className='status'>
                                <Button variant="outlined" onClick={() => props.onClick2(task)}>Supprimer</Button>
                            </div>
                        }
                        {(task.isDeleted) &&
                            <div>
                                <Button variant="outlined" onClick={() => props.onClick4(task)}>Restaurer la tâche</Button>
                                <Button variant="outlined" onClick={() => props.onClick4(task)}>Restaurer la tâche</Button>
                            </div>
                        }
                    </CardActions>
                </div>
            </div>
        </React.Fragment>
    );

    return (
        <Box sx={{minWidth: 275}}>
            <Card sx={{backgroundColor: color, borderRadius: 3}} className='card'>{card}</Card>
        </Box>

    );
}

export default TaskItem;