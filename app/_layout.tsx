import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        {/* <Stack.Screen
        name="index"
        options={{
          title: "Sticker Smash"
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About"
        }}
      /> */}
        <StatusBar style="light" />
      </Stack>
    </>
  );
}
