import React, { useState } from 'react'
import useTranslate from '@lang'
import { Button, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Styles from './AddFirm.module.scss'
import useFirmware from '@api/useFirmwares'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddFormFirm from '@components/AddFormFirm/AddFormFirm'
const cx = classNames.bind(Styles)


const AddFirm = ({onchange}) => {

	const [ID, setId] = useState('')
	const [Name, setName ] = useState('')
	const [Description, setdescription] = useState(null)

	const  [status, setStatus] = useState(false)

	const [open, setOpen] = useState(false)
	const [confirmLoading, setConfirmLoading] = useState(false)
	const {createFirm} = useFirmware()

	const showModal = () => {
		setOpen(true)
	}
	const handleOk = async () => {
		const {success,data} = await createFirm({ ID, Name, Description })
		if(success) {
			setConfirmLoading(true)
			setTimeout(() => {
				setOpen(false)
				setConfirmLoading(false)
				onchange()
				handleReset()
			}, 2000)
		
		}
		
	}
	const handleCancel = () => {
		setOpen(false)
	}
	const handleData = (ID, Name, Description) => {
		setId(ID) 
		setName(Name)
		setdescription(Description)
	}
	const handleReset = () =>  {
		setStatus(true)
	}
	const handleResetStatus = () => {
		setStatus(false)
	}
	return (
		<>
			<div className={cx('delete__btn')} onClick={showModal}>
				<Button type='primary' style={{borderRadius: '20px', backgroundColor: 'rgb(37 174 53)'}}>
					<FontAwesomeIcon icon={faPlus} style={{marginRight: '5px'}} />
                        Add FirmWare
				</Button>
			</div>
			<Modal
				title='Add New Firmware'
				open={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
				okText='Add New'
				className='add__form'
				okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
			>
				<AddFormFirm onchangedata={handleData} ID={ID} Name={Name} Description={Description} onresetstatus={handleResetStatus} status={status} />
			</Modal>
		</>
	)
}
export default AddFirm
