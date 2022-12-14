import React from 'react';
import { Modal, TextareaAutosize, TextField } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useSelector } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyle from './styles';

export default function CreatePostModal() {
    const { isShow }= useSelector(modalState$);
    const classes = useStyle();

    const body = (
        <div className={classes.paper} id='simple-modal-title'>
            <h2>Create New Post</h2>
            <form noValidate autoComplete='off' className={classes.form}>
                <TextField 
                    className={classes.title}
                    required
                    label='Title'
                    value=""
                />
                <TextareaAutosize
                    className={classes.textarea}
                    rowsMin={10}
                    rowsMax={15}
                    placeholder='Content...'
                    value=""
                />
                 <FileBase64
                    accept="image/*"
                    multiple={false}
                    type='file'
                />
                <div className={classes.footer}>
                    <Button 
                        varial='contained' 
                        color='primary' 
                        component='span' 
                        fullwidth
                    >
                        Create 
                    </Button>
                </div>
            </form>
        </div>
    )
    return (
        <div>
            <Modal open={isShow} onClose={{}}>
                {body}
            </Modal>
        </div>
    )
}
