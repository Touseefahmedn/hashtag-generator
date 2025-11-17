# 🚀 Hashtag Generator API

**Live API:** `https://hashtag-generator-rankmine-tools.vercel.app/api/generate`

---

## 🎯 Usage

```bash
# Get hashtags for any topic
https://hashtag-generator-rankmine-tools.vercel.app/api/generate?keyword=tech
https://hashtag-generator-rankmine-tools.vercel.app/api/generate?keyword=fitness

📋 Supported Categories
| Category      | Hashtags Available                                                                                 |
| ------------- | -------------------------------------------------------------------------------------------------- |
| `tech`        | #Technology #TechNews #AI #Innovation #Coding #Programming #CyberSecurity #Gadgets                 |
| `fitness`     | #FitnessMotivation #GymLife #Workout #FitFam #HealthyLifestyle #BodyBuilding #Cardio #FitLife      |
| `food`        | #Foodie #FoodPorn #Cooking #Recipe #HealthyEating #FoodPhotography #ChefLife #HomeCooking          |
| `travel`      | #Travel #Wanderlust #TravelPhotography #Explore #Backpacking #SoloTravel #TravelDiaries #Adventure |
| `fashion`     | #Fashion #Style #OutfitOfTheDay #FashionBlogger #StreetStyle #Trendy #Fashionista #LookBook        |
| `business`    | #Entrepreneur #Business #Startup #Marketing #Success #Leadership #Motivation #Growth               |
| `education`   | #Education #Learning #Study #Students #Knowledge #OnlineLearning #ELearning #StudyTips             |
| `photography` | #Photography #PhotoOfTheDay #Portrait #Nature #Photographer #Capture #Landscape #Art               |
| `music`       | #Music #Song #Artist #MusicLover #NewMusic #Playlist #Concert #InstaMusic                          |
| `gaming`      | #Gaming #Gamer #VideoGames #PlayStation #Xbox #GameOn #Esports #GamingCommunity                    |

📤 API Response Format
Success Response (200):
{
  "success": true,
  "keyword": "tech",
  "hashtags": ["#Technology", "#TechNews", "#AI", "#Innovation", "#Coding", "#Programming", "#CyberSecurity", "#Gadgets"],
  "totalFound": 8
}

Error Response (400):
{
  "success": false,
  "error": "Keyword parameter is required"
}

🛠️ Deploy

# Install Vercel CLI
npm i -g vercel

# Login (free)
vercel login

# Deploy to production
vercel --prod

📱 Embed in Blogger
<iframe src="https://hashtag-generator-rankmine-tools.vercel.app" 
        width="100%" 
        height="600px" 
        frameborder="0">
</iframe>

⭐ Star this repo if it helped!

---

### **🚀 Final Step: Git Push**

Vercel GitHub se connected hai, toh bas **push karo**:

```bash
# Terminal mein:
git add .
git commit -m "fix: README typos and final cleanup"
git push origin main

