import React from "react";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Modal from '@mui/joy/Modal';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/joy/IconButton';
import {FormControl, ModalClose, ModalDialog, Textarea} from "@mui/joy";
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';

export default function DisplayModal(props){

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [setValue] = React.useState('');

    let color = props.props.isOnGoing ? '#065DC6' : '#C61B06';
    color = props.props.isDone ? '#187506' : color;

    const style = {
        background: color,
        borderColor: 'black',
    };

    const style1 = {
        padding: '30px 0px',
        display: 'flex',
        flexDirection: 'row',
        gap: '30px'
    };

    const buttons = {
        backgroundColor: 'transparent',
        borderColor: 'rgba(0, 0, 0, 0.5)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderColor: 'rgba(0, 0, 0, 0.8)',
        }
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

    return (
        <div>
            <IconButton
                onClick={handleOpen}
                sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)'
                    }
            }}>
                <SettingsIcon/></IconButton>
            <Modal
                open={open}
                onClose={handleClose}>
                <ModalDialog sx={style}>
                    <ModalClose sx={{
                        color: 'rgba(0, 0, 0, 0.7)',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.2)'
                        }
                    }}/>
                    <Typography level="h3">Modifier la tâche</Typography>
                    <div style={style1}>
                        <FormControl>
                            <FormLabel>Titre</FormLabel>
                            <Input
                                value={props.props.title}
                                onChange={handleChangeTitle}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input
                                onChange={handleChangeDescription}
                                value={props.props.description}
                            />
                        </FormControl>
                    </div>
                    <FormControl>
                        <FormLabel>Commentaire</FormLabel>
                        <Textarea
                            value={props.props.comment}
                            onChange={handleChangeComment}
                            multiline
                            fullWidth
                            minRows={2}
                            maxRows={4}
                        />
                    </FormControl>
                    <div className="displayButton">
                        {(!props.props.isOnGoing && !props.props.isDeleted && !props.props.isDone) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick1(props)}
                                    sx={buttons}
                                >Terminer</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick3(props)}
                                    sx={buttons}
                                >Commencer</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick2(props)}
                                    sx={buttons}
                                >Supprimer</Button>
                            </div>
                        }
                        {(!props.props.isDone && props.props.isOnGoing && !props.props.isDeleted) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick1(props)}
                                    sx={buttons}
                                >Terminer</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick3(props)}
                                    sx={buttons}
                                >Reporter</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick2(props)}
                                    sx={buttons}
                                >Supprimer</Button>
                            </div>
                        }
                        {(props.props.isDone && !props.props.isDeleted) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick1(props)}
                                    sx={buttons}
                                >Annuler</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick3(props)}
                                    sx={buttons}
                                >Reprendre</Button>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick2(props)}
                                    sx={buttons}
                                >Supprimer</Button>
                            </div>
                        }
                        {(props.props.isDeleted) &&
                            <div className='status'>
                                <Button
                                    color="neutral"
                                    variant="outlined"
                                    onClick={() => props.onClick4(props)}
                                    sx={buttons}
                                >Restaurer la tâche</Button>
                            </div>
                        }
                    </div>
                </ModalDialog>
            </Modal>
        </div>
    )
}
