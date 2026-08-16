import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function App() {
  const fade = useRef(new Animated.Value(0)).current;
  const slide = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 700,
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
      <StatusBar barStyle="light-content" backgroundColor="#060611" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={{
            opacity: fade,
            transform: [{ translateY: slide }],
          }}
        >
          {/* HEADER */}

          <View style={styles.header}>
            <View>
              <Text style={styles.smallText}>GOOD MORNING</Text>
              <Text style={styles.name}>Student</Text>
            </View>

            <TouchableOpacity style={styles.profileButton}>
              <Text style={styles.profileText}>S</Text>
            </TouchableOpacity>
          </View>

          {/* WELCOME CARD */}

          <View style={styles.welcomeCard}>
            <View>
              <Text style={styles.welcomeTitle}>
                Ready to learn?
              </Text>

              <Text style={styles.welcomeSubtitle}>
                Keep your momentum going.
              </Text>
            </View>

            <Text style={styles.quantumSymbol}>Q</Text>
          </View>

          {/* STATS */}

          <View style={styles.statsRow}>
            <StatCard
              icon="🔥"
              value="7"
              label="Day Streak"
            />

            <StatCard
              icon="⚡"
              value="1,240"
              label="XP Points"
            />

            <StatCard
              icon="◷"
              value="2h 35m"
              label="Study Time"
            />
          </View>

          {/* CONTINUE LEARNING */}

          <SectionTitle
            title="Continue Learning"
            action="See all"
          />

          <View style={styles.learningCard}>
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>M</Text>
            </View>

            <View style={styles.learningInfo}>
              <Text style={styles.subjectName}>
                Mathematics
              </Text>

              <Text style={styles.chapter}>
                Chapter 04 • Algebra
              </Text>

              <View style={styles.progressBackground}>
                <View style={styles.progress} />
              </View>

              <Text style={styles.progressText}>
                72% completed
              </Text>
            </View>

            <TouchableOpacity style={styles.continueButton}>
              <Text style={styles.continueText}>→</Text>
            </TouchableOpacity>
          </View>

          {/* QUICK ACCESS */}

          <SectionTitle title="Quick Access" />

          <View style={styles.quickGrid}>
            <QuickCard icon="🧠" title="Quiz" />
            <QuickCard icon="📝" title="Notes" />
            <QuickCard icon="⏱" title="Timer" />
            <QuickCard icon="📊" title="Progress" />
          </View>

          {/* TODAY GOAL */}

          <SectionTitle title="Today's Goal" />

          <View style={styles.goalCard}>
            <View style={styles.goalHeader}>
              <View>
                <Text style={styles.goalTitle}>
                  Complete 3 study sessions
                </Text>

                <Text style={styles.goalSubtitle}>
                  2 of 3 sessions completed
                </Text>
              </View>

              <Text style={styles.goalPercent}>80%</Text>
            </View>

            <View style={styles.goalTrack}>
              <View style={styles.goalProgress} />
            </View>
          </View>

          {/* DAILY QUIZ */}

          <View style={styles.quizCard}>
            <View style={styles.quizBadge}>
              <Text style={styles.quizBadgeText}>
                DAILY QUIZ
              </Text>
            </View>

            <Text style={styles.quizTitle}>
              Test your knowledge
            </Text>

            <Text style={styles.quizDescription}>
              10 questions • Medium difficulty
            </Text>

            <TouchableOpacity style={styles.quizButton}>
              <Text style={styles.quizButtonText}>
                Start Quiz
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footer}>
            QUANTUM • Learn. Practice. Achieve.
          </Text>
        </Animated.View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}

      <View style={styles.bottomNav}>
        <NavItem icon="⌂" label="Home" active />
        <NavItem icon="▣" label="Subjects" />
        <NavItem icon="?" label="Quiz" />
        <NavItem icon="◒" label="Progress" />
        <NavItem icon="●" label="Profile" />
      </View>
    </SafeAreaView>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function QuickCard({ icon, title }) {
  return (
    <TouchableOpacity style={styles.quickCard}>
      <Text style={styles.quickIcon}>{icon}</Text>

      <Text style={styles.quickTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function SectionTitle({ title, action }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>

      {action ? (
        <Text style={styles.sectionAction}>
          {action}
        </Text>
      ) : null}
    </View>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Text
        style={[
          styles.navIcon,
          active && styles.navActive,
        ]}
      >
        {icon}
      </Text>

      <Text
        style={[
          styles.navLabel,
          active && styles.navActive,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#060611",
  },

  container: {
    flex: 1,
    backgroundColor: "#060611",
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  smallText: {
    color: "#77758D",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
    marginTop: 4,
  },

  profileButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#17152B",
    borderWidth: 1,
    borderColor: "#5F49D8",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  welcomeCard: {
    minHeight: 145,
    borderRadius: 26,
    padding: 22,
    backgroundColor: "#111027",
    borderWidth: 1,
    borderColor: "#27234A",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },

  welcomeSubtitle: {
    color: "#85829D",
    fontSize: 13,
    marginTop: 7,
  },

  quantumSymbol: {
    color: "#7658FF",
    fontSize: 80,
    fontWeight: "900",
    fontStyle: "italic",
    opacity: 0.8,
  },

  statsRow: {
    flexDirection: "row",
    gap: 9,
    marginTop: 14,
  },

  statCard: {
    flex: 1,
    minHeight: 105,
    backgroundColor: "#0F0F20",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#202039",
    padding: 12,
  },

  statIcon: {
    fontSize: 18,
  },

  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 8,
  },

  statLabel: {
    color: "#68667C",
    fontSize: 9,
    marginTop: 3,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 12,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  sectionAction: {
    color: "#8066FF",
    fontSize: 12,
    fontWeight: "700",
  },

  learningCard: {
    backgroundColor: "#101021",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#24243A",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  subjectIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#1C1838",
    borderWidth: 1,
    borderColor: "#5744C8",
    alignItems: "center",
    justifyContent: "center",
  },

  subjectIconText: {
    color: "#9B88FF",
    fontSize: 22,
    fontWeight: "900",
  },

  learningInfo: {
    flex: 1,
    marginLeft: 13,
  },

  subjectName: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  chapter: {
    color: "#737187",
    fontSize: 11,
    marginTop: 4,
  },

  progressBackground: {
    height: 5,
    backgroundColor: "#222238",
    borderRadius: 5,
    marginTop: 11,
    overflow: "hidden",
  },

  progress: {
    width: "72%",
    height: "100%",
    backgroundColor: "#7658FF",
  },

  progressText: {
    color: "#77758D",
    fontSize: 9,
    marginTop: 5,
  },

  continueButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#201A48",
    alignItems: "center",
    justifyContent: "center",
  },

  continueText: {
    color: "#9B88FF",
    fontSize: 21,
  },

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  quickCard: {
    width: "48%",
    minHeight: 95,
    backgroundColor: "#101021",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#222239",
    padding: 15,
    justifyContent: "center",
  },

  quickIcon: {
    fontSize: 24,
  },

  quickTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
  },

  goalCard: {
    backgroundColor: "#101021",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#24243A",
    padding: 18,
  },

  goalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  goalTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  goalSubtitle: {
    color: "#727086",
    fontSize: 11,
    marginTop: 5,
  },

  goalPercent: {
    color: "#8D78FF",
    fontSize: 18,
    fontWeight: "900",
  },

  goalTrack: {
    height: 7,
    backgroundColor: "#222238",
    borderRadius: 8,
    marginTop: 15,
    overflow: "hidden",
  },

  goalProgress: {
    width: "80%",
    height: "100%",
    backgroundColor: "#7658FF",
  },

  quizCard: {
    backgroundColor: "#171332",
    borderRadius: 22,
    padding: 20,
    marginTop: 27,
    borderWidth: 1,
    borderColor: "#39305F",
  },

  quizBadge: {
    alignSelf: "flex-start",
    backgroundColor: "#28204C",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  quizBadgeText: {
    color: "#9D8CFF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  quizTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 14,
  },

  quizDescription: {
    color: "#85819C",
    fontSize: 12,
    marginTop: 6,
  },

  quizButton: {
    backgroundColor: "#7658FF",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 17,
  },

  quizButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  footer: {
    color: "#45435A",
    textAlign: "center",
    fontSize: 10,
    marginTop: 28,
  },

  bottomNav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 76,
    backgroundColor: "#0B0B18",
    borderTopWidth: 1,
    borderTopColor: "#1F1F32",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 5,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 55,
  },

  navIcon: {
    color: "#57556B",
    fontSize: 20,
  },

  navLabel: {
    color: "#57556B",
    fontSize: 9,
    marginTop: 4,
  },

  navActive: {
    color: "#8975FF",
  },
});
