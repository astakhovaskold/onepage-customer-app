import {Modal, ModalProps} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

import ReviewVendor from '@/app/modules/home/RateUs/Review/Vendor/ReviewVendor';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';

interface Props {
    open: boolean;
    onCancel?: () => void;
}

const classNames: ModalProps['classNames'] = {
    content: '!rounded-common',
    header: 'text-xl text-black font-bold mb-6',
    footer: clsx('flex', {
        'justify-start': appTheme.token.components.modal.rate.button.placement === 'start',
        'justify-end': appTheme.token.components.modal.rate.button.placement === 'end',
    }),
};

const ReviewFormModal = memo<Props>(({open, onCancel}): JSX.Element | null => {
    const {title, submit} = appConfig.modal.rate;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            onOk={onCancel}
            classNames={classNames}
            okText={submit}
            title={title}
            okButtonProps={{
                className:
                    'px-3 py-2 !bg-rate-button-background text-sm !text-rate-button-color font-medium !border-none rounded-rate-button hover:opacity-80',
            }}
            cancelButtonProps={{
                hidden: true,
            }}
        >
            <ReviewVendor />
        </Modal>
    );
});

export default ReviewFormModal;
