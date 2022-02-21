import React from 'react';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const BoardScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.background }]}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles.Viewa7} pointerEvents={'auto'} />
      <View style={styles.ViewmC} pointerEvents={'auto'}>
        <ExampleDataApi.FetchListOfPeopleGET>
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={fetchData}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.View_5p}>
                      <Touchable>
                        <View
                          style={[
                            styles.View_4c,
                            {
                              backgroundColor: theme.colors.surface,
                              borderRadius: theme.roundness,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <View style={styles.ViewTs}>
                            <Text
                              style={[
                                theme.typography.custom15,
                                styles.TextaF,
                                { color: theme.colors.strong },
                              ]}
                              numberOfLines={1}
                            >
                              {listData?.full_name}
                            </Text>

                            <Text
                              style={[
                                theme.typography.caption,
                                styles.TextUs,
                                { color: theme.colors.medium },
                              ]}
                              numberOfLines={1}
                            >
                              {listData?.job_title}
                            </Text>
                          </View>

                          <Text style={{ color: theme.colors.strong }}>
                            {'Double click me to edit 👀'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  );
                }}
                contentContainerStyle={styles.FlatListofContent}
                numColumns={1}
              />
            );
          }}
        </ExampleDataApi.FetchListOfPeopleGET>
      </View>
      <View style={styles.ViewnA} pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewa7: {
    flexGrow: 0,
    flexShrink: 0,
  },
  TextaF: {
    textAlign: 'center',
    marginTop: 6,
  },
  TextUs: {
    textAlign: 'center',
  },
  ViewTs: {
    width: 140,
  },
  View_4c: {
    paddingTop: 6,
    paddingRight: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
  },
  View_5p: {
    paddingTop: 12,
    paddingLeft: 6,
    paddingRight: 6,
    left: 2,
    width: '100%',
    minWidth: '90%',
  },
  FlatListofContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  ViewmC: {
    flexGrow: 1,
    flexShrink: 0,
  },
  ViewnA: {
    flexGrow: 0,
    flexShrink: 0,
  },
  screen: {
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
  },
});

export default withTheme(BoardScreen);
