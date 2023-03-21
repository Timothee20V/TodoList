import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import { purple } from '@mui/material/colors';


export default function DisplayModal(props){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState('');

    let color = props.props.isOnGoing ? '#065DC6' : '#C61B06';
    color = props.props.isDone ? '#187506' : color;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: color,
        border: '2px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const style1 = {
        padding: '30px 0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px'
    };

    const handleChangeTitle = (event) => {
        setValue(event.target.value);
        props.onValueChangeTitle(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setValue(event.target.value);
        props.onValueChangeDescription(event.target.value);
    }
    const handleChangeComment = (event) => {
        setValue(event.target.value);
        props.onValueChangeComment(event.target.value);
    }

    const ColorButton = styled(Button)(({theme}) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <div>
            <ColorButton onClick={handleOpen} sx={{color: 'white', opacity: 0.5, minWidth: 0, padding: 0}}><SettingsIcon/></ColorButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <Typography id="modal-modal-title" variant="h4" component="h2">
                        Modifier la tâche
                    </Typography>
                    <div style={style1}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Titre"
                            onChange={handleChangeTitle}
                            value={props.props.title}
                        />
                        <TextField
                            id="outlined-required"
                            label="Description"
                            onChange={handleChangeDescription}
                            value={props.props.description}
                        />
                    </div>
                    <TextField
                        id="outlined-required"
                        label="Commentaire"
                        onChange={handleChangeComment}
                        value={props.props.comment}
                        multiline
                        fullWidth
                    />
                    <div>
                        {(!props.props.isOnGoing && !props.props.isDeleted) &&
                            <div className='status'>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick1(props.props)}
                                    color="error"
                                >Terminer</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick3(props.props)}
                                >Commencer</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick2(props.props)}
                                >Supprimer</ColorButton>
                            </div>
                        }
                        {(!props.props.isDone && props.props.isOnGoing && !props.props.isDeleted) &&
                            <div className='status'>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick1(props.props)}
                                >Terminer</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick3(props.props)}
                                >Reporter</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick2(props.props)}
                                >Supprimer</ColorButton>
                            </div>
                        }
                        {(props.props.isDone && !props.props.isDeleted) &&
                            <div className='status'>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick1(props.props)}
                                >Annuler</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick3(props.props)}
                                >Refaire</ColorButton>
                                <ColorButton
                                    variant="outlined"
                                    onClick={() => props.onClick2(props.props)}
                                >Supprimer</ColorButton>
                            </div>
                        }
                        {(props.props.isDeleted) &&
                            <div>
                                <ColorButton variant="outlined" onClick={() => props.onClick4(props.props)}>Restaurer la tâche</ColorButton>
                            </div>
                        }
                    </div>
                </Box>
            </Modal>
        </div>
    )
}
