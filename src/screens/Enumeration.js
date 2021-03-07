import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import EnumerationValuesGrid from '../components/EnumerationValuesGrid';
import WWActions from '../components/WWActions';
import { addValueToGroup } from '../state/actions/groupsActions';

export default function Enumeration() {
    const { groupId } = useParams()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [valueValue, setValueValue] = useState("")
    const groupsStore = useSelector(store => store.groupsReducer)

    const group = groupsStore.groups.find(g => g.id === groupId)
    const { name, values } = group;

    const dispatch = useDispatch()
    const addValueAction = () => {
        dispatch(addValueToGroup(group.id, valueValue))
        setDialogOpen(false)
        setValueValue("")
    }

    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h4" component="h1">
                    Enumeration: {name}
                </Typography>
                <WWActions handleAddAction={() => setDialogOpen(true)} />
                {group &&
                    <EnumerationValuesGrid group={group} />
                }
            </Container>
            {/* Prompt Dialog for add action */}
            <Dialog open={dialogOpen} onClose={() => setValueValue("")}>
                <DialogContent>
                    <DialogContentText>
                        Please specify a value
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="value"
                        label="Value"
                        type="text"
                        fullWidth
                        onChange={(e) => setValueValue(e.target.value)}
                        value={valueValue}
                    />
                    <DialogActions>
                        <Button onClick={() => { setDialogOpen(false); setValueValue("") }} variant="text" color="default">Cancel</Button>
                        <Button onClick={addValueAction} variant="contained" color="primary">Confirm</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>

        </div>
    )
}