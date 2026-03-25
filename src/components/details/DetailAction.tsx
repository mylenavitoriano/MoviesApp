import { View } from 'react-native';
import { MediaDetails } from '../../types/details';

type Props = {
  item: MediaDetails;
  onBack?: () => void;
};

export function DetailAction({ item, onBack }: Props) {
  return <View></View>;
}
