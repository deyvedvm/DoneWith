import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

import colors from '../config/colors';

function ListingDetailsScreen(props) {

  return (
    <View>
      <Image style={styles.image}
             source={require('../assets/beverly-hill-cop-detroit-lions-axel-foley-Jacket-1000x1000.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Black jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/deyvemachado.jpg')}
            title="Deyve Machado"
            subTitle="5 Listings"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '500',
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
