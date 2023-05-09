import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { store } from "../src/store/store";

import i18next from "./i18next";

const preview: Preview = {
  parameters: {
    i18next,
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
    nextRouter: {
      Provider: RouterContext.Provider,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (storyFn) => (<Provider store={store}><I18nextProvider i18n={i18next}>{storyFn()}</I18nextProvider></Provider>),
  ]
};

export default preview;
