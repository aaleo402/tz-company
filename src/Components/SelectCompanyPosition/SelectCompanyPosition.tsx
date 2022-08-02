import React from 'react'
import { useGetApplicantIndividualCompanyPositionsQuery as useGetPositionsQuery } from '../../generated/graphql'
import CustomSelect from '../CustomSelect/CustomSelect'

const SelectCompanyPosition = () => {
  const { data, loading } = useGetPositionsQuery()

  const options = data?.applicantIndividualCompanyPositions?.data.map(item => ({
    id: item.id,
    label: item.name,
  }))

  return <div>{options && <CustomSelect options={options} label={'CompanyPositions'} loading={loading} />}</div>
}

export default SelectCompanyPosition
