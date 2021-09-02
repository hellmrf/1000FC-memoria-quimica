import React from 'react';
import styled from 'styled-components/native';
import theme from '../../themes';

import DefaultAvatar from '../../assets/icons/vendor/einstein.svg';

/// Tamanho do círculo
const INDICATOR_SIZE = 50;
/// Tamanho do ícone
const AVATAR_SIZE = INDICATOR_SIZE * 0.9;

const Container = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ActiveIndicator = styled.View<{ active: boolean }>`
  width: ${INDICATOR_SIZE / 6}px;
  height: ${INDICATOR_SIZE / 6}px;
  border-radius: ${INDICATOR_SIZE / 12}px;
  background-color: ${({ active }) => (active ? theme.colors.red : 'transparent')};
  margin-bottom: 10px;
`;

const AvatarArea = styled.View<{ active: boolean }>`
  width: ${INDICATOR_SIZE}px;
  height: ${INDICATOR_SIZE}px;
  border-radius: ${INDICATOR_SIZE / 2}px;
  background-color: ${props => (props.active ? 'rgba(255, 255, 255, 0.5)' : 'transparent')};
  align-items: center;
  justify-content: flex-end;
`;

interface AvatarSelectorProps {
  Avatar?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  active?: boolean;
}

export default ({ Avatar = DefaultAvatar, active = false }: AvatarSelectorProps) => {
  return (
    <Container>
      <ActiveIndicator active={active} />
      <AvatarArea active={active}>
        <Avatar width={AVATAR_SIZE} height={AVATAR_SIZE} fill="white" />
      </AvatarArea>
    </Container>
  );
};
