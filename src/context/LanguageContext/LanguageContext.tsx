import { useMediaQuery } from '@mui/material';
import { createContext, ReactNode, useContext, useState } from 'react';
import { keys } from 'ts-transformer-keys';
import { ILanguagesProps, languagesObject } from './languagesObject';

interface languageContextType {
  languageSelected: keyof ILanguagesProps;
  handleLanguage: (language: keyof ILanguagesProps) => void;
  language: ILanguagesProps[keyof ILanguagesProps];
  isMobile: boolean;
}

const defaultLanguage: keyof ILanguagesProps = 'en';

const languageContextDefaultValues: languageContextType = {
  languageSelected: defaultLanguage,
  handleLanguage: () => {},
  language: languagesObject['en'],
  isMobile: false,
};

export const LanguageContext = createContext<languageContextType>(
  languageContextDefaultValues
);

interface Props {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: Props) => {
  const [languageSelected, setLanguageSelected] =
    useState<keyof ILanguagesProps>(defaultLanguage);
  const isMobile = useMediaQuery('(max-width: 500px)');

  const handleLanguage = (language: keyof ILanguagesProps) => {
    setLanguageSelected(language);
  };

  const value = {
    languageSelected,
    handleLanguage,
    language: languagesObject[languageSelected],
    isMobile,
  };

  return (
    <>
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
