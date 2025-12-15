import { motion } from "framer-motion";
import { ArrowLeft, Play, Pause, Volume2, SkipBack, SkipForward, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
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

const lessonData = {
  id: 1,
  title: "Email Etiquette",
  unit: "Business Communication",
  level: "Intermediate",
  duration: 12,
  description: "Learn how to write professional emails that make a great impression.",
  videoUrl: "#",
  vocabulary: [
    { word: "Regards", definition: "A formal way to end an email" },
    { word: "Attachment", definition: "A file sent with an email" },
    { word: "CC", definition: "Carbon copy - send a copy to others" },
    { word: "Subject line", definition: "The title of your email" },
  ],
  transcript: [
    { time: "0:00", text: "Welcome to our lesson on email etiquette." },
    { time: "0:15", text: "Professional emails are essential in the business world." },
    { time: "0:30", text: "Let's start with the subject line - it should be clear and specific." },
    { time: "0:45", text: "Always greet your recipient appropriately." },
    { time: "1:00", text: "Keep your message concise and to the point." },
  ],
};

const quizQuestions = [
  {
    id: 1,
    question: "What should a subject line be?",
    options: ["Long and detailed", "Clear and specific", "Funny and casual", "Empty"],
    correct: 1,
  },
  {
    id: 2,
    question: "What does 'CC' stand for?",
    options: ["Copy Cat", "Carbon Copy", "Clear Communication", "Central Contact"],
    correct: 1,
  },
];

const LessonPage = () => {
  const { lessonId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qId, answer]) => {
    const question = quizQuestions.find(q => q.id === parseInt(qId));
    return acc + (question?.correct === answer ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="flex items-center gap-4 mb-6">
          <Link to="/learn" className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <p className="text-sm text-muted-foreground">{lessonData.unit}</p>
            <h1 className="text-2xl font-bold">{lessonData.title}</h1>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="aurora-chip-purple">{lessonData.level}</span>
            <span className="text-sm text-muted-foreground">{lessonData.duration} min</span>
          </div>
        </motion.div>

        {!showQuiz ? (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Video Player */}
            <motion.div variants={item} className="md:col-span-2">
              <div className="aurora-card p-0 overflow-hidden">
                {/* Video Area */}
                <div className="aspect-video bg-aurora-canvas flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-105"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-primary-foreground" />
                    ) : (
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    )}
                  </button>
                </div>

                {/* Controls */}
                <div className="p-4">
                  {/* Progress Bar */}
                  <div className="aurora-progress-bar mb-4 cursor-pointer">
                    <div className="aurora-progress-fill" style={{ width: `${(currentTime / (lessonData.duration * 60)) * 100}%` }} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <SkipBack className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <Play className="w-5 h-5 text-primary-foreground" />
                        )}
                      </button>
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <SkipForward className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        0:45 / {lessonData.duration}:00
                      </span>
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <motion.div variants={item} className="aurora-card mt-6">
                <h2 className="font-semibold mb-2">About this lesson</h2>
                <p className="text-muted-foreground">{lessonData.description}</p>
                
                <button
                  onClick={() => setShowQuiz(true)}
                  className="mt-4 aurora-button-primary flex items-center gap-2"
                >
                  Take Quiz
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Vocabulary */}
              <motion.div variants={item} className="aurora-card">
                <h3 className="font-semibold mb-4">Key Vocabulary</h3>
                <div className="space-y-3">
                  {lessonData.vocabulary.map((vocab, i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/30">
                      <p className="font-medium text-primary">{vocab.word}</p>
                      <p className="text-sm text-muted-foreground">{vocab.definition}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Transcript */}
              <motion.div variants={item} className="aurora-card">
                <h3 className="font-semibold mb-4">Transcript</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {lessonData.transcript.map((line, i) => (
                    <div
                      key={i}
                      className={`p-2 rounded cursor-pointer transition-colors ${
                        i === 2 ? "bg-primary/20 border-l-2 border-primary" : "hover:bg-muted/30"
                      }`}
                    >
                      <span className="text-xs text-muted-foreground">{line.time}</span>
                      <p className="text-sm">{line.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          /* Quiz Section */
          <motion.div variants={item} className="max-w-2xl mx-auto">
            <div className="aurora-card">
              <h2 className="text-xl font-semibold mb-6">Quick Check</h2>
              
              <div className="space-y-6">
                {quizQuestions.map((q, qIndex) => (
                  <div key={q.id} className="p-4 rounded-lg bg-muted/30">
                    <p className="font-medium mb-4">{qIndex + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((option, oIndex) => {
                        const isSelected = selectedAnswers[q.id] === oIndex;
                        const isCorrect = q.correct === oIndex;
                        const showCorrect = showResults && isCorrect;
                        const showWrong = showResults && isSelected && !isCorrect;
                        
                        return (
                          <button
                            key={oIndex}
                            onClick={() => !showResults && handleAnswer(q.id, oIndex)}
                            disabled={showResults}
                            className={`w-full p-3 rounded-lg text-left transition-all flex items-center gap-3 ${
                              showCorrect
                                ? "bg-green-500/20 border border-green-500"
                                : showWrong
                                ? "bg-red-500/20 border border-red-500"
                                : isSelected
                                ? "bg-primary/20 border border-primary"
                                : "bg-muted/50 hover:bg-muted border border-transparent"
                            }`}
                          >
                            {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-400" />}
                            {showWrong && <XCircle className="w-5 h-5 text-red-400" />}
                            {!showResults && (
                              <div className={`w-5 h-5 rounded-full border-2 ${
                                isSelected ? "border-primary bg-primary" : "border-muted-foreground"
                              }`} />
                            )}
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {showResults ? (
                <div className="mt-6 p-4 rounded-lg bg-muted/30 text-center">
                  <p className="text-2xl font-bold mb-2">
                    {score} / {quizQuestions.length}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {score === quizQuestions.length ? "Perfect score!" : "Keep practicing!"}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link to="/learn" className="aurora-button-ghost">
                      Back to Lessons
                    </Link>
                    <Link to="/practice" className="aurora-button-primary">
                      More Practice
                    </Link>
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  className="mt-6 aurora-button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answers
                </button>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LessonPage;
