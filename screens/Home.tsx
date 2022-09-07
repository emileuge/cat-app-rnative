import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  SectionList,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import {DarkModeContext} from '../context/DarkModeContext';
import settings from '../config';
import LightSwitch from '../components/LightSwitch';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronCircleDown,
  faLightbulb,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

interface TSearchItem {
  id: string;
  title: string;
}

const Home = ({route, navigation}: {route: any; navigation: any}) => {
  // const isDarkMode = useColorScheme() === 'dark';
  const [selectedItem, setSelectedItem] = useState(null);
  const [results, setResults] = useState([]);
  const [searchList, setSearchList] = useState<TSearchItem[]>([]);
  const [loadCount, setLoadCount] = useState(0);
  const darkMode = useContext(DarkModeContext);
  const mode = darkMode.darkMode ? styles.dark : styles.light;
  //<p>name and image of 5 breeds picked randomly</p>
  useEffect(() => {
    setResults([
      {
        adaptability: 5,
        affection_level: 5,
        alt_names: '',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
        child_friendly: 3,
        country_code: 'EG',
        country_codes: 'EG',
        description:
          'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
        dog_friendly: 4,
        energy_level: 5,
        experimental: 0,
        grooming: 1,
        hairless: 0,
        health_issues: 2,
        hypoallergenic: 0,
        id: 'abys',
        image: {
          height: 1445,
          id: '0XYvRd7oD',
          url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
          width: 1204,
        },
        indoor: 0,
        intelligence: 5,
        lap: 1,
        life_span: '14 - 15',
        name: 'Abyssinian',
        natural: 1,
        origin: 'Egypt',
        rare: 0,
        reference_image_id: '0XYvRd7oD',
        rex: 0,
        shedding_level: 2,
        short_legs: 0,
        social_needs: 5,
        stranger_friendly: 5,
        suppressed_tail: 0,
        temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
        vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
        vocalisation: 1,
        weight: {imperial: '7  -  10', metric: '3 - 5'},
        wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
      },
      {
        adaptability: 5,
        affection_level: 4,
        alt_names: '',
        child_friendly: 4,
        country_code: 'GR',
        country_codes: 'GR',
        description:
          'Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.',
        dog_friendly: 4,
        energy_level: 3,
        experimental: 0,
        grooming: 3,
        hairless: 0,
        health_issues: 1,
        hypoallergenic: 0,
        id: 'aege',
        image: {
          height: 800,
          id: 'ozEvzdVM-',
          url: 'https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg',
          width: 1200,
        },
        indoor: 0,
        intelligence: 3,
        life_span: '9 - 12',
        name: 'Aegean',
        natural: 0,
        origin: 'Greece',
        rare: 0,
        reference_image_id: 'ozEvzdVM-',
        rex: 0,
        shedding_level: 3,
        short_legs: 0,
        social_needs: 4,
        stranger_friendly: 4,
        suppressed_tail: 0,
        temperament: 'Affectionate, Social, Intelligent, Playful, Active',
        vetstreet_url: 'http://www.vetstreet.com/cats/aegean-cat',
        vocalisation: 3,
        weight: {imperial: '7 - 10', metric: '3 - 5'},
        wikipedia_url: 'https://en.wikipedia.org/wiki/Aegean_cat',
      },
      {
        adaptability: 5,
        affection_level: 5,
        alt_names: '',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanBobtail.aspx',
        child_friendly: 4,
        country_code: 'US',
        country_codes: 'US',
        description:
          'American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.',
        dog_friendly: 5,
        energy_level: 3,
        experimental: 0,
        grooming: 1,
        hairless: 0,
        health_issues: 1,
        hypoallergenic: 0,
        id: 'abob',
        image: {
          height: 951,
          id: 'hBXicehMA',
          url: 'https://cdn2.thecatapi.com/images/hBXicehMA.jpg',
          width: 1600,
        },
        indoor: 0,
        intelligence: 5,
        lap: 1,
        life_span: '11 - 15',
        name: 'American Bobtail',
        natural: 0,
        origin: 'United States',
        rare: 0,
        reference_image_id: 'hBXicehMA',
        rex: 0,
        shedding_level: 3,
        short_legs: 0,
        social_needs: 3,
        stranger_friendly: 3,
        suppressed_tail: 1,
        temperament: 'Intelligent, Interactive, Lively, Playful, Sensitive',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/american-bobtail',
        vetstreet_url: 'http://www.vetstreet.com/cats/american-bobtail',
        vocalisation: 3,
        weight: {imperial: '7 - 16', metric: '3 - 7'},
        wikipedia_url: 'https://en.wikipedia.org/wiki/American_Bobtail',
      },
      {
        adaptability: 5,
        affection_level: 5,
        alt_names: '',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanCurl.aspx',
        child_friendly: 4,
        country_code: 'US',
        country_codes: 'US',
        description:
          'Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.',
        dog_friendly: 5,
        energy_level: 3,
        experimental: 0,
        grooming: 2,
        hairless: 0,
        health_issues: 1,
        hypoallergenic: 0,
        id: 'acur',
        image: {
          height: 964,
          id: 'xnsqonbjW',
          url: 'https://cdn2.thecatapi.com/images/xnsqonbjW.jpg',
          width: 1000,
        },
        indoor: 0,
        intelligence: 3,
        lap: 1,
        life_span: '12 - 16',
        name: 'American Curl',
        natural: 0,
        origin: 'United States',
        rare: 0,
        reference_image_id: 'xnsqonbjW',
        rex: 0,
        shedding_level: 3,
        short_legs: 0,
        social_needs: 3,
        stranger_friendly: 3,
        suppressed_tail: 0,
        temperament:
          'Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/american-curl',
        vetstreet_url: 'http://www.vetstreet.com/cats/american-curl',
        vocalisation: 3,
        weight: {imperial: '5 - 10', metric: '2 - 5'},
        wikipedia_url: 'https://en.wikipedia.org/wiki/American_Curl',
      },
      {
        adaptability: 5,
        affection_level: 5,
        alt_names: 'Domestic Shorthair',
        cfa_url: 'http://cfa.org/Breeds/BreedsAB/AmericanShorthair.aspx',
        child_friendly: 4,
        country_code: 'US',
        country_codes: 'US',
        description:
          'The American Shorthair is known for its longevity, robust health, good looks, sweet personality, and amiability with children, dogs, and other pets.',
        dog_friendly: 5,
        energy_level: 3,
        experimental: 0,
        grooming: 1,
        hairless: 0,
        health_issues: 3,
        hypoallergenic: 0,
        id: 'asho',
        image: {
          height: 1200,
          id: 'JFPROfGtQ',
          url: 'https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg',
          width: 1600,
        },
        indoor: 0,
        intelligence: 3,
        lap: 1,
        life_span: '15 - 17',
        name: 'American Shorthair',
        natural: 1,
        origin: 'United States',
        rare: 0,
        reference_image_id: 'JFPROfGtQ',
        rex: 0,
        shedding_level: 3,
        short_legs: 0,
        social_needs: 4,
        stranger_friendly: 3,
        suppressed_tail: 0,
        temperament: 'Active, Curious, Easy Going, Playful, Calm',
        vcahospitals_url:
          'https://vcahospitals.com/know-your-pet/cat-breeds/american-shorthair',
        vetstreet_url: 'http://www.vetstreet.com/cats/american-shorthair',
        vocalisation: 3,
        weight: {imperial: '8 - 15', metric: '4 - 7'},
        wikipedia_url: 'https://en.wikipedia.org/wiki/American_Shorthair',
      },
    ]);
    setLoadCount(loadCount + 1);
    //console.log(loadCount);
    // fetch 5 breeds with name and image
    axios
      .get(
        `https://api.thecatapi.com/v1/breeds?limit=5&api_key=${settings.api_key}`,
      )
      .then(response => {
        setResults(response.data);
      });
  }, []);

  useEffect(() => {
    let items: TSearchItem[] = [];
    results &&
      results.map((item: any) => items.push({id: item.id, title: item.name}));
    setSearchList(items);
  }, [results]);

  useEffect(() => {
    console.log(selectedItem);
    navigation.navigate('Details', {
      item: results.filter((item: any) => item.id == selectedItem)[0],
    });
  }, [selectedItem]);

  interface TImg {
    id: number;
    width: string;
    height: string;
    url: string;
  }

  interface TItem {
    name: string;
    image: TImg;
    description: string;
    id: number;
  }

  return (
    <SafeAreaView style={mode}>
      <ScrollView>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <FontAwesomeIcon
            icon={faLightbulb}
            size={20}
            color="#CCC"
            style={{margin: 10}}
          />
          <View style={{marginTop: 10}}>
            <LightSwitch />
          </View>
          <SafeAreaView style={{width: '70%'}}>
            <AutocompleteDropdown
              clearOnFocus={true}
              closeOnBlur={true}
              closeOnSubmit={true}
              initialValue={{id: ''}}
              onSelectItem={(item: any) => {
                item && setSelectedItem(item.id);
              }}
              dataSet={searchList}
              ChevronIconComponent={
                <FontAwesomeIcon
                  icon={faChevronCircleDown}
                  size={20}
                  color="#333"
                />
              }
              ClearIconComponent={
                <FontAwesomeIcon icon={faTimesCircle} size={18} color="#333" />
              }
            />
          </SafeAreaView>
        </View>
        <View>
          {results.map((item: TItem) => {
            return (
              <View key={item.name}>
                <View>
                  <Image
                    style={{
                      width: 300,
                      height: 300,
                      padding: 20,
                      marginLeft: 35,
                      marginTop: 20,
                      borderRadius: 150,
                    }}
                    source={{uri: `${item.image.url}`}}
                  />
                  <View style={styles.card}>
                    <Text style={[styles.cardTitle, mode]}>{item.name}</Text>
                    <Text style={[styles.catsDescription, mode]}>
                      {item.description}
                    </Text>
                    <TouchableOpacity
                      style={styles.cardButton}
                      onPress={() =>
                        navigation.navigate('Details', {
                          item: item,
                        })
                      }>
                      <Text style={mode}>Go to details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
