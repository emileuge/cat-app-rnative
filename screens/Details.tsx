import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useContext, useEffect, type PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, Text, Image, View} from 'react-native';
import {DarkModeContext} from '../context/DarkModeContext';
import styles from '../styles';
const Details = ({route, navigation}: {route: any; navigation: any}) => {
  const {item} = route.params;
  const darkMode = useContext(DarkModeContext);
  const mode = darkMode.darkMode ? styles.dark : styles.light;
  return (
    <SafeAreaView>
      <ScrollView style={mode}>
        <View style={styles.detailsContainer}>
          <Image
            style={{width: 350, height: 350, borderRadius: 20}}
            source={{uri: item.image.url}}
          />
          <Text style={[styles.detailsTitle, mode]}>{item.name}</Text>
          <Text style={[styles.detailsDescription, mode]}>
            {item.description}
          </Text>
          {Object.keys(item).map((key, index) => {
            if (isNaN(item[key]) == false && item[key] > 0) {
              let stars = [];
              for (let i = 1; i <= item[key]; i++) {
                stars.push(
                  <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} />,
                );
              }
              return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <Text style={[styles.detailsTag, mode]}>
                    {key[0].toUpperCase() + key.slice(1).toLowerCase()}:{' '}
                  </Text>
                  {stars.map(card => {
                    return card;
                  })}
                </View>
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
