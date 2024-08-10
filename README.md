<div align="center">
  <br />
  <img src="https://github.com/user-attachments/assets/f112ec4f-83ce-4e26-991e-81551842e07c" alt="FitFlow" border="0">
  <br />
</div>

<div align="center">
  <br />
  <img src="https://i.postimg.cc/qqpQcp75/VID-20240808165840-ezgif-com-video-to-gif-converter.gif" alt="GIF Demo" width="320" height="240">
  <br />
</div>


<div align="center">
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/StyledComponents-black?style=for-the-badge&logo=styled-components&logoColor=black&color=pink" alt="styledComponents" />
    <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo"/>
    <img src="https://img.shields.io/badge/Expo%20Go-000020?style=for-the-badge&logo=expo&logoColor=white" alt="ExpoGO"/>
  </div>
</div>
  <h3 align="center">Fit Flow - Fitness App</h3>

   <div align="center">
     Your All In One Fitness Companion !
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔥 [Features](#features)
4. 👨‍💻 [Installation](#installation)
5. 🤟 [Start App](#start-app)
6. 🔗 [Links](#links)


## <a name="introduction">🤖 Introduction</a>

For my final year project, I developed a cutting edge fitness app called Fit Flow featuring an exercise form
detector, pedometer, Bmi calculator, calorie calculator, weekly meal plan generator, exercise programs, user login/signup along with their individual profiles using modern technologies such as React Native, Expo, Expo Go, Appwrite, Styled Components.


<a href="https://discord.com/invite/2T57EUrSGV" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e"/></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- React Native
- Expo
- Expo Go
- Appwrite
- Styled Components

## <a name="features">🔥 Features</a>

👉 **Onboarding Screen**: Engaging graphics and clear instructions welcome users to the app.

👉 **Robust Authentication & Authorization System**: Secure email login safeguards user accounts with options for user signup and login.

👉 **Animated Splash Screen**: A visually appealing splash screen with smooth animations for an impressive first impression.

👉 **BMI & Calorie Calculators**: Calculate BMI and daily calorie needs, suggest calories based on goals, and maintain weight with adjustable BMI and calorie dimensions.

👉 **Discord Community Server**: Connect with other users through a dedicated Discord community server for support and motivation.

👉 **Weekly Meal Plan Generator**: Generates weekly meal plans tailored to calorie needs for efficient meal planning.

👉 **Exercise with the App**: Access a variety of exercises with in-app guidance and tracking.

👉 **Steps Calculator**: Track your daily steps with an integrated steps calculator.

👉 **Weekly Data Save**: Automatically save steps and exercise data on a weekly basis for long-term tracking.

👉 **Exercise Form Detector**: Detects and counts reps of particular exercises based on correct form, saving the data weekly.

👉 **Profile Screen with Detailed Insights**: View account details and activity, including BMI and calorie data, for a personalized experience.

👉 **Logout Functionality**: Easy and secure logout option to protect user data.

👉 **Responsiveness**: Smooth performance and adaptability across various devices and screen sizes for a consistent user experience.

👉 **Animations**: Dynamic animations using the Animatable library to enhance user interaction and engagement throughout the app's UI.

and many more, including code architecture and reusability 

## <a name="installation">👨‍💻 Installation</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

bash
git clone https://github.com/FaatehNaeem/FITNESS-APP-WITH-EXERCISE-DETECTOR.git
cd FITNESS-APP-WITH-EXERCISE-DETECTOR


**Installation**

Install the project dependencies using npm:

bash
npm install


**Expo Go**

Download the [Expo Go](https://expo.dev/go) app onto your device, then use it to scan the QR code from Terminal and run.

**Expo Account Creation**

Go to the link below and signup to create your new expo account

bash
https://expo.dev/


**Create your build by running these commands in the terminal in project directory**

bash
npm install -g eas-cli


**Login using your Expo account credentials**

bash
eas login


**Configure the project**

bash
eas build:configure


**Install Expo Dev Client**

bash
npx expo install expo-dev-client


**Install Expo Dev Client**

bash
npx expo install expo-dev-client


**Create Your Apk file**

bash
eas build --profile development --platform android


**Finally**

After the build is complete, copy the URL to the .apk from the build details page or the link provided when eas build has finished. Then, send that URL to your device and open it on your device to download and install the .apk. Alternatively you may also get a QR code which you can scan with your Expo Go app which will redirect you to your Apk file and you can download it from there on to your mobile phone. 

After the Apk is installed on your mobile phone... In the project terminal run the following command: 

**Run expo**

bash
npx expo start


**You will get the Qr code for the Apk and after scanning it from Expo Go, the app would open up on your Apk.**

## <a name="start-App">🤟 Start App</a>

**Do these changes to enjoy all features of the app:**

1. **Enter your Posetracker API key in all the exercise files in the Form Folder.**
2. **Enter your Spoonacular API key in the DietPlan file in the App Folder.**
3. **Enter all your IDs related to the project in the Appwrite.js file in the lib Folder.**
4. **To achieve all this, you can refer to the links section and visit the mentioned links.**

**Note:**

Appwrite is just like Firebase, so to get all the IDs for the appwrite.js file, you need to set up the database, collections, etc.

**Your collection and attribute structures must be like this:**

1. **Collection name: users**

    Attributes: 
    - username (set data type as string)
    - email (Email)
    - accountId (string)
    - avatar (Url)

2. **Collection name: BMI**

    Attributes: 
    - weight (Integer -> min val = 0, max val = 1000)
    - height (Integer -> min val = 0, max val = 255)
    - bmi (string)
    - userId (Relationship with UserId, one to one, cascade)

3. **Collection name: userCalories**

    Attributes: 
    - age (Integer)
    - ActivityLevel (string)
    - WeightGoal (string)
    - Gender (string)
    - MaintainenceCalories (Integer)
    - Calories (Integer)
    - Bmr (Integer)
    - bmiId (Relationship with BMI collection)

4. **Collection name: steps**

    Attributes: 
    - steps (Integer)
    - distance (Integer, min = 0, max = 10000)
    - caloriesBurnt (Integer, min = 0, max = 10000)
    - date (Datetime)
    - userId (string)

5. **Collection name: formExercises**

    Attributes: 
    - frontPushups (Integer)
    - sidePushups (Integer)
    - frontSquats (Integer)
    - sideSquats (Integer)
    - frontLunges (Integer)
    - sideLunges (Integer)
    - frontPlank (Integer)
    - sidePlank (Integer)
    - balanceOnLeftLeg (Integer)
    - balanceOnRightLeg (Integer)
    - date (Datetime)
    - userId (string)


## <a name="links">🔗 Links</a>

Documentation for creating build can be found [here](https://docs.expo.dev/build/setup/)

Documentation for creating development build can be found [here](https://docs.expo.dev/develop/development-builds/create-a-build/#prerequisites)

Documentation for posetracker Api can be found [here](https://www.posetracker.com/)

Documentation for spoonacular Api can be found [here](https://spoonacular.com/food-api)

Documentation for appwrite Api can be found [here](https://appwrite.io/)
