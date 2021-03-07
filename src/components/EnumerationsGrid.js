import { Button } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeGroup } from '../state/actions/groupsActions';

export default function WWEnumerations() {
    const groupsStore = useSelector(state => state.groupsReducer)
    const dispatch = useDispatch()
    const handleDelete = (group) => {
        dispatch(removeGroup(group.id))
    }

    return (
        <table>
            <thead>
                <tr>
                    <th scope="column">Update</th>
                    <th scope="column">Delete</th>
                    {/* <th scope="column">Id</th> */}
                    <th scope="column">Name</th>
                    <th scope="column"># Values</th>
                </tr>
            </thead>
            <tbody>

                {groupsStore.groups.map(group =>
                    <GridRow
                        key={group.id}
                        group={group}
                        handleDelete={() => handleDelete(group)}
                    />)}
            </tbody>
        </table>
    )
}
function GridRow({ group, handleEdit, handleDelete }) {
    return (
        <tr>
            <td><Button><Link to={`/group/${group.id}`}><Edit /></Link></Button></td>
            <td><Button onClick={handleDelete}><Delete /></Button></td>
            {/* <td>{group.id}</td> */}
            <td>{group.name}</td>
            <td>{group.values.length}</td>
        </tr>
    )
}