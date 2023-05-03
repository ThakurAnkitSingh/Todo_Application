import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@mui/material'
import React, { useState } from 'react'
import { db } from '../firebase'
import DeleteIcon from '@emotion/styled'

export default function Todo(props) {




    return (

        <>

            <List>
                <ListItem>
                    <ListItemAvatar></ListItemAvatar>
                    {/* In this todo is a object of toddo and second one todo is the text of todo */}
                    <ListItemText primary={props.todo.todo} secondary="Never Give Up" />
                </ListItem>

                
                {/* <Button onClick={(event)=> {db.collection("todos").doc(event.target)}}>Edit</Button> */}
                {/* <DeleteForeverIcon onClick={(event) => {db.collection("todos").doc(props.todo.id).delete()}} /> */}


                <Button variant="outlined" onClick={(event) => { db.collection("todos").doc(props.todo.id).delete() }} startIcon={<DeleteIcon />}>
                    Delete
                </Button>

                {/* <Button >Delete Todo</Button> */}
            </List>

        </>
    )
}



// Update