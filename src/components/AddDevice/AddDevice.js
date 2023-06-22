import { Button, Modal } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './AddDevice.module.scss'
import FormInput from '@components/FormInput/FormInput';
const cx = classNames.bind(Styles)
const AddDevice = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
    setOpen(true);
    };
    const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
    }, 2000);
    };
    const handleCancel = () => {
        console.log('Clicked cancel button');
    setOpen(false);
    };
  return (
    <>
            <div className={cx('delete__btn')} onClick={showModal}>
                    <Button type="primary" style={{borderRadius: '20px', backgroundColor: "rgb(37 174 53)"}}>
                        <FontAwesomeIcon icon={faPlus} style={{marginRight: '5px'}} />
                        Add Device
                    </Button>
            </div>
            <Modal
                title="Add New Device"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okText="Add New"
                className='add__form'
                okButtonProps={{ style: { backgroundColor: 'rgb(37, 174, 53)', } }} 
            >
                <FormInput />
            </Modal>
    </>
  );
};
export default AddDevice;