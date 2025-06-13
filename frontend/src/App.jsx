import Navbar from "./components/Navbar"


import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";


/* mporting two specific tools, Routes and Route, from a library called react-router-dom. n a traditional website, going to /login loads a new HTML file from the server. React apps are "Single-Page Applications" (SPAs), meaning they only load one HTML file. This library helps you imitate having multiple pages by swapping which components are visible based on the URL in the browser's address bar. This is called routing. */
import { Routes, Route } from "react-router-dom";

/*     useAuthStore is for state management. You need a central place to keep track of data that many components need, like "is the user logged in?". This useAuthStore hook will be your tool to get and update that user information.

    useEffect is for handling side effects. A "side effect" is any work that React doesn't do itself, like fetching data from a server, setting up a subscription, or manually changing the web page. We'll see how it's used below. */
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";

/* This line declares a modern JavaScript arrow function and assigns it to a constant named App. This is the standard way to create a React component. Everything inside the { } is part of the component. */
const App = () => {

  /* You are calling the useAuthStore Hook. It gives you back an object, and you are using "destructuring" (the { } syntax on the left) to pull out two specific things from it:

    authUser: A variable that will hold the current user's data (or be null if they aren't logged in).

    checkAuth: A function that can be called to check with your backend server if the user is currently authenticated.

Why we do it: Your App component needs to know about the user's status to work correctly. This is how it gets that information from your central "auth store". */
  const {authUser, checkAuth } = useAuthStore();

/* This is the useEffect Hook in action. It takes two arguments:

    A function to run: () => { checkAuth() }

    A "dependency array": [checkAuth]
    This tells React: "When this component first loads onto the screen, please run the checkAuth() function." The dependency array tells React to only re-run this effect if the checkAuth function itself were to change (which it probably won't, but it's good practice to list dependencies).

Why we do it: When a user comes back to your website, they might still be logged in from a previous session. You don't want to make them log in every single time. This code runs as soon as the app loads to check their authentication status. */
  useEffect(() => {
    checkAuth()
  },[checkAuth]);

/* This prints the current value of the authUser variable to your browser's developer console. Wrapping the variable in {} is a nice trick that also prints its name, so you'll see { authUser: ... } in the console, which is very helpful for debugging.

Why we do it: This is for you, the developer! It's a way to peek inside your app and see what the state looks like at this point in the code. You can check if the checkAuth() function worked and if authUser is null or has user data. You'll usually remove console.log statements before your app goes live. */
  console.log({authUser});
  return (
    <div>

    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>

    </div>
  )
}
export default App