import styled from "styled-components/native";
import { StyledTitle } from "./text";
import { View, Text } from "react-native";


export const StyledView = styled.View`
width:${props => props.width || '100%'};
marginTop:${props => props.marginTop || '0px'};
backgroundColor:${props => props.backgroundColor || '#1F2544'};
flex:${props => props.flux || '1'};
borderRadius:${props => props.radius || '0'};
justifyContent:${props => props.justifyContent || 'center'};
alignItems:${props => props.alignItems || 'center'};
flexDirection:${props => props.flexDirection || "column"};
`

export const MainContainer = ({ width, flex, backgroundColor, title, borderRadius, justifyContent, marginTop, alignItems, flexDirection, onPress, userCalories, Bmi }) =>
    <StyledView backgroundColor={backgroundColor} width={width} radius={borderRadius.toString()} flux={flex.toString()} justifyContent={justifyContent} marginTop={marginTop} alignItems={alignItems} flexDirection={flexDirection}>

        <View style={{ width: '50%', height: '100%', justifyContent: "center", alignItems: "center" }}>
            <StyledTitle fontSize={'24px'} position={"relative"} top={"7px"} title={title} fontWeight={'bold'}></StyledTitle>
            <View style={{
                backgroundColor: '#0F0F0F', width: '70%', height: '65%', borderColor: 'aqua', borderWidth: 2,
                marginTop: '5%', borderRadius: 60, alignItems: 'center', justifyContent: 'center', flexDirection: "column",
                padding: 12
            }}>

                <View >
                    {userCalories?.Calories ? (
                        <>
                            <Text style={{ textAlign: 'center', color: 'aqua', fontSize: 20,fontWeight:'bold' }}>{userCalories.Calories}</Text>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 15 }}>Suggested</Text>
                        </>
                    ) : (
                        <Text style={{ textAlign: 'center', color: 'aqua', fontSize: 50 }}>?</Text>
                    )}

                </View>
            </View>
        </View>

        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'start', flexDirection: "column", height: '100%' }}>

            <View style={{
                alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '53%', flexDirection: 'row',padding:12
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, height: 52 }}>🔥</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 0 }}>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 20, fontWeight: 'bold', lineHeight: 40}}>Maintenance</Text>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 18, fontWeight: 'bold', color: 'aqua'}}>{userCalories?.MaintainenceCalories ? userCalories.MaintainenceCalories : '?'}</Text>
                </View>
            </View>

            <View style={{ height: '50%',paddingHorizontal:22,paddingLeft:30, alignItems: 'center', justifyContent: 'center',marginRight:17, width: '100%', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 23, height: 52}}>❤️</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 4 }}>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 20, fontWeight: 'bold', lineHeight: 40,marginLeft:5 }}>Bmi Status</Text>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: 'aqua',marginLeft:0 }}>{Bmi?.bmi ? Bmi.bmi : '?'}</Text>
                </View>
            </View>
        </View>

    </StyledView>
