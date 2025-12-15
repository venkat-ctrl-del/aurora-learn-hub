import { motion } from "framer-motion";
import { Play, Clock, BookOpen, Headphones, PenTool, Lock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const units = [
  {
    id: 1,
    title: "Foundations of English",
    description: "Master the basics of English grammar and vocabulary",
    lessons: 5,
    completed: 5,
    level: "Beginner",
    skills: ["Reading", "Writing"],
  },
  {
    id: 2,
    title: "Everyday Conversations",
    description: "Learn practical phrases for daily communication",
    lessons: 5,
    completed: 3,
    level: "Beginner",
    skills: ["Listening", "Speaking"],
  },
  {
    id: 3,
    title: "Business Communication",
    description: "Professional English for workplace success",
    lessons: 5,
    completed: 2,
    level: "Intermediate",
    skills: ["Reading", "Writing", "Listening"],
  },
  {
    id: 4,
    title: "Academic English",
    description: "Prepare for academic reading and writing tasks",
    lessons: 5,
    completed: 0,
    level: "Intermediate",
    skills: ["Reading", "Writing"],
  },
  {
    id: 5,
    title: "Advanced Vocabulary",
    description: "Expand your vocabulary with advanced words and idioms",
    lessons: 5,
    completed: 0,
    level: "Advanced",
    skills: ["Reading"],
    locked: true,
  },
];

const lessons = [
  { id: 1, unitId: 3, title: "Email Etiquette", duration: 12, completed: true, skill: "Writing" },
  { id: 2, unitId: 3, title: "Meeting Vocabulary", duration: 15, completed: true, skill: "Listening" },
  { id: 3, unitId: 3, title: "Presentation Skills", duration: 18, completed: false, skill: "Speaking" },
  { id: 4, unitId: 3, title: "Report Writing", duration: 20, completed: false, skill: "Writing" },
  { id: 5, unitId: 3, title: "Negotiation Language", duration: 16, completed: false, skill: "Listening" },
];

const skillIcons = {
  Reading: BookOpen,
  Writing: PenTool,
  Listening: Headphones,
  Speaking: Play,
};

const LearnPage = () => {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(3);
  const [filter, setFilter] = useState<string>("all");

  const filteredUnits = filter === "all" 
    ? units 
    : units.filter(u => u.level.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Learn English</h1>
          <p className="text-muted-foreground">Structured lessons to improve your skills</p>
        </motion.div>

        {/* Filters */}
        <motion.div variants={item} className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["all", "beginner", "intermediate", "advanced"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Units List */}
          <div className="md:col-span-1 space-y-4">
            <motion.h2 variants={item} className="text-lg font-semibold text-muted-foreground mb-4">
              Units
            </motion.h2>
            {filteredUnits.map((unit) => {
              const progress = (unit.completed / unit.lessons) * 100;
              const isSelected = selectedUnit === unit.id;
              
              return (
                <motion.div
                  key={unit.id}
                  variants={item}
                  onClick={() => !unit.locked && setSelectedUnit(unit.id)}
                  className={`aurora-card cursor-pointer transition-all duration-300 ${
                    isSelected ? "ring-2 ring-primary" : ""
                  } ${unit.locked ? "opacity-50 cursor-not-allowed" : "hover:border-primary/30"}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold">{unit.title}</h3>
                    {unit.locked ? (
                      <Lock className="w-4 h-4 text-muted-foreground" />
                    ) : progress === 100 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    ) : (
                      <span className={`aurora-chip-${unit.level === "Beginner" ? "blue" : unit.level === "Intermediate" ? "purple" : "gold"}`}>
                        {unit.level}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{unit.description}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    {unit.skills.map((skill) => {
                      const Icon = skillIcons[skill as keyof typeof skillIcons];
                      return (
                        <div key={skill} className="w-6 h-6 rounded bg-muted flex items-center justify-center" title={skill}>
                          <Icon className="w-3 h-3 text-muted-foreground" />
                        </div>
                      );
                    })}
                  </div>

                  <div className="aurora-progress-bar">
                    <div className="aurora-progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {unit.completed} of {unit.lessons} lessons
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Lessons List */}
          <div className="md:col-span-2">
            <motion.h2 variants={item} className="text-lg font-semibold text-muted-foreground mb-4">
              Lessons
            </motion.h2>
            
            {selectedUnit ? (
              <div className="space-y-4">
                {lessons.map((lesson, index) => {
                  const SkillIcon = skillIcons[lesson.skill as keyof typeof skillIcons];
                  return (
                    <motion.div
                      key={lesson.id}
                      variants={item}
                      custom={index}
                    >
                      <Link to={`/learn/${lesson.id}`}>
                        <div className="aurora-card-interactive flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            lesson.completed ? "bg-green-500/20" : "bg-primary/20"
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-green-400" />
                            ) : (
                              <span className="text-xl font-bold text-primary">{index + 1}</span>
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{lesson.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {lesson.duration} min
                              </span>
                              <span className="flex items-center gap-1">
                                <SkillIcon className="w-3 h-3" />
                                {lesson.skill}
                              </span>
                            </div>
                          </div>

                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            lesson.completed ? "bg-muted" : "bg-primary"
                          }`}>
                            <Play className={`w-5 h-5 ${lesson.completed ? "text-muted-foreground" : "text-primary-foreground"}`} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="aurora-card text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a unit to view lessons</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LearnPage;
