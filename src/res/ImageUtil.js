const IMAGE_LIMIT = 20;
export const getRandomBackground = () => `/res/bg/${Math.floor(Math.random() * IMAGE_LIMIT) + 1}.jpg`;