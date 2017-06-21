import QuestUtil from '../quest/QuestUtil';
import { defaultAssigners } from '../assigner/AssignerUtil';

export const initialState = {
  app: {
    visible: false,
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
  ]
};