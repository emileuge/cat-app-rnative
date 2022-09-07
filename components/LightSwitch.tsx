import React, {useContext} from 'react';
import {DarkModeContext} from '../context/DarkModeContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View, TouchableOpacity, Switch} from 'react-native';
import styles from '../styles';

const LightSwitch = () => {
  const {darkMode, ToggleDarkMode} = useContext(DarkModeContext);
  const handleChange = () => {
    ToggleDarkMode();
  };
  return (
    <View style={styles.myswitch}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={'#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleChange}
        value={darkMode}
      />
    </View>
  );
};
export default LightSwitch;
