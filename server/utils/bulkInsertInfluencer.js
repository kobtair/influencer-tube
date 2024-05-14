const axios = require('axios')

async function fetchUserInfo(username) {
    const headers = {
      "X-TOKEN": "6s2votburo0xx5ww", 
      "X-APP": "instagram",
    };
  
    const params = {
      username: username,
    };
    const url = "https://api.isaas.top/ins/profile/username";
  
    try {
      const response = await axios.get(url, {
        params: params,
        headers: headers,
        timeout: 40000, 
      });
      return response.data; // Move this line inside the then block
    } catch (error) {
      console.error(`Failed to fetch user information for ${username}:`, error);
      throw error;
    }
  }

  async function processUsernames(usernames) {
    for (const user of usernames) {
      try {
        const {biography,
          full_name,
          category_name,
          profile_pic_url_hd,
          username,
          edge_followed_by,
          edge_owner_to_timeline_media} = await fetchUserInfo(user);
          const images = []
          edge_owner_to_timeline_media.edges.filter((_, i)=> i<3).map(node=>images.push(node.display_url))
          const password = await bcrypt.hash("123", 10);
        await Influencer.create({
          email: `${username}@gmail.com`,
          fullName: full_name,
          biography,
          instagramLink: `https://www.instagram.com/${username}`,
          niche: category_name,
          followerCount: edge_followed_by.count,
          password,
          profilePic: profile_pic_url_hd,
          username,
          images
        }); // Store user information in the database
        console.log(`Stored information for user ${username}`);
      } catch (error) {
        // Handle error (e.g., retry logic)
        console.error(`Failed to process user :`, error);
      }
    }
  }
  
//   processUsernames(instagramUsernames)
//   .then(() => {
//     console.log("Processing complete");
//   })
//   .catch((error) => {
//     console.error("An error occurred during processing:", error);
//   });


  modeule.exports = processUsernames