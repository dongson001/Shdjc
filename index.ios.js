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
    View,
    ListView,
    TextInput,
} from 'react-native';

class Shdjc extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                '活动已取消', '活动名额已满', '活动时间有误', '商家位置不准确', '优惠折扣信息有误'
            ])
        };
    }
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.close}>取消</Text>
                <View style={styles.cBox}>
                    <Text style={styles.error}>活动纠错*</Text>
                    <View style={styles.dBox}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) => <Text style={styles.lineHeight}>{rowData}</Text>}
                        />
                    </View>
                    <TextInput style={styles.textInput}
                    />
                    <View style={styles.btnBox}>
                        <Text style={styles.btn}>提交</Text>
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
    lineHeight: {
        marginTop: 5,
    },
    textInput: {
        height: 70,
        borderWidth: 1,
        borderColor: 'gray',
        width: 345,
        borderRadius: 10,
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: 'red',
        lineHeight: 25,
        textAlign: 'center',
        flex: 1,
        borderRadius: 10,
        color: '#FFF',
    },
    btnBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
});

AppRegistry.registerComponent('Shdjc', () => Shdjc);
