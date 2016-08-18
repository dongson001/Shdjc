/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Shdjc extends Component {
  render() {
    return (
        <View style={styles.box}>
            <Text style={styles.close}>取消</Text>
            <View style={styles.cBox}>
                <Text style={styles.error}>活动纠错*</Text>
                <View style={styles.dBox}>
                    
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#FFF',
        position: 'absolute',
        bottom: 0,
        margin: 10,
    },
    close: {
        fontSize: 10,
    },
    cBox: {
        margin: 5,
    },
    error: {
        fontSize:10,
    },
    dBox: {
        margin: 5,
    },
});

AppRegistry.registerComponent('Shdjc', () => Shdjc);
