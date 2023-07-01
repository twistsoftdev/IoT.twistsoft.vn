import classNames from 'classnames/bind'
import Styles from './AddForm.module.scss'
import {Form, Input, Button} from 'antd'
import React, { useMemo } from 'react'
import { useEffect, useState } from 'react'
const cx = classNames.bind(Styles)
const AddForm = ({...props}) => {


	const  { TextArea } = Input
	const  [form] = Form.useForm()
	const  [ID, setId] = useState(props.ID)
	const  [Mac, setMac] = useState(props.Mac)
	const  [Name, setName ] = useState(props.Name)
	const  [ApplicationID, setapplication] = useState(props.ApplicationID)
	const  [Description, setdescription] = useState(props.Description)

	const onchange = props.onchangedata
	const onreset = props.onresetstatus

	useEffect(() => {
		onchange(ID, Mac, Name, ApplicationID, Description)
	}, [ID, Mac, Name, ApplicationID, Description])
	
	if(props.status) {
		form.resetFields()
		onreset()
	}
	return (
		<Form
			form={form}
			labelCol={{
				span: 6,
			}}
			wrapperCol={{
				span: 16,
			}}
			layout='horizontal'
			size={'large'}
			style={{
				maxWidth: 600,
			}}
			className={cx('form__input')}
		>
			<Form.Item label='ID' name={'ID'} >
				<Input onChange={(e) => {
					setId(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Mac' name={'Mac'}>
				<Input onChange={(e) => {
					setMac(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Name' name={'Name'}>
				<Input   onChange={(e) => {
					setName(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Application ID' name={'ApplicationID'}>
				<Input  onChange={(e) => {
					setapplication(e.target.value)
				}} />
			</Form.Item>
			<Form.Item label='Description' name={'Description'}>
				<TextArea  rows={3} onChange={(e) => {
					setdescription(e.target.value)
				}} />
			</Form.Item>
		</Form>
	)
}

export default AddForm