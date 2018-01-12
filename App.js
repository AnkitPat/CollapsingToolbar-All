/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StatusBar, Text, View,StyleSheet,Image} from 'react-native';
import CollapsibleToolbar from 'react-native-collapsible-toolbar';
import NavBackButton from './NavBackButton';

import {Card} from 'react-native-elements'
import Button from "./Button";


export default class App extends Component {
    componentWillMount() {
        StatusBar.setBarStyle('light-content');

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(true);
            StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.2)', true);
        }
    }

    renderContent = () => (
        <View>

            <View>
                <Card style={{height: 200, backgroundColor: '#f00'}}>


                    <Text style={styles.headerText}>Hello ALl</Text>

                    <View style={{marginTop:20, flex: 1,flexDirection: 'row'}}>
                        <Image source={require('./assets/location.png')} style={{alignSelf:'center',flex:0.1,width:40,height:40}}/>
                        <View style={{flexDirection:'column',flex:0.9}}>
                            <Text style={styles.locationText}>Laxmi Lawns: Pune</Text>
                            <Text style={styles.fullLocationText}>Next to Magarpattacity, 133, Magarpatta,....</Text>
                        </View>
                    </View>

                    <View style={{marginTop:20, flex: 1,flexDirection: 'row'}}>
                        <Image source={require('./assets/calendar.png')} style={{alignSelf:'center',flex:0.1,width:40,height:40}}/>
                        <View style={{flexDirection:'column',flex:0.6}}>
                            <Text style={styles.dateText}>Laxmi Lawns: Pune</Text>
                            <Text style={styles.priceText}>Next to Magarpattacity, 133, Magarpatta,....</Text>
                        </View>
                        <View style={{flex:0.3, justifyContent:'center'}}>
                            <Button title={'BOOK'}/>
                        </View>

                    </View>

                </Card>
            </View>

        </View>
    );

    renderNavBar = () => (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1
            }}
        >
            <NavBackButton title='' onPress={() => {
                console.log('ankit back')
            }}/>
            <Text style={{textAlign: 'center', color: '#FFF'}}>Title</Text>
        </View>
    );

    render() {
        return (
            <CollapsibleToolbar
                renderContent={this.renderContent}
                renderNavBar={this.renderNavBar}
                imageSource='https://lorempixel.com/400/300/'
                collapsedNavBarBackgroundColor='#009688'
                translucentStatusBar
                showsVerticalScrollIndicator={false}
                toolBarHeight={150}
            />
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight:'bold',
        fontSize: 20,
        color: '#000'
    },

    dateText: {
        color:'#777777',
        marginLeft: 20,
        fontSize: 14,
        marginTop: 5
    },

    priceText: {
        color:'#3E3E3E',
      fontSize: 14,
      marginTop: 7,
      marginLeft: 20
    },

    fullLocationText: {
        color:'#777777',
        fontSize: 16,
        marginLeft: 20,
        marginTop: 7
    },
    locationText: {
        color:'#777777',
        marginLeft: 20,
        fontSize: 18,
        color: '#0E84E0',
        marginTop: 5
    }
});
