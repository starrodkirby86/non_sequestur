import uuid from 'uuid';

class QuestUtils {
  static newQuest = (title, description = "Boring.", type = "Misc.", difficulty = 0, isComplete = false, timestamp = new Date()) => (
  {
    id: uuid.v4(),
    title,
    description,
    type,
    difficulty,
    isComplete,
    timestamp,
  }
);
}

export default QuestUtils;