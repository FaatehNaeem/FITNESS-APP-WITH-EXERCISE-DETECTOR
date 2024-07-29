import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import WebView from 'react-native-webview';
import { Ionicons } from '@expo/vector-icons';
import { router,useLocalSearchParams } from 'expo-router';
import { useGlobalContext } from '../../context/GlobalProvider';

// Our API request your token provided on our dashboard on www.posetracker.com (It's free <3)
const API_KEY = "your Api key of posetrackerApi";
const POSETRACKER_API = "https://www.posetracker.com/pose_tracker/tracking";

export default function SideFacingPushup() {
    const [poseTrackerInfos, setCurrentPoseTrackerInfos] = useState();
    const [hasPermission, setHasPermission] = useState(false);
    const [repsCounter, setRepsCounter] = useState(0);

    const { setRepsData } = useGlobalContext()

    const difficulty = useLocalSearchParams();


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (!hasPermission) return <View style={styles.container}><Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}>The app needs access to your camera. Allow it in your device settings</Text></View>;

    const deviceWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    const dimension = Math.min(deviceWidth, deviceHeight); // Ensure width and height are the same

    // Our API request the width and height wanted for display the webcam inside the webview
    const width = 650;
    const height = 650;

    // Our API request the exercise you want to track and count
    const exercise = "side_pushup";

    // Our API request the difficulty of the exercise (by default it's set to normal)
    // const difficulty = "easy";

    // You can request API to display user skeleton or not (by default it's set to true)
    const skeleton = true;

    const posetracker_url = `${POSETRACKER_API}?token=${API_KEY}&exercise=${exercise}&difficultyy=${difficulty}&width=${width}&height=${height}&skeleton=${skeleton}`;

    // We need a bridge to transit data between the ReactNative app and our WebView
    // The WebView will use this function define here to send info that we will use later
    const jsBridge = `
        (function() {
            window.webViewCallback = function(info) {
                window.ReactNativeWebView.postMessage(JSON.stringify(info));
            }
        })();
    `;

    const handleCounter = (count) => {
        setRepsCounter(count)
        setRepsData(prevState => ({
            ...prevState,
            sidePushups: count
        }));
    };

    const handleInfos = (infos) => {
        setCurrentPoseTrackerInfos(infos);
    };

    // This is the function pass to the WebView to listen info from the WebView
    const webViewCallback = (info) => {
        switch (info.type) {
            case 'counter':
                return handleCounter(info.current_count);
            default:
                return handleInfos(info);
        }
    };

    return (
        <View style={styles.container}>
            <View style={{
                width: deviceWidth,
                height: deviceHeight,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <WebView
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowsInlineMediaPlayback={true}
                    mediaPlaybackRequiresUserAction={false}
                    style={{
                        width: width,
                        height: height,
                    }}
                    source={{ uri: posetracker_url }}
                    originWhitelist={['*']}
                    injectedJavaScript={jsBridge}
                    onMessage={(event) => {
                        const info = JSON.parse(event.nativeEvent.data);
                        webViewCallback(info);
                    }}
                />
                <View style={styles.overlay}>
                    <Ionicons
                        onPress={() => router.replace('/form')}
                        style={{ position: 'absolute', top: 30, left: 20, borderRadius: 8, padding: 3 }}
                        name="arrow-back-outline"
                        size={24}
                        color="aqua"
                    />
                    {repsCounter === 0 ? (
                        <>
                            <Text style={styles.para}>Status : {!poseTrackerInfos ? "loading AI..." : "AI Running"}</Text>
                            <Text style={styles.para}>Info type : {!poseTrackerInfos ? "loading AI..." : poseTrackerInfos.type}</Text>
                            {poseTrackerInfos?.ready === false ? (
                                <>
                                    <Text style={styles.para}>Placement ready: false</Text>
                                    <Text style={styles.para}>Placement info : Move {poseTrackerInfos?.postureDirection} </Text>
                                </>
                            ) : (
                                <>
                                    <Text style={styles.para}>Placement ready: true</Text>
                                    <Text style={styles.para}>Placement info : You can start doing side pushups 🏋️</Text>
                                </>
                            )}
                        </>
                    ) : (
                        <Text style={styles.text}>Counter: {repsCounter}</Text>
                    )}

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F2544'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'flex-end',
        padding: 10,
    },
    para: {
        color: 'aqua'
    },
    text: {
        fontSize: 30,
        color: 'aqua',
        fontWeight: 'bold',
        margin: 10,
    },
});
