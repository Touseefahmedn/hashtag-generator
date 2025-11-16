// index.js - FREE Hashtag Generator - No API Key Needed
module.exports = async (req, res) => {
  const keyword = req.query.keyword?.toLowerCase() || '';
  
  // VIRAL HASHTAG DATABASE - 10 Categories
  const hashtagDB = {
    fitness: ['#FitnessMotivation', '#GymLife', '#Workout', '#FitFam', '#HealthyLifestyle', '#BodyBuilding', '#Cardio', '#FitLife', '#NoPainNoGain', '#FitnessGoals'],
    tech: ['#Technology', '#TechNews', '#AI', '#Innovation', '#Coding', '#Programming', '#CyberSecurity', '#Gadgets', '#Software', '#TechTips'],
    food: ['#Foodie', '#FoodPorn', '#Cooking', '#Recipe', '#HealthyEating', '#FoodPhotography', '#ChefLife', '#HomeCooking', '#FoodLove', '#Yummy'],
    travel: ['#Travel', '#Wanderlust', '#TravelPhotography', '#Explore', '#Backpacking', '#SoloTravel', '#TravelDiaries', '#Adventure', '#Nature', '#Trip'],
    fashion: ['#Fashion', '#Style', '#OutfitOfTheDay', '#FashionBlogger', '#StreetStyle', '#Trendy', '#Fashionista', '#LookBook', '#OOTD', '#Design'],
    business: ['#Entrepreneur', '#Business', '#Startup', '#Marketing', '#Success', '#Leadership', '#Motivation', '#Growth', '#Hustle', '#Sales'],
    education: ['#Education', '#Learning', '#Study', '#Students', '#Knowledge', '#OnlineLearning', '#Elearning', '#StudyTips', '#Teacher', '#Books'],
    photography: ['#Photography', '#PhotoOfTheDay', '#Portrait', '#Nature', '#Photographer', '#Capture', '#Landscape', '#Art', '#Canon', '#Nikon'],
    music: ['#Music', '#Song', '#Artist', '#MusicLover', '#NewMusic', '#Playlist', '#Concert', '#InstaMusic', '#Rock', '#Pop'],
    gaming: ['#Gaming', '#Gamer', '#VideoGames', '#PlayStation', '#Xbox', '#GameOn', '#Esports', '#GamingCommunity', '#Stream', '#Twitch']
  };
  
  // Find matching hashtags
  let results = [];
  for(let category in hashtagDB) {
    if(keyword.includes(category) || category.includes(keyword)) {
      results = [...results, ...hashtagDB[category]];
    }
  }
  
  // Fallback viral hashtags
  if(results.length === 0) {
    results = ['#Trending', '#Viral', '#InstaGood', '#PhotoOfTheDay', '#Love', '#InstaDaily', '#Like4Like', '#Follow4Follow', '#InstaLove', '#PicOfTheDay'];
  }
  
  // Return JSON
  res.json({ 
    success: true,
    keyword: keyword,
    hashtags: results.slice(0, 10)
  });
};
