import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ImageBackground
        style={styles.ImageBackgroundP1}
        resizeMode={'cover'}
        backfaceVisibility={'hidden'}
        backgroundColor={theme.colors.background}
      >
        <View style={styles.ViewnC} pointerEvents={'auto'}>
          <View
            style={[
              styles.ViewMQ,
              {
                backgroundColor: theme.colors.background,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Image
              style={styles.ImageKh}
              resizeMode={'cover'}
              source={Images.HardWorkingIcon10}
            />
          </View>
        </View>

        <View style={styles.ViewWT} pointerEvents={'auto'}>
          <View
            style={[
              styles.ViewMu,
              {
                backgroundColor: theme.colors.surface,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Text style={[styles.TextT0, { color: theme.colors.strong }]}>
              {'Workard'}
            </Text>

            <Text style={[styles.Text_6a, { color: theme.colors.medium }]}>
              {'Powerful  planning tool'}
            </Text>

            <Button style={styles.ButtonV5} type={'solid'}>
              {'Start using →'}
            </Button>
          </View>
        </View>
        <View pointerEvents={'auto'} />
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageKh: {
    width: 96,
    height: 96,
    alignSelf: 'center',
  },
  ViewMQ: {
    paddingTop: 18,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    maxWidth: 600,
    opacity: 0.75,
    width: 100,
    width: '100%',
  },
  ViewnC: {
    maxHeight: '50%',
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: 12,
    marginRight: 12,
    flexGrow: 1,
  },
  TextT0: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Text_6a: {
    fontSize: 15,
    lineHeight: 21,
  },
  ButtonV5: {
    marginTop: 18,
  },
  ViewMu: {
    paddingTop: 18,
    paddingRight: 18,
    paddingLeft: 18,
    paddingBottom: 18,
    maxWidth: 600,
    opacity: 1,
    width: 100,
    width: '100%',
  },
  ViewWT: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 12,
    marginRight: 12,
  },
  ImageBackgroundP1: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(WelcomeScreen);
