import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const InprogressScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer style={{ backgroundColor: theme.colors.divider }}>
      <View pointerEvents={'auto'}>
        <Text style={{ color: theme.colors.strong }}>
          {'Double click me to edit 👀'}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(InprogressScreen);
