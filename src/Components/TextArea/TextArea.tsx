import React, { FC } from 'react'
import { TextField } from '@mui/material'

interface ITextArea {
  label: string
}

const TextArea: FC<ITextArea> = ({ label }) => {
  return <TextField fullWidth multiline rows={5} helperText={''} label={label} />
}

export default TextArea
