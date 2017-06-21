import uuid from 'uuid';
import { getRandomBackground } from '../res/ImageUtil';

class QuestUtils {
  static newQuest = ({title, description = "Boring.", type = "Misc.", image = getRandomBackground(), difficulty = 0, isComplete = false, timestamp = new Date(), assigner = "None"}) => (
  {
    id: uuid.v4(),
    title,
    description,
    type,
    image,
    difficulty,
    isComplete,
    timestamp,
    assigner,
  }
);
}

export default QuestUtils;