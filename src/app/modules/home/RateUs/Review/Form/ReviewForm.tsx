import {Form, Input, Rate} from 'antd';
import clsx from 'clsx';
import {memo, useCallback, useContext, useMemo} from 'react';

import Context from '@/app/modules/home/RateUs/Review/Context';
import {FORM_ID} from '@/app/modules/home/RateUs/Review/Form/settings';
import appConfig from '@/configuration/appConfig';

interface Props {
    hasPhoto?: boolean;
}

interface FormValues {
    rate: number;
    message: string;
}

const {Item} = Form;
const {TextArea} = Input;

const ReviewForm = memo<Props>(({hasPhoto = false}): JSX.Element | null => {
    const {aspects, place, textarea} = appConfig.modal.form;
    const {name, address, image} = place;

    const {rate} = useContext(Context);

    const initialValues = useMemo(
        () => ({
            rate,
        }),
        [rate],
    );

    const onFinish = useCallback((values: FormValues) => {}, []);

    return (
        <Form<FormValues>
            id={FORM_ID}
            className="flex flex-col gap-y-4"
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <div className="relative rounded-common flex flex-col items-center">
                {hasPhoto && (
                    <img className="rounded-common w-full h-[208px]" src={image} alt={`${name} - ${address}`} />
                )}

                <div
                    className={clsx('flex flex-col gap-y-4 w-full p-4 bg-white rounded-common', {
                        'absolute z-10 bottom-0': hasPhoto,
                    })}
                >
                    <div className="flex flex-col">
                        <span className="text-black text-base">{name}</span>
                        <span className="text-[#878787] text-sm">{address}</span>
                    </div>

                    <div className="flex justify-center">
                        <Item name="rate" noStyle>
                            <Rate className="text-3xl text-rate-star text-center" />
                        </Item>
                    </div>
                </div>
            </div>

            <Item name="message" noStyle>
                <TextArea
                    className="p-4 border-none rounded-common text-base !resize-none"
                    placeholder={textarea}
                    rows={3}
                />
            </Item>

            <ul className="p-4 rounded-common bg-white flex flex-wrap">
                {aspects.map(item => (
                    <li key={item} className="before:content-['•'] before:inline-block before:mr-1.5 before:ml-1.5">
                        {item}
                    </li>
                ))}
            </ul>
        </Form>
    );
});

export default ReviewForm;
