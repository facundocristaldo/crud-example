import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import EnumerationsGrid from '../components/EnumerationsGrid';
import WWActions from '../components/WWActions';
import { addGroup } from '../state/actions/groupsActions';

export default function WWEnumerations() {

    const dispatch = useDispatch()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [groupName, setGroupName] = useState("")

    const addGroupAction = () => {
        dispatch(addGroup(groupName))
        setDialogOpen(false)
        setGroupName("")
    }
    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h4" component="h1">
                    Enumerations
                </Typography>
                <WWActions handleAddAction={() => setDialogOpen(true)} />
                <EnumerationsGrid />
            </Container>
            {/* Prompt Dialog for add action */}
            <Dialog open={dialogOpen} onClose={() => setGroupName("")}>
                <DialogContent>
                    <DialogContentText>
                        Please specify a name
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={(e) => setGroupName(e.target.value)}
                        value={groupName}
                    />
                    <DialogActions>
                        <Button onClick={() => { setDialogOpen(false); setGroupName("") }} variant="text" color="default">Cancel</Button>
                        <Button onClick={addGroupAction} variant="contained" color="primary">Confirm</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}