import { Autocomplete, TextField } from '@mui/material'
import { FC } from 'react'

interface ICustomSelect {
  id?: string
  label?: string
  options: { label: string; id: string }[]
  classname?: string
  loading?: boolean
  multiple?: boolean
}

const CustomSelect: FC<ICustomSelect> = ({ options, classname, loading, id, label, multiple }) => {
  return (
    <div className={classname}>
      <Autocomplete
        disablePortal
        options={options}
        sx={{ width: 300 }}
        loading={loading}
        loadingText={'Loading'}
        multiple={multiple}
        renderInput={params => <TextField {...params} label={label} />}
      />
    </div>
  )
}

export default CustomSelect
