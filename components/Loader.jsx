import React, { useEffect, useRef } from "react";
import { View, Dimensions, Animated, StatusBar } from "react-native";

const Loader = ({ isLoading }) => {
  const screenHeight = Dimensions.get("screen").height;

  const fitOpacity = useRef(new Animated.Value(0)).current;
  const flowOpacity = useRef(new Animated.Value(0)).current;
  const underlineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isLoading) {
      Animated.sequence([
        Animated.timing(fitOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(flowOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.loop(
          Animated.sequence([
            Animated.timing(underlineOpacity, {
              toValue: 1,
              duration: 700,
              useNativeDriver: true,
            }),
            Animated.timing(underlineOpacity, {
              toValue: 0,
              duration: 700,
              useNativeDriver: true,
            }),
          ])
        ),
      ]).start();
    } else {
      fitOpacity.setValue(0);
      flowOpacity.setValue(0);
      underlineOpacity.setValue(0);
    }
  }, [isLoading, fitOpacity, flowOpacity, underlineOpacity]);

  if (!isLoading) return null;

  return (
    <View
      style={{
        position: "absolute",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: screenHeight,
        backgroundColor: "#1F2544",
        zIndex: 10,
      }}
    >
      <StatusBar barStyle="light-content" />
      <View style={{ width: 150 }}>
        <Animated.Text
          style={{
            opacity: fitOpacity,
            fontSize: 40,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: '#ecf0f1',
            textAlign: 'left',
          }}
        >
          FIT
        </Animated.Text>
        <Animated.Text
          style={{
            opacity: flowOpacity,
            fontSize: 40,
            fontWeight: 'bold',
            fontStyle: 'italic',
            color: 'aqua',
            textAlign: 'right',
          }}
        >
          FLOW
        </Animated.Text>
        <Animated.View
          style={{
            width: 80,
            height: 4,
            backgroundColor: 'cyan',
            marginTop: 10,
            opacity: underlineOpacity,
            alignSelf: 'flex-end',
          }}
        />
      </View>
    </View>
  );
};

export default Loader;
