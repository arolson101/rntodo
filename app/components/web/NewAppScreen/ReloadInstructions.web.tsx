/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import {StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const ReloadInstructions = () => (
  <Text>
    Press <Text style={styles.highlight}>Cmd + R</Text> on your keyboard to
    reload your app's code.
  </Text>
);

export default ReloadInstructions;
