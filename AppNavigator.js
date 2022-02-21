import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AdminScreen from './screens/AdminScreen';
import BoardScreen from './screens/BoardScreen';
import InprogressScreen from './screens/InprogressScreen';
import RestaurantItemViewScreen from './screens/RestaurantItemViewScreen';
import StoryScreen from './screens/StoryScreen';
import ToDoScreen_KLDabeIz from './screens/ToDoScreen_KLDabeIz';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="InprogressScreen"
        component={InprogressScreen}
        options={{
          title: 'In progress',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/directions-run"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="StoryScreen"
        component={StoryScreen}
        options={{
          title: 'Story',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/edit"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="BoardScreen"
        component={BoardScreen}
        options={{
          title: 'board',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialIcons/directions-run"
              size={25}
              color={focused ? color : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        mode="card"
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerTransparent: false,
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="BoardScreen"
          component={BoardScreen}
          options={{ title: 'board' }}
        />
        <Stack.Screen
          name="ToDoScreen_KLDabeIz"
          component={ToDoScreen_KLDabeIz}
          options={{ title: 'To Do' }}
        />
        <Stack.Screen
          name="StoryScreen"
          component={StoryScreen}
          options={{ title: 'Story' }}
        />
        <Stack.Screen
          name="InprogressScreen"
          component={InprogressScreen}
          options={{ title: 'In progress' }}
        />
        <Stack.Screen
          name="AdminScreen"
          component={AdminScreen}
          options={{ title: 'admin' }}
        />
        <Stack.Screen
          name="RestaurantItemViewScreen"
          component={RestaurantItemViewScreen}
          options={{ title: 'Restaurant Item View' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
