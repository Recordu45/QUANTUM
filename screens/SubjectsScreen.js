import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  StatusBar,
} from "react-native";

const subjects = [
  {
    id: "math",
    icon: "∑",
    name: "Mathematics",
    chapters: "15 Chapters",
    progress: 72,
  },
  {
    id: "science",
    icon: "⚛",
    name: "Science",
    chapters: "18 Chapters",
    progress: 48,
  },
  {
    id: "english",
    icon: "A",
    name: "English",
    chapters: "12 Chapters",
    progress: 64,
  },
  {
    id: "social",
    icon: "🌍",
    name: "Social Science",
    chapters: "16 Chapters",
    progress: 31,
  },
  {
    id: "computer",
    icon: "</>",
    name: "Computer",
    chapters: "10 Chapters",
    progress: 55,
  },
  {
    id: "hindi",
    icon: "अ",
    name: "Hindi",
    chapters: "14 Chapters",
    progress: 82,
  },
];

export default function SubjectsScreen() {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(25)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slide, {
        toValue: 0,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#060611"
      />

      <Animated.View
        style={[
          styles.wrapper,
          {
            opacity: fade,
            transform: [{ translateY: slide }],
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>
                QUANTUM LEARNING
              </Text>

              <Text style={styles.title}>
                Your Subjects
              </Text>

              <Text style={styles.subtitle}>
                Choose a subject and continue learning.
              </Text>
            </View>

            <TouchableOpacity style={styles.searchButton}>
              <Text style={styles.searchIcon}>⌕</Text>
            </TouchableOpacity>
          </View>

          {/* CLASS SELECTOR */}

          <View style={styles.classCard}>
            <View>
              <Text style={styles.classLabel}>
                CURRENT CLASS
              </Text>

              <Text style={styles.className}>
                Class 10
              </Text>
            </View>

            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeText}>
                Change
              </Text>
            </TouchableOpacity>
          </View>

          {/* SUBJECT COUNT */}

          <View style={styles.infoRow}>
            <Text style={styles.infoTitle}>
              All Subjects
            </Text>

            <Text style={styles.infoCount}>
              {subjects.length} Subjects
            </Text>
          </View>

          {/* SUBJECT LIST */}

          {subjects.map((subject) => (
            <TouchableOpacity
              key={subject.id}
              style={styles.subjectCard}
              activeOpacity={0.8}
            >
              <View style={styles.subjectIcon}>
                <Text style={styles.subjectIconText}>
                  {subject.icon}
                </Text>
              </View>

              <View style={styles.subjectInfo}>
                <Text style={styles.subjectName}>
                  {subject.name}
                </Text>

                <Text style={styles.chapterText}>
                  {subject.chapters}
                </Text>

                <View style={styles.progressTrack}>
                  <View
                    style={[
                      styles.progressFill,
                      {
                        width: `${subject.progress}%`,
                      },
                    ]}
                  />
                </View>

                <Text style={styles.progressText}>
                  {subject.progress}% completed
                </Text>
              </View>

              <View style={styles.arrowCircle}>
                <Text style={styles.arrow}>
                  →
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* AI SECTION */}

          <View style={styles.aiCard}>
            <View style={styles.aiBadge}>
              <Text style={styles.aiBadgeText}>
                AI LEARNING
              </Text>
            </View>

            <Text style={styles.aiTitle}>
              Don't know what to study?
            </Text>

            <Text style={styles.aiDescription}>
              QUANTUM can recommend your next topic
              based on your progress.
            </Text>

            <TouchableOpacity style={styles.aiButton}>
              <Text style={styles.aiButtonText}>
                Get Recommendation
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            QUANTUM • Learn. Practice. Achieve.
          </Text>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#060611",
  },

  wrapper: {
    flex: 1,
  },

  content: {
    padding: 18,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  eyebrow: {
    color: "#8068FF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 2,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "900",
    marginTop: 5,
  },

  subtitle: {
    color: "#77758D",
    fontSize: 12,
    marginTop: 7,
    maxWidth: 260,
  },

  searchButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#111027",
    borderWidth: 1,
    borderColor: "#282449",
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    color: "#A091FF",
    fontSize: 27,
  },

  classCard: {
    backgroundColor: "#111027",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#292448",
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  classLabel: {
    color: "#69677E",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1.5,
  },

  className: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 5,
  },

  changeButton: {
    backgroundColor: "#201A45",
    borderRadius: 10,
    paddingHorizontal: 13,
    paddingVertical: 8,
  },

  changeText: {
    color: "#9A87FF",
    fontSize: 11,
    fontWeight: "700",
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  infoTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  infoCount: {
    color: "#68667C",
    fontSize: 11,
  },

  subjectCard: {
    backgroundColor: "#101021",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#222239",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  subjectIcon: {
    width: 53,
    height: 53,
    borderRadius: 17,
    backgroundColor: "#1B1737",
    borderWidth: 1,
    borderColor: "#5140B8",
    alignItems: "center",
    justifyContent: "center",
  },

  subjectIconText: {
    color: "#A18FFF",
    fontSize: 22,
    fontWeight: "900",
  },

  subjectInfo: {
    flex: 1,
    marginLeft: 13,
    marginRight: 10,
  },

  subjectName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  chapterText: {
    color: "#66647A",
    fontSize: 10,
    marginTop: 3,
  },

  progressTrack: {
    height: 5,
    backgroundColor: "#222238",
    borderRadius: 5,
    marginTop: 9,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#7658FF",
    borderRadius: 5,
  },

  progressText: {
    color: "#66647A",
    fontSize: 9,
    marginTop: 4,
  },

  arrowCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1A1733",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: {
    color: "#9481FF",
    fontSize: 18,
  },

  aiCard: {
    backgroundColor: "#171332",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#39305F",
    padding: 20,
    marginTop: 17,
  },

  aiBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#28204C",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 7,
  },

  aiBadgeText: {
    color: "#A191FF",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1,
  },

  aiTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 13,
  },

  aiDescription: {
    color: "#85819C",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 6,
  },

  aiButton: {
    backgroundColor: "#7658FF",
    borderRadius: 13,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 15,
  },

  aiButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
  },

  footer: {
    color: "#414054",
    textAlign: "center",
    fontSize: 9,
    marginTop: 28,
  },
});
