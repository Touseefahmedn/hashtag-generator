module.exports = async (req, res) => {
  // ==== CRITICAL: Add these headers ====
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  // ======================================

  try {
    const keyword = (req.query.keyword || '').toLowerCase().trim();
    if (!keyword) return res.status(400).json({ success: false, error: 'Keyword required' });

    const hashtagDB = {
      fitness: ['#FitnessMotivation', '#GymLife', '#Workout', '#FitFam', '#HealthyLifestyle', '#BodyBuilding', '#Cardio', '#FitLife'],
      tech: ['#Technology', '#TechNews', '#AI', '#Innovation', '#Coding', '#Programming', '#CyberSecurity', '#Gadgets'],
      food: ['#Foodie', '#FoodPorn', '#Cooking', '#Recipe', '#HealthyEating', '#FoodPhotography', '#ChefLife', '#HomeCooking'],
      travel: ['#Travel', '#Wanderlust', '#TravelPhotography', '#Explore', '#Backpacking', '#SoloTravel', '#TravelDiaries', '#Adventure'],
      fashion: ['#Fashion', '#Style', '#OutfitOfTheDay', '#FashionBlogger', '#StreetStyle', '#Trendy', '#Fashionista', '#LookBook'],
      business: ['#Entrepreneur', '#Business', '#Startup', '#Marketing', '#Success', '#Leadership', '#Motivation', '#Growth'],
      education: ['#Education', '#Learning', '#Study', '#Students', '#Knowledge', '#OnlineLearning', '#ELearning', '#StudyTips'],
      photography: ['#Photography', '#PhotoOfTheDay', '#Portrait', '#Nature', '#Photographer', '#Capture', '#Landscape', '#Art'],
      music: ['#Music', '#Song', '#Artist', '#MusicLover', '#NewMusic', '#Playlist', '#Concert', '#InstaMusic'],
      gaming: ['#Gaming', '#Gamer', '#VideoGames', '#PlayStation', '#Xbox', '#GameOn', '#Esports', '#GamingCommunity'],
      default: ['#Trending', '#Viral', '#InstaGood', '#PhotoOfTheDay', '#Love', '#InstaDaily', '#Like4Like', '#Follow4Follow']
    };

    let results = [];
    if (hashtagDB[keyword]) {
      results = hashtagDB[keyword];
    } else {
      for (let category in hashtagDB) {
        if (category !== 'default' && (keyword.includes(category) || category.includes(keyword))) {
          results = [...results, ...hashtagDB[category]];
        }
      }
    }

    if (results.length === 0) results = hashtagDB.default;
    results = [...new Set(results)].sort(() => Math.random() - 0.5);

    res.status(200).json({
      success: true,
      keyword: keyword,
      hashtags: results.slice(0, 10),
      totalFound: results.length
    });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal error' });
  }
};
