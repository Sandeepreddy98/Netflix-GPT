# Netflix-GPT
- create new react app
- Configured Tailwind css
- Header
- Routing
- Login & Signup
- Form Validations
- useRef Hook
- Firebase setup for creating,hosting and deploying.
- Signup functionality using firebase
- Login functionality using firebase
- Setup Store 
- Navigate to browse post login
- Signout from the application
- Moved OnAuthChanged to common place i.e header component
- Unsubscribed OnAuthChanged when component unmounts.
- TMDB for movie data which gives API
- Created moviesSlice for adding it to redux store
- Created a custom hook 
- UI Planing
  - Primary Container
    - Video Background
    - Video Title
  - Secondary Container
    - Movie list * n
      - Movie card * n
- Primary Container
  - Video Title
    - Created videoTitle component dynamically which takes title,overview,play & info button
    - Created VideoBackground component
  - Video Background
    - Created MovieTrailer slice 
    - Created Customhook for useMovieTrailer
    - addMovieTrailer reducer funcion and use that function to dispatch an action
    - Play movietrailer in backgound using youtube iframe.
- Secondary Container
  - Movie List based on category from the MoviesSlice which is in redux store
    - Now playing
      - Used the same movies slice which has list of now playing movies.
    - Popular Movies
      - Created addPopularMovies reducer function in movies slice.
      - Created a custom hook for Popular movies in that used dispath action to update to moviesSlice.
    - Upcoming Movies
      - Created addUpComingMovies reducer function in movies slice.
      - Created a custom hook for Upcoming movies in that used dispath action to update to moviesSlice.
    - Top Rated Movies
      - Created addTopRatedMovies reducer function in movies slice.
      - Created a custom hook for Top Rated Movies in that used dispath action to update to moviesSlice.
     - Display cards for showing movies.

- GPT Feature - Movie Recommendation
  - Created search bar for movie search
  - Created a slice for the state whether to show need  to display GPT Search screen or movies recomme dation screen.

## Features
- Signup Component
  - UI for login
  - Form validation for signup
- Login Component
  - UI for Signup
  - Form Validations for Login
- Firebase Setup
  - Create a project in firebase
  - npm install -g firebase-tools - for getting firebase in our system
  - firebase login
  - firebase init
  - firebase deploy
- Signup Functionality
  - Signup functionality using firebase - createUserWithEmailAndPassword
  - SignIn functionality using firebase - signInWithEmailAndPassword
- Setup Redux store
  - created appStore
  - created userSlice
  - Provided appStore to application
  - dispatch action addUser when user login
  - dispatch action removeUser whe user logout
- Navigate to /login post signup
- Navigate to /browse post login
- Signout using Firebase and redirect to '/login'
- OnAuthChanged code moved to header.
  - If user logged in it'll redirect to '/browse' even if we try to navigate '/login'
  - If user logged out in it'll redirect to '/login' even if we try to navigate '/browse'
- Unsubscribed OnAuthChanged when component unmounts.
- TMDB for Movies
  - Created a account in TMDB website
  - nowPlayingMovies API and added those movies to the store.
- Created a custom hook
  - For reducing the code in browse component i.e Single Responsibility Principle.
- Primary Container
  - Video Title 
    - Show Title,Description,Play button and info button
  - Video Background
    - Playing trailer from youtube in the background.
- Secondary Container
  - Now playing 
  - Top Rated 
  - Popular 
  - Upcoming movies 
    - Movie card to display card. 
- GPT Movie Recommendation
  - GPT slice for storing the GPT related data in store
  - Created UI for GPT search bar with button.