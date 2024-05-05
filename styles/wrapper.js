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

export const MainContainer = ({ width, flex, backgroundColor, title, borderRadius, justifyContent, marginTop, alignItems, flexDirection }) =>
    <StyledView backgroundColor={backgroundColor} width={width} radius={borderRadius.toString()} flux={flex.toString()} justifyContent={justifyContent} marginTop={marginTop} alignItems={alignItems} flexDirection={flexDirection}>

        <View style={{ width: '50%', height: '100%', justifyContent: "center", alignItems: "center" }}>
            <StyledTitle fontSize={'20px'} position={"relative"} top={"0px"} title={title}></StyledTitle>
            <View style={{
                backgroundColor: 'black', width: '60%', height: '67%',
                marginTop: '5%', borderTopLeftRadius: 50, borderTopRightRadius: 50, borderBottomLeftRadius: 50, borderBottomRightRadius: 50, alignItems: 'center', justifyContent: 'center', flexDirection: "column"
            }}>

                <Text style={{ textAlign: 'center', color: '#00ADB5', fontSize: 16 }}>3,234 Remaining</Text>
            </View>
        </View>

        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'start', flexDirection: "column", height: '100%' }}>

            <View style={{
                alignItems: 'center', justifyContent: 'center',
                width: '100%', height: '50%', flexDirection: 'row'
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>🔥</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 20 }}>Goal</Text>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 16 }}>3232</Text>
                </View>
            </View>

            <View style={{ height: '50%', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30 }}>❤️</Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 20 }}>Food</Text>
                    <Text style={{ textAlign: 'center', color: '#EEEEEE', fontSize: 16 }}>265</Text>
                </View>
            </View>
        </View>

    </StyledView>


export const ClickableViews = ({ title, width, height, backgroundColor, flex, justifyContent, alignItems, flexDirection, borderRadius, marginTop }) =>
    <StyledView width={width} height={height} marginTop={marginTop} backgroundColor={backgroundColor} flux={flex.toString()} radius={borderRadius.toString()} justifyContent={justifyContent} alignItems={alignItems} flexDirection={flexDirection}>

        <StyledTitle title={title}></StyledTitle>

        <View style={{width: "40%", flexDirection: 'column', justifyContent: "center", alignItems: "center",marginLeft:20 }}>
            <View style={{
                backgroundColor: '#393E46', width: '80%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center'
            }}>
            </View>

            <View style={{
                backgroundColor: '#393E46', width: '80%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center',marginTop:5
            }}>
            </View>
        </View>


        <View style={{ height: "100%", width: "10%", justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
                backgroundColor: 'aqua', width: '100%', height: '30%',
                marginTop: '5%', borderTopLeftRadius: 100, borderTopRightRadius: 100, borderBottomLeftRadius: 100, borderBottomRightRadius: 100, alignItems: 'center', justifyContent: 'center', flexDirection: "row"
            }}></View>
        </View>


        <View style={{ width: "40%", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
            <View style={{
                backgroundColor: '#393E46', width: '80%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center'
            }}>
            </View>

            <View style={{
                backgroundColor: '#393E46', width: '80%', height: '70%', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginTop: 5
            }}>
            </View>

        </View>



    </StyledView>