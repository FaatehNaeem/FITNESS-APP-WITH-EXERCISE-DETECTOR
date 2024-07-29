import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  const [isFirstTimeLogin, setIsFirstTimeLogin] = useState(true);

  const [user, setUser] = useState(null);
  const [Bmi, setBmi] = useState(null);
  const [userCalories, setUserCalories] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedId, setSelectedId] = useState('Male');
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [age, setAge] = useState(null);

  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [stepsData, setStepsData] = useState([])

  const [formData, setFormData] = useState([]);
  const [repsData, setRepsData] = useState({
    balance_leg_left: 0,
    balance_leg_right: 0,
    frontPushups: 0,
    sidePushups: 0,
    frontSquats: 0,
    sideSquats: 0,
    frontLunges: 0,
    sideLunges: 0,
    frontPlank: 0,
    sidePlank: 0
  });


  useEffect(() => {
    const loadRepsCounter = async () => {
      if (user) {
        try {
          const key = `repsData_${user.$id}`;
          const storedRepsCounter = await AsyncStorage.getItem(key);
          if (storedRepsCounter) {
            setRepsData(JSON.parse(storedRepsCounter));
          }
        } catch (error) {
          console.log('Failed to load repsCounter from AsyncStorage:', error);
        }
      }
    };

    loadRepsCounter();
  }, [user]);

  useEffect(() => {
    const saveRepsCounter = async () => {
      if (user) {
        try {
          const key = `repsData_${user.$id}`;
          await AsyncStorage.setItem(key, JSON.stringify(repsData));
        } catch (error) {
          console.log('Failed to save repsCounter to AsyncStorage:', error);
        }
      }
    };

    saveRepsCounter();
  }, [repsData, user]);


  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLogged(true);
          setUser(res);
          setBmi(res.bmi);
          setUserCalories(res.calories);
          setFormData(res.form ? res.form : []);
          setStepsData(res.steps ? res.steps : [])
        } else {
          setIsLogged(false);
          setUser(null);
          setBmi(null);
          setUserCalories(null);
          setFormData([]);
          setStepsData([])
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLogged, setIsLogged,
        isFirstTimeLogin, setIsFirstTimeLogin,
        user, setUser,
        Bmi, setBmi,
        userCalories, setUserCalories,
        loading, setLoading,
        selectedId, setSelectedId,
        selected, setSelected,
        value, setValue,
        value2, setValue2,
        age, setAge,
        completed, setCompleted,
        workout, setWorkout,
        calories, setCalories,
        minutes, setMinutes,
        repsData, setRepsData,
        formData, setFormData,
        stepsData, setStepsData
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
