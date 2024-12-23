import { Button, TextField } from '@mui/material'
import React from 'react'

const AddProduct = () => {
  return (
    <div>
        <h1>Add Product</h1>
        <TextField variant="outlined" label="Product Name"></TextField><br /><br />
        <input type="file"/><br /><br />
        <TextField variant="outlined" label="Price"></TextField><br /><br />
        <TextField variant="outlined" label="Category"></TextField><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default AddProduct