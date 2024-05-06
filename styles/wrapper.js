import styled from "styled-components/native";
import { StyledTitle } from "./text";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

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
            <StyledTitle fontSize={'25px'} position={"relative"} top={"0px"} title={title}></StyledTitle>
            <View style={{
                backgroundColor: '#0F0F0F', width: '70%', height: '60%', borderColor: 'aqua', borderWidth: 2,
                marginTop: '2%', borderRadius: 60, alignItems: 'center', justifyContent: 'center', flexDirection: "column",
                padding: 12
            }}>

                <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>3,234 Remaining</Text>
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


export const DiscoverSection = ({ title }) =>
    <>
        <StyledTitle title={'Discover'}></StyledTitle>
        <View style={{ width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center', flexDirection: "row", flex: 0.5 }}>

            <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 0.3, gap: 5, marginTop: 2 }}>

                <View style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
                    <Icon name="utensils" size={30} color="aqua" />
                    <StyledTitle fontSize={"20px"} title={"Food"}></StyledTitle>

                </View>
                <View style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: "center" }}>
                    <Icon name="dumbbell" size={30} color="aqua" style="solid" />
                    <StyledTitle fontSize={"20px"} title={"Exercises"}></StyledTitle>
                </View>
            </View>

            <View style={{
                backgroundColor: 'aqua', flex: 0.1, height: "15%", borderRadius: 150, alignItems: 'center', justifyContent: 'center', flexDirection: "column"
            }} />

            <View style={{ flexDirection: "column", alignItems: 'center', justifyContent: 'center', flex: 0.3, gap: 5, marginTop: 2 }}>

                <View style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="running" size={30} color="aqua" />
                    <StyledTitle fontSize={"20px"} title={"Steps"}></StyledTitle>
                </View>
                <View style={{ backgroundColor: '#393E46', width: '100%', height: '50%', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="discord" size={30} color="aqua" style="" />
                    <StyledTitle fontSize={"20px"} title={"Community"}></StyledTitle>
                </View>
            </View>

        </View>
    </>