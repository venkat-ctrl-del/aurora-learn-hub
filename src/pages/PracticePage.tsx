import { motion } from "framer-motion";
import { BookOpen, Headphones, PenTool, Zap, Clock, Target, ChevronRight } from "lucide-react";
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

const practiceCategories = [
  {
    id: "reading",
    name: "Reading",
    icon: BookOpen,
    color: "primary",
    questions: 25,
    avgTime: "15 min",
  },
  {
    id: "listening",
    name: "Listening",
    icon: Headphones,
    color: "secondary",
    questions: 20,
    avgTime: "12 min",
  },
  {
    id: "writing",
    name: "Writing",
    icon: PenTool,
    color: "accent",
    questions: 15,
    avgTime: "20 min",
  },
];

const practiceQuizzes = [
  { id: 1, title: "Grammar Fundamentals", skill: "Reading", questions: 10, time: 8, difficulty: "Beginner" },
  { id: 2, title: "Vocabulary Builder", skill: "Reading", questions: 15, time: 10, difficulty: "Intermediate" },
  { id: 3, title: "Listening Comprehension", skill: "Listening", questions: 10, time: 12, difficulty: "Intermediate" },
  { id: 4, title: "Sentence Construction", skill: "Writing", questions: 8, time: 15, difficulty: "Beginner" },
  { id: 5, title: "Advanced Grammar", skill: "Reading", questions: 20, time: 15, difficulty: "Advanced" },
  { id: 6, title: "Dictation Practice", skill: "Listening", questions: 10, time: 10, difficulty: "Beginner" },
];

const PracticePage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showPractice, setShowPractice] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const filteredQuizzes = activeTab === "all"
    ? practiceQuizzes
    : practiceQuizzes.filter(q => q.skill.toLowerCase() === activeTab);

  const sampleQuestions = [
    {
      type: "mcq",
      question: "Choose the correct form: 'She _____ to the store yesterday.'",
      options: ["go", "goes", "went", "going"],
      correct: 2,
    },
    {
      type: "fill",
      question: "Complete the sentence: 'If I _____ rich, I would travel the world.'",
      options: ["am", "was", "were", "be"],
      correct: 2,
    },
    {
      type: "mcq",
      question: "Which word is a synonym for 'happy'?",
      options: ["sad", "joyful", "angry", "tired"],
      correct: 1,
    },
  ];

  if (showPractice) {
    const question = sampleQuestions[currentQuestion];
    return (
      <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {sampleQuestions.length}
              </span>
              <button
                onClick={() => setShowPractice(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Exit
              </button>
            </div>
            <div className="aurora-progress-bar">
              <div
                className="aurora-progress-fill"
                style={{ width: `${((currentQuestion + 1) / sampleQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="aurora-card">
            <span className="aurora-chip-purple mb-4 inline-block">{question.type === "mcq" ? "Multiple Choice" : "Fill in the Blank"}</span>
            <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAnswer(index)}
                  className={`w-full p-4 rounded-lg text-left transition-all ${
                    selectedAnswer === index
                      ? "bg-primary/20 border-2 border-primary"
                      : "bg-muted/30 border-2 border-transparent hover:bg-muted/50"
                  }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>

            <div className="flex gap-4 mt-6">
              {currentQuestion > 0 && (
                <button
                  onClick={() => {
                    setCurrentQuestion(prev => prev - 1);
                    setSelectedAnswer(null);
                  }}
                  className="aurora-button-ghost flex-1"
                >
                  Previous
                </button>
              )}
              <button
                onClick={() => {
                  if (currentQuestion < sampleQuestions.length - 1) {
                    setCurrentQuestion(prev => prev + 1);
                    setSelectedAnswer(null);
                  } else {
                    setShowPractice(false);
                  }
                }}
                disabled={selectedAnswer === null}
                className="aurora-button-primary flex-1 disabled:opacity-50"
              >
                {currentQuestion < sampleQuestions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <div className="fixed bottom-20 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Practice</h1>
          <p className="text-muted-foreground">Sharpen your skills with targeted exercises</p>
        </motion.div>

        {/* Daily Practice CTA */}
        <motion.div variants={item} className="mb-8">
          <div
            onClick={() => setShowPractice(true)}
            className="aurora-card-interactive bg-aurora-gradient p-8 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Daily Practice</span>
                </div>
                <h2 className="text-2xl font-bold mb-2">Start Today's Session</h2>
                <p className="text-foreground/80">A curated mix of questions across all skills</p>
                <div className="flex items-center gap-4 mt-4 text-sm text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    15 questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    ~10 min
                  </span>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center">
                <ChevronRight className="w-8 h-8" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div variants={item} className="grid md:grid-cols-3 gap-4 mb-8">
          {practiceCategories.map((cat) => (
            <div key={cat.id} className="aurora-card-interactive">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                cat.id === "reading" ? "bg-primary/20 text-primary" 
                : cat.id === "listening" ? "bg-secondary/20 text-secondary"
                : "bg-accent/20 text-accent"
              }`}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">{cat.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">
                {cat.questions} questions available
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>Avg. {cat.avgTime}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Filter Tabs */}
        <motion.div variants={item} className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {["all", "reading", "listening", "writing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Quiz List */}
        <motion.div variants={item} className="grid md:grid-cols-2 gap-4">
          {filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              onClick={() => setShowPractice(true)}
              className="aurora-card-interactive cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold">{quiz.title}</h3>
                <span className={`aurora-chip-${
                  quiz.difficulty === "Beginner" ? "blue" 
                    : quiz.difficulty === "Intermediate" ? "purple" 
                    : "gold"
                }`}>
                  {quiz.difficulty}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Target className="w-3 h-3" />
                  {quiz.questions} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {quiz.time} min
                </span>
                <span className="aurora-chip-purple text-xs">{quiz.skill}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PracticePage;
