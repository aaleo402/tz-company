import React from 'react'
import { useGetApplicantIndividualCompanyRelationsQuery as useGetRelationsQuery } from '../../generated/graphql'
import CustomSelect from '../CustomSelect/CustomSelect'

const SelectCompanyRelation = () => {
  const { data, loading } = useGetRelationsQuery()

  const options = data?.applicantIndividualCompanyRelations?.data.map(item => ({
    id: item.id,
    label: item.name,
  }))

  return (
    <div>
      {options && <CustomSelect options={options} label={'CompanyRelation'} multiple={true} loading={loading} />}
    </div>
  )
}

export default SelectCompanyRelation
