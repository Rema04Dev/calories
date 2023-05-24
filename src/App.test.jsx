import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { I18nextProvider } from 'react-i18next';
import { i18n } from '../src/main';
import App from './App';

describe('App', () => {
  it('Renders App', () => {
    render(<App />);
    expect(screen.getByTestId('title-2')).toHaveTextContent('Hello');
  });
});

describe('App', () => {
  it('Renders App', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    );

    expect(screen.getByTestId('title')).toHaveTextContent(i18n.t('heading'));
  });
});
// expect(screen.getByTestId('title')).toHaveTextContent(i18n.t('heading'));
