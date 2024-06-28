import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'; 
import { ArrowDownTrayIcon, HeartIcon } from 'react-native-heroicons/solid';
import StarRating from 'react-native-star-rating';

export default function Cartas({ game, category }) {
  const navigation = useNavigation(); 

  const goToPage = () => {
    navigation.navigate(game.routeName, { game });
  };

  const [isFavourite, setFavourite] = useState(false);

  return (
    <TouchableOpacity onPress={goToPage}>
      <View style={styles.container}>
        <Image source={game.image} style={styles.image} />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.6)']}
          style={styles.gradient}
        >
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => setFavourite(!isFavourite)}
              style={styles.iconButton}
            >
              <HeartIcon
                size={25}
                color={isFavourite ? 'red' : 'white'}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <StarRating
              disabled={true}
              starSize={15}
              containerStyle={styles.starContainer}
              maxStars={5}
              rating={game.stars}
              emptyStar={require('../assets/imgs/emptyStar.png')}
              fullStar={require('../assets/imgs/fullStar.png')}
            />
            <Text style={styles.title}>{game.title}</Text>
            <View style={styles.details}>
              <ArrowDownTrayIcon size={18} color="lightgray" />
              <Text style={styles.downloads}>{game.downloads} Seguidores</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 4,
    position: 'relative',
  },
  image: {
    width: 290,
    height: 240,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    padding: 16,
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  content: {
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  starContainer: {
    width: 120,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloads: {
    fontSize: 14,
    color: 'lightgray',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
