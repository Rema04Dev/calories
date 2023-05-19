import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import resources from './locales/index';

const i18n = i18next.createInstance();
i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
