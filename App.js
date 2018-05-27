import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.122092, 
          longitude: 115.071035
        },
        title: 'Rumah Sakit Umum Parama Sidhi',
        subtitle: 'Jl. A. Yani, Baktiseraga, Kec. Buleleng, Kabupaten Buleleng, Bali 81119'
      },
      {
        key:2,
        latlng: {
          latitude:-8.113514, 
          longitude: 115.091882
        },
        title: 'Rumah Sakit TNI Ad Wiratsayta Singaraja',
        subtitle: 'Jl. Ngurah Rai No.70, Banjar Jawa, Kec. Buleleng, Singaraja, Bali 81113'
      },
      {
        key:3,
        latlng: {
          latitude:-8.120283, 
          longitude: 115.092387
        },
        title: 'RSUD Buleleng',
        subtitle: 'Jl. Ngurah Rai Kendran, Kec. Buleleng ,Kabupaten Buleleng,Bali 81113'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.108952, 
          longitude: 115.085645
        },
        title: 'Rumah Sakit Kerta Usadha',
        subtitle: 'Kaliuntu, Kec. Buleleng, Kabupaten Buleleng, Bali'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Rumah Sakit Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Bali Pratiwi </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#33CC99',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#33CC99',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
