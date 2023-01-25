import { Modal as MyModal, Row, Col} from 'antd';
import { useState } from 'react';

import Transactions from '../components/Transactions'
import Arrow from '../assets/images/arrow.svg'
import Mail from '../assets/images/mail_icon.svg'

const Modal = ({memberImg, memberName, memberDescription, memberMail, memberPosition}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <>
      <span onClick={showModal} className="view-profile">
        View profile <img src={Arrow} alt="" width="20px" />
      </span>
      <MyModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="team-modal" width={1180}>
        <Row gutter={80}>
            <Col sm={24} md={10}>
                <img alt="" src={memberImg} width="100%" height="400px" className='team_member_img'/>
            </Col>
            <Col sm={24} md={14}>
                <h1 className='member_text-header'>{memberName}</h1>
                <h2 className='member_text-subheader'>{memberPosition}</h2>
                <p className='text-regular text-regular-bold'>{memberDescription}</p>
              
                {
                    memberMail && <p className='mt-4 text-regular text-regular-bold'> <img src={Mail} alt="" width="22px" /> {memberMail} </p>
                }
            </Col>
        </Row>


        <Transactions />
      </MyModal>
    </>
  );
};
export default Modal;