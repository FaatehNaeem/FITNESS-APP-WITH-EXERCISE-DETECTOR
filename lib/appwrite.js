import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";


export const appwriteConfig = {
  endpoint: "your appwrite endpoint",
  platform: "your appwrite platform",
  projectId: "your appwrite project Id",
  databaseId: "your appwrite database Id",
  userCollectionId: "your appwrite user collection Id",
  bmiCollectionId: "your appwrite Bmi collection Id",
  caloriesCollectionId: "your appwrite calories collection Id",
  formExercisesCollectionId: "your appwrite form Exercises Collection Id",
  stepsCollectionId: "your appwrite steps Collection Id"
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user

export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error('Account creation failed');

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
}


// Sign In

export async function signIn(email, password) {
  try {
    const sessionExists = await checkSession();

    if (sessionExists) {
      await account.deleteSession('current');
    }

    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Check if session exists

export async function checkSession() {
  try {
    const currentAccount = await account.get();
    return !!currentAccount;
  } catch (error) {
    return false;
  }
}

// Get Account

export async function getAccount() {
  try {
    const currentAccount = await account.get();
    return currentAccount;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Get Current User

export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw new Error('No current account');

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser || currentUser.documents.length === 0) throw new Error('No current user');

    const user = currentUser.documents[0];

    const userBmi = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.bmiCollectionId,
      [Query.equal("userId", user.$id)]
    );
    const bmiData = userBmi.documents.length > 0 ? userBmi.documents[0] : null;

    const userCalories = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.caloriesCollectionId,
      [Query.equal("bmiId", bmiData.$id)]
    );
    const calorieData = userCalories.documents.length > 0 ? userCalories.documents[0] : null;

    const userFormExercises = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.formExercisesCollectionId,
      [Query.equal("userId", user.$id)]
    );
    const userFormData = userFormExercises.documents.length > 0 ? userFormExercises.documents : [];

    const userSteps = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.stepsCollectionId,
      [Query.equal("userId", user.$id)]
    );
    const userStepsData = userSteps.documents.length > 0 ? userSteps.documents : [];

    return { ...user, bmi: bmiData, calories: calorieData, form: userFormData, steps: userStepsData };

  } catch (error) {
    console.log(error);
    return null;
  }
}


//logout user //

export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}


//create bmi//

export async function createBmi(documentId, weight, height, bmi) {
  try {
    const Bmi = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.bmiCollectionId,
      ID.unique(),
      {
        weight: weight,
        height: height,
        bmi: bmi,
        userId: documentId
      }
    );

    return Bmi;
  } catch (error) {
    console.error('Error creating BMI document:', error);
    throw error;
  }
}


// store calories //

export async function createCalories(documentId, age, ActivityLevel, WeightGoal, Gender, Bmr, MaintainenceCalories, Calories) {
  try {
    const result = databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.caloriesCollectionId,
      ID.unique(),
      {
        age: age,
        ActivityLevel: ActivityLevel,
        WeightGoal: WeightGoal,
        Gender: Gender,
        Bmr: Bmr,
        MaintainenceCalories: MaintainenceCalories,
        Calories: Calories,
        bmiId: documentId,
      }
    )
    if (result) {
      return result
    }
    else {
      console.log(error)
    }
  }
  catch (error) {
    throw error
  }
}

//store form data //

export async function createFormExercises(documentId, data) {
  try {
    const result = databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.formExercisesCollectionId,
      ID.unique(),
      {
        frontPushups: data.frontPushups,
        sidePushups: data.sidePushups,
        frontSquats: data.frontSquats,
        sideSquats: data.sideSquats,
        frontLunges: data.frontLunges,
        sideLunges: data.sideLunges,
        frontPlank: data.frontPlank,
        sidePlank: data.sidePlank,
        balanceOnLeftLeg: data.balance_leg_left,
        balanceOnRightLeg: data.balance_leg_right,
        userId: documentId,
        date: new Date().toISOString()
      }
    );
    console.log('Document created:', result);
    return result;
  } catch (error) {
    console.error('Failed to create document:', error);
  }
};


// update bmi // 
export async function UpdateBmiDimensions(documentId, weight, height, bmi) {
  try {
    const result = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.bmiCollectionId,
      documentId,
      {
        weight: weight,
        height: height,
        bmi: bmi,
      }
    )
    return result;
  }
  catch (error) {
    console.error('Failed to update document:', error);
  }
}


// update calories // 
export async function UpdateCalorieDimensions(documentId, age, ActivityLevel, WeightGoal, Gender, Bmr, MaintainenceCalories, Calories) {
  try {
    const result = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.caloriesCollectionId,
      documentId,
      {
        age: age,
        ActivityLevel: ActivityLevel,
        WeightGoal: WeightGoal,
        Gender: Gender,
        Bmr: Bmr,
        MaintainenceCalories: MaintainenceCalories,
        Calories: Calories,
      }
    )
    return result;
  }
  catch (error) {
    console.error('Failed to update document:', error);
  }
}


// update calories based on bmi // 
export async function UpdateCalorieDimensionsBasedOnBmi(documentId, Bmr, MaintainenceCalories, Calories) {
  try {
    const result = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.caloriesCollectionId,
      documentId,
      {
        Bmr: Bmr,
        MaintainenceCalories: MaintainenceCalories,
        Calories: Calories,
      }
    );
    return result;
  } catch (error) {
    console.error('Failed to update document:', error);
    throw new Error('Failed to update calorie dimensions');
  }
}


// store steps data //
export const createStepsData = async (documentId, steps, distance, caloriesBurnt) => {
  try {
    const result = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.stepsCollectionId,
      ID.unique(),
      {
        userId: documentId,
        steps,
        distance,
        caloriesBurnt,
        date: new Date().toISOString(),
      }
    );
    return result;
  } catch (error) {
    console.error('Failed to save steps data:', error);
    throw error;
  }
};