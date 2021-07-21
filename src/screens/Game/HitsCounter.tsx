import React from 'react';
import styled from 'styled-components/native';

import CheckMarkIcon from '../../assets/icons/vendor/checkmark.svg';
import CrossMarkIcon from '../../assets/icons/vendor/crossmark.svg';

const HitsCounterView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
`;
const HitsCounterText = styled.Text`
  color: white;
  font-size: 20px;
`;

const HitsCounter = ({ hit, counter }: { hit: boolean; counter: number }) => {
  const Icon = hit ? CheckMarkIcon : CrossMarkIcon;

  return (
    <HitsCounterView>
      <Icon width={40} height={40} />
      <HitsCounterText>{counter.toString().padStart(2, '0')}</HitsCounterText>
    </HitsCounterView>
  );
};

export default HitsCounter;
