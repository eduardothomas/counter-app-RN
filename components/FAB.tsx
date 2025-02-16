import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  label: string;
  position?: "left" | "right";

  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        {
          right: position === "right" ? 20 : undefined,
          left: position === "left" ? 20 : undefined,
        },
        pressed ? { opacity: 0.5 } : { opacity: 1 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    //right: 20,
    backgroundColor: "#65558F",
    padding: 20,
    borderRadius: 15,
  },
});
