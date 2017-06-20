import QuestUtil from '../quest/QuestUtil';

export const initialState = {
  quests: [
    QuestUtil.newQuest("Start up the app",
      "I think starting up the app is the beginning of a journey on its own.",
      "Important",
      0,
      true,
      new Date()),
    QuestUtil.newQuest("Kill those slimes!",
    "I think as with any good tutorial RPG, we need to vanquish slimes first. Sounds feasible! So pretty please?",
    "Hunting",
    1,
    false,
    new Date()),
    QuestUtil.newQuest("I can't clean!",
    "My friends are killing me over my room being dirty, but I haven't had the time to clean it. Can you do it for me?",
    "Cleaning",
    2,
    false,
    new Date()),
  ]
};