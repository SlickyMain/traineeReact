import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalWindow(props) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        props.setModalToOpen(false)
    } 

    useEffect(() => {
        if (props.modalIsOpen) {
            setOpen(true)
        }
    }, [props.modalIsOpen])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Вы не авторизованы
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Пожалуйста, авторизуйтесь, чтобы получить доступ ко всем функциям
                    </Typography>
                    <div className="row mt-4">
                        <div className="col-9 d-flex justify-content-end align-items-center">
                            <button onClick={handleClose} className="replyButton">
                                Закрыть
                            </button>
                        </div>
                        <div className="col-3 d-flex align-items-center">
                            <button className="beautyIcons">
                                <NavLink to="/login">
                                    Логин
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}