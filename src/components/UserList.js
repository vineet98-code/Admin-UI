import React from 'react';
import { List, Datagrid, TextField, EditButton, TextInput, DeleteButton } from 'react-admin';

const postFilters = [
  <TextInput source="q" label="Search by name or email" alwaysOn />,
];

const UserList = (props) => {
  return (
    <List {...props} filters={postFilters}>
      <Datagrid>
        {/* <TextField source='id' /> */}
        <TextField source='name' />
        <TextField source='email' />
        <TextField source='role' />
        <EditButton source='Action' basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
    
  )
};

export default UserList;
