import { motion } from "framer-motion";
import { Play, Clock, BookOpen, Target, Globe, Flame, ChevronRight, CheckCircle2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      {/* Background gradient orb */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Good evening, <span className="aurora-gradient-text">Learner</span>
          </h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="aurora-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">2,450</p>
              <p className="text-sm text-muted-foreground">Total XP</p>
            </div>
          </div>
          <div className="aurora-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <Flame className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold">7</p>
              <p className="text-sm text-muted-foreground">Day Streak</p>
            </div>
          </div>
          <div className="aurora-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Lessons Done</p>
            </div>
          </div>
          <div className="aurora-card flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold">85%</p>
              <p className="text-sm text-muted-foreground">Avg Score</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            {/* Continue Learning */}
            <motion.div variants={item}>
              <Link to="/learn/1" className="block">
                <div className="aurora-card-interactive group overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Continue Learning</p>
                      <h3 className="text-xl font-semibold">Unit 3: Business Communication</h3>
                    </div>
                    <span className="aurora-chip-purple">Intermediate</span>
                  </div>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>15 min</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>Lesson 2 of 5</span>
                    </div>
                  </div>

                  <div className="aurora-progress-bar mb-4">
                    <div className="aurora-progress-fill" style={{ width: "40%" }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">40% complete</p>
                    <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                      <span className="font-medium">Continue</span>
                      <Play className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Today's Tasks */}
            <motion.div variants={item} className="aurora-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Today's Tasks</h3>
                <span className="text-sm text-muted-foreground">2 of 3 done</span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="line-through text-muted-foreground">Complete any lesson</span>
                  <span className="aurora-chip-purple ml-auto">+50 XP</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="line-through text-muted-foreground">Take one GK quiz</span>
                  <span className="aurora-chip-blue ml-auto">+30 XP</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                  <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                  <span>Score 70%+ in practice</span>
                  <span className="aurora-chip-gold ml-auto">+100 XP</span>
                </div>
              </div>
            </motion.div>

            {/* Weekly Activity */}
            <motion.div variants={item} className="aurora-card">
              <h3 className="text-lg font-semibold mb-4">This Week's Activity</h3>
              <div className="flex items-end justify-between h-32 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                  const heights = [60, 85, 45, 100, 70, 30, 80];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${heights[i]}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full rounded-t-md bg-aurora-gradient"
                      />
                      <span className="text-xs text-muted-foreground">{day}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* GK Highlight */}
            <motion.div variants={item}>
              <Link to="/gk/1" className="block">
                <div className="aurora-card-interactive">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-accent" />
                    <span className="text-sm text-accent font-medium">Today's GK</span>
                  </div>
                  <h3 className="font-semibold mb-2">COP29 Climate Summit Outcomes</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Key decisions from the latest global climate conference and their implications.
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <span className="text-sm font-medium">Read more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Quick Practice */}
            <motion.div variants={item} className="aurora-card">
              <h3 className="text-lg font-semibold mb-4">Quick Practice</h3>
              <div className="space-y-3">
                <Link to="/practice" className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">Reading</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                <Link to="/practice" className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <Target className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="font-medium">Listening</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
                <Link to="/practice" className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">Writing</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              </div>
            </motion.div>

            {/* Streak Calendar */}
            <motion.div variants={item} className="aurora-card">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">7 Day Streak!</h3>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div
                    key={day}
                    className="flex-1 h-2 rounded-full bg-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">Keep it up! Complete today's tasks to maintain your streak.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
