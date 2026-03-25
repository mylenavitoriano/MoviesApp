import { ImageBackground, StyleSheet, View } from 'react-native';
import { MediaDetails } from '../../types/details';
import { Text } from 'react-native-paper';
import { RatingRow } from '../common/RatingRow';
import { spacing } from '../../theme/spacing';
import { radius } from '../../theme/radius';
import { colors } from '../../theme/colors';

type Props = {
  item: MediaDetails;
  //   onBack?: () => void;
};

export function DetailHero({ item }: Props) {
  return (
    <View style={styles.container}>
      {/* <AppIconButton
        icon={ArrowLeft}
        onPress={onBack}
        style={styles.backButton}
      /> */}

      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={styles.image}
        imageStyle={styles.imageBorder}
      >
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.title}>
          {item.title}
        </Text>

        <RatingRow
          year={item.year}
          label={item.type === 'movie' ? 'Movie' : 'TV'}
          rating={item.rating}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.xl,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: 'rgba(14, 21, 24, 0.82)',
  },
  image: {
    height: 220,
    justifyContent: 'flex-end',
  },
  imageBorder: {
    borderRadius: radius['2xl'],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.20)',
    borderRadius: radius['2xl'],
  },
  content: {
    paddingTop: spacing.xl,
    alignItems: 'center',
  },
  title: {
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
});
