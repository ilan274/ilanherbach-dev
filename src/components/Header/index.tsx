import { AvatarImage } from 'components/AvatarImage';
import { SocialMedia } from 'components/SocialMedia';
import { TitleSubtitle } from 'components/TitleSubtitle';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext/LanguageContext';

export const Header = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='layout-header'>
      <SocialMedia />
      <TitleSubtitle
        titleText={language.title}
        subtitleText={language.subtitle}
      />
      <AvatarImage />
    </div>
  );
};
