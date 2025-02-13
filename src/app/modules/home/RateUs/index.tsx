import {Rate} from 'antd';
import {memo, useCallback, useEffect, useState} from 'react';

import MiniWidget from '@/app/components/MiniWidget';
import Context from '@/app/modules/home/RateUs/Review/Context';
import ReviewFormModal from '@/app/modules/home/RateUs/Review/Form/ReviewFormModal';
import ReviewVendorModal from '@/app/modules/home/RateUs/Review/Vendor/ReviewVendorModal';
import appConfig from '@/configuration/appConfig';

const RateUs = memo((): JSX.Element | null => {
    const {title, subtitle, wantedRate} = appConfig.components.rate;

    const [rate, setRate] = useState(0);
    const [open, setOpen] = useState(false);

    const onChange = useCallback((amount: number) => {
        setRate(amount);
    }, []);

    const onCancel = () => {
        setOpen(false);
        setRate(0);
    };

    useEffect(() => {
        if (rate > 0 && !open) {
            setOpen(true);
        }
    }, [open, rate]);

    return (
        <Context.Provider value={{rate}}>
            <MiniWidget title={title} subtitle={subtitle}>
                <Rate className="text-3xl text-[#fc0]" onChange={onChange} />
            </MiniWidget>

            {rate >= wantedRate ? (
                <ReviewVendorModal open={open} onCancel={onCancel} />
            ) : (
                <ReviewFormModal open={open} onCancel={onCancel} />
            )}
        </Context.Provider>
    );
});

export default RateUs;
