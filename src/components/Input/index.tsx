import {
  View,
  TextInput,
  TextInputProps,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { theme } from "@styles/theme";

type Props = TextInputProps & {
  isLoading?: boolean;
};

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <View testID="input-wrapper" style={styles.container}>
      <TextInput
        testID="input"
        style={styles.input}
        placeholderTextColor={theme.colors.gray_400}
        {...rest}
      />

      {isLoading && (
        <ActivityIndicator
          testID="input-loading"
          color={theme.colors.blue_light}
        />
      )}
    </View>
  );
}
