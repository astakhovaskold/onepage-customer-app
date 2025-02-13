import {Button, Modal, ModalProps} from 'antd';
import {memo} from 'react';

import ReviewForm from '@/app/modules/home/RateUs/Review/Form/ReviewForm';
import {FORM_ID} from '@/app/modules/home/RateUs/Review/Form/settings';
import config from '@/configuration/config';

interface Props {
    open: boolean;
    onCancel?: () => void;
}

const classNames: ModalProps['classNames'] = {content: '!bg-[#f6f6f6] !rounded-xl', footer: 'flex justify-start'};

const ReviewFormModal = memo<Props>(({open, onCancel}): JSX.Element | null => {
    const {title, submit} = config.modal.form;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            classNames={classNames}
            footer={
                <Button
                    form={FORM_ID}
                    className="!bg-[#196dff] text-sm !text-white font-medium !border-none rounded-lg hover:opacity-80"
                    htmlType="submit"
                >
                    {submit}
                </Button>
            }
        >
            <h2 className="text-xl text-black font-bold mb-6">{title}</h2>

            <ReviewForm />
        </Modal>
    );
});

export default ReviewFormModal;
