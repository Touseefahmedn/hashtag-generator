// index.js - FREE Hashtag Generator
module.exports = async (req, res) => {
  const keyword = req.query.keyword?.toLowerCase() || '';
  
  const hashtagDB = {
    fitness: ['#FitnessMotivation', '#GymLife', '#Workout', '#FitFam', '#HealthyLifestyle', '#BodyBuilding', '#Cardio', '#FitLife'],
    tech: ['#Technology', '#TechNews', '#AI', '#Innovation', '#Coding', '#Programming', '#CyberSecurity', '#Gadgets'],
    food: ['#Foodie', '#FoodPorn', '#Cooking', '#Recipe', '#HealthyEating', '#FoodPhotography', '#ChefLife', '#HomeCooking'],
    travel: ['#Travel', '#Wanderlust', '#TravelPhotography', '#Explore', '#Backpacking', '#SoloTravel', '#TravelDiaries', '#Adventure'],
    fashion: ['#Fashion', '#Style', '#OutfitOfTheDay', '#FashionBlogger', '#StreetStyle', '#Trendy', '#Fashionista', '#LookBook'],
    business: ['#Entrepreneur', '#Business', '#Startup', '#Marketing', '#Success', '#Leadership', '#Motivation', '#Growth'],
    education: ['#Education', '#Learning', '#Study', '#Students', '#Knowledge', '#OnlineLearning', '#Elearning', '#StudyTips'],
    photography: ['#Photography', '#PhotoOfTheDay', '#Portrait', '#Nature', '#Photographer', '#Capture', '#Landscape', '#Art'],
    music: ['#Music', '#Song', '#Artist', '#MusicLover', '#NewMusic', '#Playlist', '#Concert', '#InstaMusic'],
    gaming: ['#Gaming', '#Gamer', '#VideoGames', '#PlayStation', '#Xbox', '#GameOn', '#Esports', '#GamingCommunity']
  };
  
  let results = [];
  for(let category in hashtagDB) {
    if(keyword.includes(category) || category.includes(keyword)) {
      results = [...results, ...hashtagDB[category]];
    }
  }
  
  if(results.length === 0) {
    results = ['#Trending', '#Viral', '#InstaGood', '#PhotoOfTheDay', '#Love', '#InstaDaily', '#Like4Like', '#Follow4Follow'];
  }
  
  res.json({ success: true, keyword, hashtags: results.slice(0, 10) });
};
