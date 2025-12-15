import { motion } from "framer-motion";
import { Globe, Newspaper, Lightbulb, Building2, Users, Beaker, ChevronRight, Calendar } from "lucide-react";
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

const categories = [
  { id: "world", name: "World News", icon: Globe, count: 24 },
  { id: "national", name: "National", icon: Building2, count: 18 },
  { id: "science", name: "Science & Tech", icon: Beaker, count: 15 },
  { id: "discoveries", name: "Discoveries", icon: Lightbulb, count: 12 },
  { id: "people", name: "People & Society", icon: Users, count: 20 },
];

const topics = [
  {
    id: 1,
    category: "world",
    title: "COP29 Climate Summit Key Outcomes",
    summary: "Major decisions from the latest global climate conference and their implications for international policy.",
    date: "2025-12-14",
    difficulty: "Intermediate",
    hasQuiz: true,
  },
  {
    id: 2,
    category: "science",
    title: "Breakthrough in Quantum Computing",
    summary: "Scientists achieve new milestone in quantum error correction, bringing practical quantum computers closer.",
    date: "2025-12-13",
    difficulty: "Advanced",
    hasQuiz: true,
  },
  {
    id: 3,
    category: "national",
    title: "New Education Policy Updates",
    summary: "Government announces changes to national curriculum with focus on digital literacy and critical thinking.",
    date: "2025-12-12",
    difficulty: "Beginner",
    hasQuiz: true,
  },
  {
    id: 4,
    category: "discoveries",
    title: "Ancient City Discovered in Amazon",
    summary: "Archaeologists uncover remains of a sophisticated civilization using advanced LIDAR technology.",
    date: "2025-12-11",
    difficulty: "Intermediate",
    hasQuiz: false,
  },
  {
    id: 5,
    category: "people",
    title: "Nobel Prize Winners 2025",
    summary: "This year's Nobel laureates and their groundbreaking contributions to science and peace.",
    date: "2025-12-10",
    difficulty: "Beginner",
    hasQuiz: true,
  },
  {
    id: 6,
    category: "world",
    title: "Global Trade Agreements Update",
    summary: "New international trade partnerships and their impact on global economy.",
    date: "2025-12-09",
    difficulty: "Advanced",
    hasQuiz: true,
  },
];

const GKPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState<typeof topics[0] | null>(null);

  const filteredTopics = activeCategory === "all"
    ? topics
    : topics.filter(t => t.category === activeCategory);

  if (selectedTopic) {
    return (
      <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to topics
          </button>

          <div className="aurora-card">
            <div className="flex items-center gap-2 mb-4">
              <span className="aurora-chip-blue">{categories.find(c => c.id === selectedTopic.category)?.name}</span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {selectedTopic.date}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-4">{selectedTopic.title}</h1>
            
            <p className="text-lg text-muted-foreground mb-8">{selectedTopic.summary}</p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-semibold mb-4">Key Points</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</span>
                </li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 mt-8">Vocabulary</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {["Summit", "Policy", "Climate", "Agreement"].map(word => (
                  <div key={word} className="p-3 rounded-lg bg-muted/30">
                    <p className="font-medium text-primary">{word}</p>
                    <p className="text-sm text-muted-foreground">Definition of the term in context</p>
                  </div>
                ))}
              </div>
            </div>

            {selectedTopic.hasQuiz && (
              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Test Your Knowledge</h3>
                    <p className="text-sm text-muted-foreground">Take a quick quiz on this topic</p>
                  </div>
                  <button className="aurora-button-primary">
                    Start Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-24 md:pb-8 px-4 md:px-8">
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div variants={item} className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">GK & Current Affairs</h1>
          <p className="text-muted-foreground">Stay informed while improving your English</p>
        </motion.div>

        {/* Categories */}
        <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`aurora-card-interactive text-center ${activeCategory === "all" ? "ring-2 ring-primary" : ""}`}
          >
            <Newspaper className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="font-medium text-sm">All Topics</p>
            <p className="text-xs text-muted-foreground">{topics.length} articles</p>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`aurora-card-interactive text-center ${activeCategory === cat.id ? "ring-2 ring-primary" : ""}`}
            >
              <cat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
              <p className="font-medium text-sm">{cat.name}</p>
              <p className="text-xs text-muted-foreground">{cat.count} articles</p>
            </button>
          ))}
        </motion.div>

        {/* Topics List */}
        <motion.div variants={item}>
          <h2 className="text-lg font-semibold mb-4">Recent Topics</h2>
          <div className="space-y-4">
            {filteredTopics.map((topic) => (
              <motion.div
                key={topic.id}
                variants={item}
                onClick={() => setSelectedTopic(topic)}
                className="aurora-card-interactive cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="aurora-chip-blue text-xs">
                        {categories.find(c => c.id === topic.category)?.name}
                      </span>
                      <span className={`aurora-chip-${
                        topic.difficulty === "Beginner" ? "blue" 
                          : topic.difficulty === "Intermediate" ? "purple" 
                          : "gold"
                      } text-xs`}>
                        {topic.difficulty}
                      </span>
                    </div>
                    <h3 className="font-semibold mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{topic.summary}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {topic.date}
                    </span>
                    {topic.hasQuiz && (
                      <span className="aurora-chip-gold text-xs">Quiz</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GKPage;
