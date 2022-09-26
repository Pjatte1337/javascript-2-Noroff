class Profile {
    constructor(email, name, avatar, banner) {
      this.email = email;
      this.name = name;
      this.avatar = avatar || '/assets/img/avatar-placeholder.png';
      this.banner = banner || '/assets/img/banner-placeholder.png';
    }
  
    async authenticate(password) {
      try {
        const response = await fetch(".../api/social/auth/login");
        if (response.ok) {
          const {accessToken, ...profile} = await response.json()
          // Store accessToken
          // Store profile object
        }
      } catch {
        // Show user a message that they couldn't log in
      }
    }
  }
  
  const christopher = new Profile({ name: "Christopher", email: "example@stud.noroff.no" });
  
  await christopher.authenticate("hunter99");



  export const optionPost = (email, password) => ({
    method: "post",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
   });

   export const tokenOptionPost = (email, password) => ({
    method: "post",
    headers: {
     "Content-Type": "application/json",
     "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify({ email, password }),
   });