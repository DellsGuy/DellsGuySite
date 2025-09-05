// User object for profile.html
const user = {
    name: "DellsGuy",
    user_picture: "./images/my_pfp.png",
    bio: "Hi, I'm Dells! I love coding, anime, gaming, and exploring new technologies."
  };
  
  // Function to shuffle array
  function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
  }
  
  // Populate profile page (if on profile.html)
  if (document.getElementById("user_name")) {
    document.getElementById("user_name").textContent = `Welcome, ${user.name}!`;
    document.getElementById("user_picture").src = user.user_picture;
    document.getElementById("user_bio").textContent = user.bio;
  
    fetch('data/users.json')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(chatPartners => {
        const selectedPartners = shuffleArray(chatPartners).slice(0, 3);
        selectedPartners.forEach((partner, index) => {
          document.getElementById(`chat_partner_name_${index + 1}`).textContent = partner.name;
          document.getElementById(`chat_partner_img_${index + 1}`).src = partner.img;
        });
      })
      .catch(error => {
        console.error('Error fetching chat partners:', error);
        for (let i = 1; i <= 3; i++) {
          document.getElementById(`chat_partner_name_${i}`).textContent = "Friend Not Found";
          document.getElementById(`chat_partner_img_${i}`).src = "./images/placeholder.png";
        }
      });
  }
  
  // Populate members section (if on home.html)
  if (document.querySelector(".members-list")) {
    fetch('data/users.json')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(members => {
        const selectedMembers = shuffleArray(members).slice(0, 3);
        selectedMembers.forEach((member, index) => {
          document.getElementById(`member_name_${index + 1}`).textContent = member.name;
          document.getElementById(`member_img_${index + 1}`).src = member.img;
        });
      })
      .catch(error => {
        console.error('Error fetching members:', error);
        for (let i = 1; i <= 3; i++) {
          document.getElementById(`member_name_${i}`).textContent = "Member Not Found";
          document.getElementById(`member_img_${i}`).src = "./images/placeholder.png";
        }
      });
  }