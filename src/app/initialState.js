import QuestUtil from '../quest/QuestUtil';
import { defaultAssigners } from '../assigner/AssignerUtil';

export const initialState = {
  app: {
    visible: true,
    activeState: "Quests",
  },
  assigners: defaultAssigners,
  quests: [
    QuestUtil.newQuest({
      title: "Start up the app",
      description: "I think starting up the app is the beginning of a journey on its own.",
      type: "Important",
      difficulty: 0,
      isComplete: true,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
    QuestUtil.newQuest({
      title: "Kill those slimes!",
      description: "I think as with any good tutorial RPG, we need to vanquish slimes first. Sounds feasible! So pretty please?",
      type: "Hunting",
      difficulty: 1,
      isComplete: false,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
    QuestUtil.newQuest({
      title: "I can't clean!",
      description: "My friends are killing me over my room being dirty, but I haven't had the time to clean it. Can you do it for me?",
      type: "Cleaning",
      difficulty: 2,
      isComplete: false,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
    QuestUtil.newQuest({
      title: "Google Search!",
      description: "So there's this really nice game, but I can't afford it... And, uh, I was wondering... if you can find it perhaps on Google, if you know what I mean...?",
      type: "Errand",
      difficulty: 4,
      isComplete: false,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
    QuestUtil.newQuest({
      title: "Being the Best Idol",
      description: "I'm the very best, because I'm the great Nico Yazawa! Can you defeat me?",
      type: "Boss",
      difficulty: 6,
      isComplete: false,
      timestamp: new Date(),
      assigner: "Nico",
    }),
    QuestUtil.newQuest({
      title: "Trying to React",
      description: "Z-z-zura, so... I have no idea what this technology stuff is, but they're telling me to pick up this thing called React?! What's that? >_<",
      type: "Important",
      difficulty: 8,
      isComplete: false,
      timestamp: new Date(),
      assigner: "Hanamaru",
    }),
    QuestUtil.newQuest({
      title: "Mechanical Keyboards",
      description: "They're too goddamn loud! I need my peace and quiet. Just... Make it easier on me. PLEASE.",
      type: "Errand",
      difficulty: 3,
      isComplete: false,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
    QuestUtil.newQuest({
      title: "fite me irl",
      description: "Just fight me. Then bite me. Hah. I bet you can't even do that.",
      type: "Boss",
      difficulty: 7,
      isComplete: false,
      timestamp: new Date(),
      assigner: defaultAssigners[(Math.floor(Math.random() * 27)) + 1].name,
    }),
  ],
  user: {
    avatar: Math.floor(Math.random() * 300),
  },
};