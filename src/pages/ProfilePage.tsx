import { motion } from "framer-motion";
import { User, Settings, Bell, Moon, Volume2, LogOut, ChevronRight, Mail, Globe } from "lucide-react";
import { useState } from "react";

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

const ProfilePage = () => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Profile</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </motion.div>

        {/* Profile Card */}
        <motion.div variants={item} className="aurora-card mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-aurora-gradient flex items-center justify-center aurora-glow">
              <User className="w-10 h-10 text-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Learning Enthusiast</h2>
              <p className="text-muted-foreground">learner@example.com</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="aurora-chip-purple">Intermediate</span>
                <span className="aurora-chip-gold">7 Day Streak</span>
              </div>
            </div>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div variants={item} className="grid grid-cols-3 gap-4 mb-6">
          <div className="aurora-card text-center">
            <p className="text-2xl font-bold text-primary">2,450</p>
            <p className="text-sm text-muted-foreground">Total XP</p>
          </div>
          <div className="aurora-card text-center">
            <p className="text-2xl font-bold text-secondary">12</p>
            <p className="text-sm text-muted-foreground">Lessons</p>
          </div>
          <div className="aurora-card text-center">
            <p className="text-2xl font-bold text-accent">85%</p>
            <p className="text-sm text-muted-foreground">Avg Score</p>
          </div>
        </motion.div>

        {/* Account Settings */}
        <motion.div variants={item} className="aurora-card mb-6">
          <h3 className="font-semibold mb-4">Account Settings</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">learner@example.com</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="font-medium">Interface Language</p>
                  <p className="text-sm text-muted-foreground">English</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </motion.div>

        {/* Preferences */}
        <motion.div variants={item} className="aurora-card mb-6">
          <h3 className="font-semibold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Notifications</p>
                  <p className="text-sm text-muted-foreground">Daily reminders and updates</p>
                </div>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-foreground transition-transform ${
                    notifications ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Sound Effects</p>
                  <p className="text-sm text-muted-foreground">Feedback sounds in quizzes</p>
                </div>
              </div>
              <button
                onClick={() => setSoundEffects(!soundEffects)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  soundEffects ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-foreground transition-transform ${
                    soundEffects ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Reduce Motion</p>
                  <p className="text-sm text-muted-foreground">Minimize animations</p>
                </div>
              </div>
              <button
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  reducedMotion ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-foreground transition-transform ${
                    reducedMotion ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Learning Goal */}
        <motion.div variants={item} className="aurora-card mb-6">
          <h3 className="font-semibold mb-4">Learning Goal</h3>
          <div className="grid grid-cols-2 gap-3">
            {["School exam", "Job / Interviews", "General improvement", "Travel"].map((goal, i) => (
              <button
                key={goal}
                className={`p-3 rounded-lg text-sm font-medium transition-all ${
                  i === 2 
                    ? "bg-primary/20 border-2 border-primary text-primary" 
                    : "bg-muted/30 border-2 border-transparent hover:bg-muted/50"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sign Out */}
        <motion.div variants={item}>
          <button className="w-full flex items-center justify-center gap-2 p-4 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
