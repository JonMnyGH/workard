import React from 'react';
import Images from '../config/Images';
import {
  Checkbox,
  Divider,
  Icon,
  ScreenContainer,
  Stepper,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const RestaurantItemViewScreen = props => {
  const { theme } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [stepperValue, setStepperValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.surface }}
      scrollable={false}
      hasSafeArea={false}
    >
      <ScrollView
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.roundness,
        }}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Image
          style={styles.Imageg1}
          source={Images.Guac}
          resizeMode={'cover'}
        />
        <View style={styles.Viewuj}>
          <Text
            style={[
              theme.typography.headline5,
              styles.TextM5,
              { color: theme.colors.strong },
            ]}
          >
            {'Guacamole - Regular'}
          </Text>
          <Divider style={styles.DivideroE} color={theme.colors.medium} />
          <Text style={[styles.Textm6, { color: theme.colors.medium }]}>
            {
              'Fresh avocados, diced tomatoes mixed with Spanish onions, diced jalapenos, coriander and a squeeze of lemon juice. '
            }
          </Text>

          <View style={styles.ViewPR}>
            <Icon
              style={styles.IcondE}
              size={16}
              name={'MaterialCommunityIcons/check-decagram'}
              color={theme.colors.custom_rgb17_217_0}
            />
            <Text
              style={[theme.typography.caption, { color: theme.colors.light }]}
            >
              {'Gluten Free'}
            </Text>
          </View>
        </View>

        <View
          style={[styles.Viewao, { backgroundColor: theme.colors.divider }]}
        >
          <Text
            style={[theme.typography.overline, { color: theme.colors.medium }]}
          >
            {'ADD ON'}
          </Text>
        </View>

        <View style={styles.ViewkJ}>
          <View style={styles.ViewRc}>
            <Checkbox
              onPress={checkboxValue => {
                try {
                  setCheckboxValue(checkboxValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              status={checkboxValue}
            />
            <Text style={[styles.Text_9R, { color: theme.colors.strong }]}>
              {'Corn Chips'}
            </Text>
          </View>

          <Text style={{ color: theme.colors.medium }}>{'+ $2.00'}</Text>
        </View>

        <View
          style={[styles.View_3S, { backgroundColor: theme.colors.divider }]}
        >
          <Text
            style={[theme.typography.overline, { color: theme.colors.medium }]}
          >
            {'SPECIAL INSTRUCTIONS'}
          </Text>
        </View>

        <View style={[styles.ViewTQ, { borderColor: theme.colors.divider }]}>
          <TextInput
            onChangeText={textInputValue => {
              try {
                setTextInputValue(textInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextInputSD}
            editable={true}
            placeholder={'Add a note (extra sauce, no onion, etc)'}
            multiline={true}
            color={theme.colors.strong}
            value={textInputValue}
          />
        </View>

        <View
          style={[
            styles.ViewSm,
            { borderColor: theme.colors.light, borderRadius: theme.roundness },
          ]}
        >
          <Stepper
            onChange={stepperValue => {
              try {
                setStepperValue(stepperValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={stepperValue}
          />
        </View>
      </ScrollView>

      <Touchable style={styles.Touchablebn}>
        <View
          style={[
            styles.Viewz1,
            {
              borderRadius: theme.roundness,
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <Text
            style={[
              theme.typography.button,
              styles.TextMH,
              { color: theme.colors.surface },
            ]}
          >
            {'Add To Cart'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imageg1: {
    width: '100%',
    height: 350,
  },
  TextM5: {
    textAlign: 'center',
  },
  DivideroE: {
    height: 1,
    alignSelf: 'center',
    width: 32,
    marginTop: 16,
    marginBottom: 16,
  },
  Textm6: {
    textAlign: 'center',
  },
  IcondE: {
    width: 24,
    height: 24,
  },
  ViewPR: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Viewuj: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 24,
  },
  Viewao: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
  },
  Text_9R: {
    marginLeft: 16,
  },
  ViewRc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewkJ: {
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
  },
  View_3S: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  TextInputSD: {
    marginLeft: 16,
  },
  ViewTQ: {
    borderBottomWidth: 1,
    paddingRight: 16,
    paddingBottom: 16,
    marginTop: 16,
  },
  ViewSm: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginTop: 32,
    alignSelf: 'center',
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 16,
    paddingTop: 16,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  TextMH: {
    textAlign: 'center',
  },
  Viewz1: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Touchablebn: {
    paddingLeft: 16,
    paddingBottom: 16,
    marginBottom: 16,
    paddingTop: 16,
    paddingRight: 16,
  },
});

export default withTheme(RestaurantItemViewScreen);
