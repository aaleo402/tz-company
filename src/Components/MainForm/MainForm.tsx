import React from 'react'
import { Button, Form } from 'antd'
import './mainform.modules.css'
import SelectCompanyRelation from '../SelectCompanyRelation/SelectCompanyRelation'
import SelectCompanyPosition from '../SelectCompanyPosition/SelectCompanyPosition'
import TextInput from '../TextInput/TextInput'
import TextArea from '../TextArea/TextArea'

const MainForm = () => {
  const inputRules = [{ required: true, message: 'Please input your text', min: 5, max: 10 }]
  const selectRules = [{ required: true }]

  return (
    <div className={'formWrapper'}>
      <Form>
        <Form.Item name={'SelectCompanyRelation'} rules={selectRules}>
          <SelectCompanyRelation />
        </Form.Item>
        <Form.Item name={'SelectCompanyPosition'} rules={selectRules}>
          <SelectCompanyPosition />
        </Form.Item>
        <Form.Item name={'textInput'} rules={inputRules}>
          <TextInput label={'Text Input'} />
        </Form.Item>
        <Form.Item name={'textArea'} rules={inputRules}>
          <TextArea label={'Text Area'} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default MainForm
