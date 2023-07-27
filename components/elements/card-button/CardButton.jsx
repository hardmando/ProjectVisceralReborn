import DropShadow from "react-native-drop-shadow";
import { CardButtonWrapper, CardTotal } from "./styledCardButton";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/AntDesign'
import { CardTitle } from "../category-card/styledCategoryCard";
import { Alert } from "react-native";
import db from '../../../DatabaseService'

const CardButton = ({setModalVisible, categoryName, categoryTotal}) => {
    return(
            <DropShadow
            style={{
                shadowColor: "#583252",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.7,
                shadowRadius: 5,
                width: '100%',
            }}
            >
                <LinearGradient
                    start={[0,0]}
                    end={[1,1]} 
                    colors={['#FFEFE9', '#FFCFE4']} 
                    style={{
                        height: '100%',
                        opacity: 1,
                        borderRadius: 9,
                        flexDirection:'row',
                        alignContent: 'stretch'
                    }}   
                >
                    <CardTitle>{categoryName}</CardTitle>
                    <CardTotal>{categoryTotal}</CardTotal>
                    <DropShadow
                        style={{
                        shadowColor: "#583252",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.7,
                        shadowRadius: 5,
                        }}
                    >
                        <CardButtonWrapper
                            onPress={() => {
                                setModalVisible(true);
                            }}
                        > 
                            <LinearGradient
                                start={[0,0]}
                                end={[1,1]} 
                                colors={['#FBD1CB', '#D57E92']} 
                                style={{
                                    height: '100%',
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    opacity: 1,
                                    borderRadius: 9,
                                    width: 100,
                                }}   
                            >
                                <Icon
                                    name="plus"
                                    size={60}
                                    color= {"#F9E8A9"}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                    }}
                                />
                            </LinearGradient>
                        </CardButtonWrapper>
                    </DropShadow>
                </LinearGradient>
            </DropShadow>
    )
}
export default CardButton;