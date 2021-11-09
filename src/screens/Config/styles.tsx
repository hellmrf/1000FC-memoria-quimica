import React from 'react';
import { Switch, Text, View } from 'react-native';
import styled from 'styled-components/native';

import { normalTextSize, subTitleSize } from '../../dimensions/text';
import { Theme } from '../../themes';

export const TextItem = styled.Text<{ theme: Theme }>`
  flex: 0.8;
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: ${subTitleSize}px;
  color: ${({ theme }) => theme.components.configTextItemColor};
`;

export const Container = styled.View<{ theme: Theme }>`
  flex: 1;
  padding-horizontal: 10%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.components.configBackgroundColor};
`;

//TODO: move this to its own file
interface SwitchBaseProps {
  theme: Theme;
  label: string;
  action?: (value: boolean) => void;
  isEnabled?: boolean;
}
class SwitchBase extends React.Component<SwitchBaseProps> {
  state = {
    isEnabled: this.props.isEnabled || false,
  };

  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled });
  };

  constructor(props: SwitchBaseProps) {
    super(props);
  }

  render() {
    return (
      <View
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="stretch"
        marginVertical="5%">
        <TextItem theme={this.props.theme} onPress={this.toggleSwitch}>
          {this.props.label}
        </TextItem>
        <Switch
          flex={0.2}
          scaleX={1.1}
          scaleY={1.1}
          onValueChange={value => (this.props.action ? this.props.action(value) : () => {})}
          onChange={this.toggleSwitch}
          value={this.state.isEnabled}
        />
      </View>
    );
  }
}

export class SwitchItem extends SwitchBase {}
