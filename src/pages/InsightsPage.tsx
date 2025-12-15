import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Headphones, PenTool, Globe, Trophy, Calendar, Clock, Target } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const weeklyData = [
  { day: "Mon", reading: 85, listening: 70, writing: 60 },
  { day: "Tue", reading: 90, listening: 75, writing: 65 },
  { day: "Wed", reading: 75, listening: 80, writing: 70 },
  { day: "Thu", reading: 88, listening: 85, writing: 75 },
  { day: "Fri", reading: 92, listening: 78, writing: 80 },
  { day: "Sat", reading: 80, listening: 72, writing: 68 },
  { day: "Sun", reading: 95, listening: 88, writing: 82 },
];

const achievements = [
  { id: 1, name: "First Steps", description: "Complete your first lesson", earned: true },
  { id: 2, name: "Week Warrior", description: "7-day streak", earned: true },
  { id: 3, name: "Quiz Master", description: "Score 100% on 5 quizzes", earned: true },
  { id: 4, name: "GK Explorer", description: "Read 20 GK articles", earned: false },
  { id: 5, name: "Perfectionist", description: "Complete a unit with 90%+ avg", earned: false },
];

const InsightsPage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Insights</h1>
          <p className="text-muted-foreground">Track your learning progress</p>
        </motion.div>

        {/* Overview Stats */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="aurora-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Time Spent</span>
            </div>
            <p className="text-2xl font-bold">24.5h</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +2.3h this week
            </p>
          </div>
          <div className="aurora-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-secondary" />
              </div>
              <span className="text-sm text-muted-foreground">Units Done</span>
            </div>
            <p className="text-2xl font-bold">2 / 5</p>
            <p className="text-xs text-muted-foreground mt-1">40% complete</p>
          </div>
          <div className="aurora-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Avg Score</span>
            </div>
            <p className="text-2xl font-bold">85%</p>
            <p className="text-xs text-green-400 flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3" />
              +5% improvement
            </p>
          </div>
          <div className="aurora-card">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-sm text-muted-foreground">Active Days</span>
            </div>
            <p className="text-2xl font-bold">18</p>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Charts */}
          <div className="md:col-span-2 space-y-6">
            {/* Weekly Performance */}
            <motion.div variants={item} className="aurora-card">
              <h2 className="text-lg font-semibold mb-6">Weekly Performance</h2>
              <div className="h-64 flex items-end gap-4">
                {weeklyData.map((data, i) => (
                  <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex flex-col gap-1 h-48">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.reading * 0.5}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-primary rounded-t"
                        title={`Reading: ${data.reading}%`}
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.listening * 0.3}%` }}
                        transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                        className="w-full bg-secondary"
                        title={`Listening: ${data.listening}%`}
                      />
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${data.writing * 0.2}%` }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                        className="w-full bg-accent rounded-b"
                        title={`Writing: ${data.writing}%`}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{data.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-xs text-muted-foreground">Reading</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-secondary" />
                  <span className="text-xs text-muted-foreground">Listening</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-accent" />
                  <span className="text-xs text-muted-foreground">Writing</span>
                </div>
              </div>
            </motion.div>

            {/* Skill Breakdown */}
            <motion.div variants={item} className="aurora-card">
              <h2 className="text-lg font-semibold mb-6">Skill Breakdown</h2>
              <div className="space-y-4">
              {[
                  { name: "Reading", icon: BookOpen, score: 88, bgColor: "bg-primary/20", textColor: "text-primary" },
                  { name: "Listening", icon: Headphones, score: 76, bgColor: "bg-secondary/20", textColor: "text-secondary" },
                  { name: "Writing", icon: PenTool, score: 72, bgColor: "bg-accent/20", textColor: "text-accent" },
                  { name: "General Knowledge", icon: Globe, score: 65, bgColor: "bg-green-500/20", textColor: "text-green-400" },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${skill.bgColor} flex items-center justify-center`}>
                      <skill.icon className={`w-5 h-5 ${skill.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.score}%</span>
                      </div>
                      <div className="aurora-progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.score}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="aurora-progress-fill"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div variants={item} className="aurora-card">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-accent" />
                <h2 className="text-lg font-semibold">Achievements</h2>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-3 rounded-lg ${
                      achievement.earned ? "bg-accent/10 border border-accent/20" : "bg-muted/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${!achievement.earned && "text-muted-foreground"}`}>
                          {achievement.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                          <Trophy className="w-3 h-3 text-accent" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Unit Progress */}
            <motion.div variants={item} className="aurora-card">
              <h2 className="text-lg font-semibold mb-4">Unit Progress</h2>
              <div className="space-y-3">
                {[
                  { name: "Foundations", progress: 100 },
                  { name: "Conversations", progress: 60 },
                  { name: "Business", progress: 40 },
                  { name: "Academic", progress: 0 },
                  { name: "Advanced", progress: 0 },
                ].map((unit) => (
                  <div key={unit.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{unit.name}</span>
                      <span className="text-xs text-muted-foreground">{unit.progress}%</span>
                    </div>
                    <div className="aurora-progress-bar h-1.5">
                      <div
                        className="aurora-progress-fill"
                        style={{ width: `${unit.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InsightsPage;
