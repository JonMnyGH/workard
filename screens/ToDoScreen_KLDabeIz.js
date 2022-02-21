import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import {
  ButtonSolid,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ToDoScreen_KLDabeIz = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.ViewSl}>
        <View style={styles.ViewgC}>
          <Text
            style={[theme.typography.headline4, { color: theme.colors.strong }]}
          >
            {'To Do\n'}
          </Text>
          <Touchable style={styles.Touchablekb} />
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewgZContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
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
                  data={data}
                  renderItem={({ item }) => {
                    const listData = item;
                    return (
                      <Touchable>
                        <View style={styles.View_7Q}>
                          <View style={styles.Viewqt}>
                            <View
                              style={[
                                styles.Viewtm,
                                {
                                  backgroundColor: theme.colors.divider,
                                  borderColor: theme.colors.light,
                                  borderRadius: theme.roundness,
                                },
                              ]}
                            >
                              <Text
                                style={[
                                  theme.typography.caption,
                                  { color: theme.colors.medium },
                                ]}
                              >
                                {listData?.symbol}
                              </Text>
                            </View>

                            <View style={styles.ViewO6}>
                              <Text
                                style={[
                                  theme.typography.body1,
                                  { color: theme.colors.strong },
                                ]}
                              >
                                {listData?.name}
                              </Text>

                              <View style={styles.Viewsn}>
                                <View style={styles.Viewf7}>
                                  <Text>
                                    {listData && listData['%_change_1h']}
                                    {' %'}
                                  </Text>
                                </View>

                                <View style={styles.Viewbb}>
                                  <Text
                                    style={[
                                      theme.typography.caption,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData && listData['%_change_24h']}
                                    {' % (24H)'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View style={styles.ViewWW}>
                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {'$'}
                            </Text>

                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {listData?.price}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          style={styles.DividerOa}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    );
                  }}
                  contentContainerStyle={styles.FlatListQ1Content}
                  numColumns={1}
                  data={data}
                />
              );
            }}
          </DraftbitExampleDataApi.FetchGETCryptoPrices782GET>
        </ScrollView>

        <View style={styles.Viewog} pointerEvents={'auto'}>
          <ButtonSolid
            style={[
              styles.ButtonSolidg5,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Get Started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Touchablekb: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewgC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  Viewtm: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  Viewf7: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbb: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  Viewsn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewO6: {
    alignSelf: 'stretch',
  },
  Viewqt: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  ViewWW: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  View_7Q: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  DividerOa: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListQ1Content: {
    flex: 1,
  },
  ScrollViewgZContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  ButtonSolidg5: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewog: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
  },
  ViewSl: {
    paddingBottom: 16,
    paddingTop: 34,
    paddingTop: 32,
    flex: 1,
  },
});

export default withTheme(ToDoScreen_KLDabeIz);
