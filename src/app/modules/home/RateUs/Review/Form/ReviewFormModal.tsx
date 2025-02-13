import {Button, Modal, ModalProps} from 'antd';
import clsx from 'clsx';
import {memo} from 'react';

import ReviewForm from '@/app/modules/home/RateUs/Review/Form/ReviewForm';
import {FORM_ID} from '@/app/modules/home/RateUs/Review/Form/settings';
import appConfig from '@/configuration/appConfig';
import appTheme from '@/configuration/appTheme';

interface Props {
    open: boolean;
    onCancel?: () => void;
}

const classNames: ModalProps['classNames'] = {
    content: '!bg-form-background !rounded-common',
    header: '!bg-form-background text-xl text-black font-bold mb-6',
    footer: clsx('flex', {
        'justify-start': appTheme.token.components.modal.form.button.placement === 'start',
        'justify-end': appTheme.token.components.modal.form.button.placement === 'end',
    }),
};

const ReviewFormModal = memo<Props>(({open, onCancel}): JSX.Element | null => {
    const {token} = appTheme;

    const {title, submit} = appConfig.modal.form;

    return (
        <Modal
            open={open}
            onCancel={onCancel}
            classNames={classNames}
            title={title}
            footer={
                <Button
                    form={FORM_ID}
                    size={token.components.modal.form.button.size || 'small'}
                    className="px-3 py-2 !bg-form-button-background text-sm !text-white font-medium !border-none rounded-form-button hover:opacity-80"
                    htmlType="submit"
                >
                    {submit}
                </Button>
            }
        >
            <ReviewForm />
        </Modal>
    );
});

export default ReviewFormModal;
