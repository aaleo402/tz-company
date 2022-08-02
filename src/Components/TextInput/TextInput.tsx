import React, { FC } from 'react'
import { TextField } from '@mui/material'

interface ITextInput {
  label: string
}

const TextInput: FC<ITextInput> = ({ label }) => {
  return <TextField fullWidth label={label} />
}

export default TextInput
