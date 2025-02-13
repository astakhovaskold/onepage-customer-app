import {ThemeConfig} from 'antd';

import appTheme from '@/configuration/appTheme';

const themeConfig: ThemeConfig = {
    token: {
        fontSize: appTheme.fontSize.common,
        fontFamily: appTheme.fontFamily.primary,
        colorPrimary: appTheme.color.text,
    },
    components: {
        Table: {
            cellPaddingBlock: 20,
            cellPaddingInline: 16,
            rowSelectedBg: appTheme.color.background,
            rowSelectedHoverBg: appTheme.color['background-hover'],
        },
        Layout: {
            bodyBg: appTheme.color.background,
        },
        Button: {
            primaryShadow: 'none',
        },
        Dropdown: {
            colorInfoTextActive: appTheme.color.text,
        },
    },
};

export default themeConfig;
