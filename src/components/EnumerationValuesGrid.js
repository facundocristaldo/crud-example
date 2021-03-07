import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeValueFromGroup, updateValueFromGroup } from '../state/actions/groupsActions';

export default function EnumerationValuesGrid({ group }) {

    const [modifiedValue, setModifiedValue] = useState({ id: "", value: "" });
    const [dialogOpen, setDialogOpen] = useState(false)


    const dispatch = useDispatch()


    const handleDelete = (value) => {
        dispatch(removeValueFromGroup(group.id, value.id))
    }
    const handleEdit = (value) => {
        setModifiedValue({ id: value.id, value: value.value })
        setDialogOpen(true)

    }
    const modifyValueAction = () => {
        dispatch(updateValueFromGroup(group.id, modifiedValue.id, modifiedValue.value))
        setDialogOpen(false)
        setModifiedValue({ id: "", value: "" })
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {/* <th scope="column">Update</th> */}
                        <th scope="column">Delete</th>
                        {/* <th scope="column">Id</th> */}
                        <th scope="column">Value</th>
                    </tr>
                </thead>
                <tbody>

                    {group.values.map(value =>
                        <GridRow
                            key={value.id}
                            value={value}
                            handleDelete={() => handleDelete(value)}
                            handleEdit={() => handleEdit(value)}
                        />)}
                </tbody>
            </table>
            <Dialog open={dialogOpen} onClose={() => setModifiedValue({ id: "", value: "" })}>
                <DialogContent>
                    <DialogContentText>
                        Modify the value
            </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="value"
                        label="Value"
                        type="text"
                        fullWidth
                        onChange={(e) => setModifiedValue({ ...modifiedValue, value: e.target.value })}
                        value={modifiedValue.value}
                    />
                    <DialogActions>
                        <Button onClick={() => { setDialogOpen(false); setModifiedValue({ id: "", value: "" }) }} variant="text" color="default">Cancel</Button>
                        <Button onClick={modifyValueAction} variant="contained" color="primary">Confirm</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
function GridRow({ value, handleEdit, handleDelete }) {
    return (
        <tr>
            <td><Button onClick={handleEdit}><Edit /></Button></td>
            <td><Button onClick={handleDelete}><Delete /></Button></td>
            {/* <td>{group.id}</td> */}
            <td>{value.value}</td>
        </tr>
    )
}