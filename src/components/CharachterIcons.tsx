import Character1Icon from '../assets/avatars/character_1.svg';
import Character2Icon from '../assets/avatars/character_2.svg';
import Character3Icon from '../assets/avatars/character_3.svg';
import Character4Icon from '../assets/avatars/character_4.svg';
import Character5Icon from '../assets/avatars/character_5.svg';
import Character6Icon from '../assets/avatars/character_6.svg';

const avatars = {
  1: Character1Icon,
  2: Character2Icon,
  3: Character3Icon,
  4: Character4Icon,
  5: Character5Icon,
  6: Character6Icon,
};

type AvatarID = keyof typeof avatars;

export { avatars, AvatarID };
