import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(25)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        friction: 5,
        tension: 45,
        useNativeDriver: true,
      }),

      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      Animated.delay(500),

      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),

        Animated.spring(titleY, {
          toValue: 0,
          friction: 7,
          useNativeDriver: true,
        }),
      ]),

      Animated.delay(250),

      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.08,
          duration: 1400,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1400,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#050510"
      />

      <Animated.View
        style={[
          styles.glow,
          {
            transform: [{ scale: pulse }],
          },
        ]}
      />

      <View style={styles.circleOne} />
      <View style={styles.circleTwo} />

      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      >
        <View style={styles.logoOuter}>
          <View style={styles.logoInner}>
            <Text style={styles.logoQ}>Q</Text>
          </View>
        </View>
      </Animated.View>

      <Animated.View
        style={{
          opacity: titleOpacity,
          transform: [{ translateY: titleY }],
        }}
      >
        <Text style={styles.title}>QUANTUM</Text>

        <View style={styles.titleLine}>
          <View style={styles.line} />
          <View style={styles.dot} />
          <View style={styles.line} />
        </View>
      </Animated.View>

      <Animated.Text
        style={[
          styles.subtitle,
          {
            opacity: subtitleOpacity,
          },
        ]}
      >
        Learn. Practice. Achieve.
      </Animated.Text>

      <Animated.Text
        style={[
          styles.description,
          {
            opacity: subtitleOpacity,
          },
        ]}
      >
        Your intelligent learning companion
      </Animated.Text>

      <Animated.View
        style={[
          styles.bottom,
          {
            opacity: subtitleOpacity,
          },
        ]}
      >
        <View style={styles.loadingTrack}>
          <View style={styles.loadingProgress} />
        </View>

        <Text style={styles.loadingText}>
          INITIALIZING QUANTUM
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050510",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width,
    backgroundColor: "#332080",
    opacity: 0.22,
  },

  circleOne: {
    position: "absolute",
    width: width * 1.3,
    height: width * 1.3,
    borderRadius: width,
    borderWidth: 1,
    borderColor: "#25204A",
    top: height * 0.15,
    opacity: 0.5,
  },

  circleTwo: {
    position: "absolute",
    width: width * 1.7,
    height: width * 1.7,
    borderRadius: width,
    borderWidth: 1,
    borderColor: "#17152F",
    top: height * 0.02,
    opacity: 0.7,
  },

  logoContainer: {
    marginBottom: 28,
  },

  logoOuter: {
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 2,
    borderColor: "#7658FF",
    alignItems: "center",
    justifyContent: "center",
  },

  logoInner: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: "#111027",
    borderWidth: 1,
    borderColor: "#9A84FF",
    alignItems: "center",
    justifyContent: "center",
  },

  logoQ: {
    color: "#FFFFFF",
    fontSize: 58,
    fontWeight: "900",
    fontStyle: "italic",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "900",
    letterSpacing: 7,
    textAlign: "center",
  },

  titleLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  line: {
    width: 42,
    height: 1,
    backgroundColor: "#5D46D8",
  },

  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#8B6DFF",
    marginHorizontal: 8,
  },

  subtitle: {
    color: "#E4E1FF",
    fontSize: 17,
    fontWeight: "600",
    letterSpacing: 1,
    marginTop: 25,
  },

  description: {
    color: "#77758F",
    fontSize: 13,
    marginTop: 9,
    letterSpacing: 0.4,
  },

  bottom: {
    position: "absolute",
    bottom: 45,
    alignItems: "center",
  },

  loadingTrack: {
    width: 145,
    height: 3,
    borderRadius: 5,
    backgroundColor: "#17162A",
    overflow: "hidden",
    marginBottom: 12,
  },

  loadingProgress: {
    width: "70%",
    height: "100%",
    backgroundColor: "#7658FF",
    borderRadius: 5,
  },

  loadingText: {
    color: "#55536B",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
