import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';

import {useStyles} from './styles';

const Start = () => {
  const styles = useStyles();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Weather app</Text>
      <ScrollView
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.view}>
          <Text style={styles.text}>Screen 1</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Screen 2</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Screen 3</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Pressable style={[styles.btn, styles.skipBtn]}>
          <Text style={[styles.btnTitle, styles.skipBtnTitle]}>Skip</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.nextBtn]}>
          <Text style={[styles.btnTitle, styles.nextBtnTitle]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Start;
