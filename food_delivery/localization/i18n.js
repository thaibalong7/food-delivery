import I18n from 'react-native-i18n'
import { vi } from './vi'
import { en } from './en'

I18n.translations = {
    'vi-VN': vi,
    'en-US': en,
    'en-GB': en,
}

export const strings = (str) => {
    return I18n.t(str);
}

export const changeLang = (lange, component) => {
    I18n.locale = lange;
    component.forceUpdate();
}