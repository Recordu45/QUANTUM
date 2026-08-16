import React, { useState, useEffect, useRef } from "react";
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

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);

  function openSubjects() {
    setScreen("subjects");
  }

  function openSubject(subject) {
    setSelectedSubject(subject);
    setScreen("chapters");
  }

  function goHome() {
    setScreen("home");
    setSelectedSubject(null);
  }

  if (screen === "subjects") {
    return (
      <SubjectsScreen
        onBack={goHome}
        onSelectSubject={openSubject}
      />
    );
  }

  if (screen === "chapters") {
    return (
      <ChapterScreen
        subject={selectedSubject}
        onBack={() => setScreen("subjects")}
      />
    );
  }

  return <HomeScreen onSubjects={openSubjects} />;
}

/* =========================
   HOME SCREEN
========================= */

function HomeScreen({ onSubjects }) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#060611"
      />

      <Animated.View
        style={[
          styles.flex,
          {
            opacity: fade,
          },
        ]}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.smallText}>
                GOOD MORNING
              </Text>

              <Text style={styles.name}>
                Student
              </Text>
            </View>

            <View style={styles.profileButton}>
              <Text style={styles.profileText}>
                S
              </Text>
            </View>
          </View>

          <View style={styles.welcomeCard}>
            <View>
              <Text style={styles.welcomeTitle}>
                Ready to learn?
              </Text>

              <Text style={styles.welcomeSubtitle}>
                Keep your momentum going.
              </Text>
            </View>

            <Text style={styles.quantumSymbol}>
              Q
            </Text>
          </View>

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

          <SectionTitle
            title="Continue Learning"
            action="See all"
          />

          <View style={styles.learningCard}>
            <View style={styles.subjectIcon}>
              <Text style={styles.subjectIconText}>
                M
              </Text>
            </View>

            <View style={styles.learningInfo}>
              <Text style={styles.subjectName}>
                Mathematics
              </Text>

              <Text style={styles.chapterText}>
                Chapter 04 • Algebra
              </Text>

              <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
              </View>

              <Text style={styles.progressText}>
                72% completed
              </Text>
            </View>

            <Text style={styles.arrow}>
              →
            </Text>
          </View>

          <SectionTitle title="Quick Access" />

          <View style={styles.quickGrid}>
            <QuickCard
              icon="📚"
              title="Subjects"
              onPress={onSubjects}
            />

            <QuickCard
              icon="🧠"
              title="Quiz"
            />

            <QuickCard
              icon="📝"
              title="Notes"
            />

            <QuickCard
              icon="⏱"
              title="Timer"
            />
          </View>

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

              <Text style={styles.goalPercent}>
                80%
              </Text>
            </View>

            <View style={styles.goalTrack}>
              <View style={styles.goalProgress} />
            </View>
          </View>

          <TouchableOpacity
            style={styles.quizCard}
            activeOpacity={0.85}
          >
            <Text style={styles.quizBadge}>
              DAILY QUIZ
            </Text>

            <Text style={styles.quizTitle}>
              Test your knowledge
            </Text>

            <Text style={styles.quizDescription}>
              10 questions • Medium difficulty
            </Text>

            <View style={styles.quizButton}>
              <Text style={styles.quizButtonText}>
                Start Quiz
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <BottomNav
          active="Home"
          onHome={() => {}}
          onSubjects={onSubjects}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

/* =========================
   SUBJECTS SCREEN
========================= */

function SubjectsScreen({
  onBack,
  onSelectSubject,
}) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#060611"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.pageHeader}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
          >
            <Text style={styles.backText}>
              ‹
            </Text>
          </TouchableOpacity>

          <View style={styles.pageHeaderText}>
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
        </View>

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

        <View style={styles.infoRow}>
          <Text style={styles.infoTitle}>
            All Subjects
          </Text>

          <Text style={styles.infoCount}>
            {subjects.length} Subjects
          </Text>
        </View>

        {subjects.map((subject) => (
          <TouchableOpacity
            key={subject.id}
            style={styles.subjectCard}
            activeOpacity={0.8}
            onPress={() => onSelectSubject(subject)}
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
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================
   CHAPTER SCREEN
========================= */

function ChapterScreen({
  subject,
  onBack,
}) {
  const chapters = [
    "Introduction",
    "Basic Concepts",
    "Important Formulas",
    "Practice Problems",
    "Revision",
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#060611"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={onBack}
        >
          <Text style={styles.backText}>
            ‹
          </Text>
        </TouchableOpacity>

        <Text style={styles.eyebrow}>
          SUBJECT
        </Text>

        <Text style={styles.title}>
          {subject?.name}
        </Text>

        <Text style={styles.subtitle}>
          Select a chapter to start learning.
        </Text>

        <View style={styles.subjectHero}>
          <Text style={styles.heroIcon}>
            {subject?.icon}
          </Text>

          <View style={{ flex: 1 }}>
            <Text style={styles.heroTitle}>
              {subject?.name}
            </Text>

            <Text style={styles.heroSubtitle}>
              {subject?.progress}% overall progress
            </Text>

            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${subject?.progress || 0}%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <Text style={styles.chapterHeading}>
          Chapters
        </Text>

        {chapters.map((chapter, index) => (
          <TouchableOpacity
            key={chapter}
            style={styles.chapterCard}
            activeOpacity={0.8}
          >
            <View style={styles.chapterNumber}>
              <Text style={styles.chapterNumberText}>
                {String(index + 1).padStart(2, "0")}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.chapterTitle}>
                {chapter}
              </Text>

              <Text style={styles.chapterMeta}>
                Lesson • Quiz • Practice
              </Text>
            </View>

            <Text style={styles.arrow}>
              →
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>
            Start Learning
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================
   COMPONENTS
========================= */

function StatCard({ icon, value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>
        {icon}
      </Text>

      <Text style={styles.statValue}>
        {value}
      </Text>

      <Text style={styles.statLabel}>
        {label}
      </Text>
    </View>
  );
}

function QuickCard({
  icon,
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.quickCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.quickIcon}>
        {icon}
      </Text>

      <Text style={styles.quickTitle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function SectionTitle({
  title,
  action,
}) {
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

function BottomNav({
  active,
  onHome,
  onSubjects,
}) {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={onHome}
      >
        <Text
          style={[
            styles.navIcon,
            active === "Home" && styles.navActive,
          ]}
        >
          ⌂
        </Text>

        <Text
          style={[
            styles.navLabel,
            active === "Home" && styles.navActive,
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navItem}
        onPress={onSubjects}
      >
        <Text
          style={[
            styles.navIcon,
            active === "Subjects" && styles.navActive,
          ]}
        >
          ▣
        </Text>

        <Text
          style={[
            styles.navLabel,
            active === "Subjects" && styles.navActive,
          ]}
        >
          Subjects
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>
          ?
        </Text>

        <Text style={styles.navLabel}>
          Quiz
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>
          ◒
        </Text>

        <Text style={styles.navLabel}>
          Progress
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navIcon}>
          ●
        </Text>

        <Text style={styles.navLabel}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/* =========================
   STYLES
========================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#060611",
  },

  flex: {
    flex: 1,
  },

  content: {
    padding: 18,
    paddingBottom: 110,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  learningInfo: {
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

  arrow: {
    color: "#9481FF",
    fontSize: 20,
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
    color: "#A191FF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  quizTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 12,
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
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
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

  pageHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 25,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#111027",
    borderWidth: 1,
    borderColor: "#292448",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 30,
    lineHeight: 30,
  },

  pageHeaderText: {
    flex: 1,
    marginLeft: 13,
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
  },

  classCard: {
    backgroundColor: "#111027",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#292448",
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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

  subjectInfo: {
    flex: 1,
    marginLeft: 13,
    marginRight: 10,
  },

  arrowCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#1A1733",
    alignItems: "center",
    justifyContent: "center",
  },

  subjectHero: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111027",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#292448",
    padding: 18,
    marginTop: 20,
    marginBottom: 25,
  },

  heroIcon: {
    color: "#9A87FF",
    fontSize: 42,
    fontWeight: "900",
    width: 60,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  heroSubtitle: {
    color: "#77758D",
    fontSize: 11,
    marginTop: 5,
  },

  chapterHeading: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 12,
  },

  chapterCard: {
    backgroundColor: "#101021",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#222239",
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  chapterNumber: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#1A1733",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  chapterNumberText: {
    color: "#8F7CFF",
    fontSize: 12,
    fontWeight: "900",
  },

  chapterTitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  chapterMeta: {
    color: "#626077",
    fontSize: 9,
    marginTop: 4,
  },

  startButton: {
    backgroundColor: "#7658FF",
    borderRadius: 16,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 15,
  },

  startButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },
});
