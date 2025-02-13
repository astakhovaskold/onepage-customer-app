import {Modal, ModalProps} from 'antd';
import {memo} from 'react';
import ReviewVendor from '@/app/modules/home/RateUs/Review/Vendor/ReviewVendor';
import config from '@/configuration/config';

interface Props {
    open: boolean;
    onCancel?: () => void;
}

const classNames: ModalProps['classNames'] = {content: '!bg-[#f6f6f6] !rounded-xl'};

const ReviewFormModal = memo<Props>(({open, onCancel}): JSX.Element | null => {
    const {title, submit} = config.modal.rate;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            onOk={onCancel}
            classNames={classNames}
            okText={submit}
            okButtonProps={{
                className: '!bg-[#196dff] text-sm !text-white font-medium !border-none rounded-lg hover:opacity-80',
            }}
            cancelButtonProps={{
                hidden: true,
            }}
        >
            <h2 className="text-xl text-black font-bold mb-6">{title}</h2>

            <ReviewVendor />
        </Modal>
    );
});

export default ReviewFormModal;
