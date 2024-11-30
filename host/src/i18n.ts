import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { authResources } from 'module_auth/i18n';

const hostResources = {
    en: {
        host: {
            example: 'This is an example translation from host'
        }
    },
    id: {
        host: {
            example: 'Ini adalah contoh terjemahan dari host'
        }
    }
};

const resources: Resource[] = [hostResources, authResources];

i18next.use(initReactI18next).init({
    resources: resources.reduce((acc, resource) => {
        Object.keys(resource).forEach(lang => {
            acc[lang] = {
                ...acc[lang],
                ...resource[lang]
            };
        });
        return acc;
    }, {} as Resource),
    lng: 'id',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});
