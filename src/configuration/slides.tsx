import i18n from '@/libs/i18n';

export const SLIDE_1 = (
    <div className="p-4 h-32 flex flex-col justify-between text-black bg-primary">
        <span className="text-banner-title font-banner-title">{i18n.t('banner.0.children.0.title')}</span>

        <span className="text-common">{i18n.t('banner.0.children.0.subtitle')}</span>
    </div>
);
