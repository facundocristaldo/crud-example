import { Button, Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import React from 'react';

export default function WWActions(props) {
    return (
        <Container>
            <Button onClick={props.handleAddAction} startIcon={<AddIcon />} color="primary" variant="contained">Agregar</Button>
        </Container>
    )
}