import DropShadow from "react-native-drop-shadow";
import { CardButtonWrapper } from "./styledCardButton";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/AntDesign'

const CardButton = ({setModalVisible}) => {
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
            }}
            >
                <LinearGradient
                    start={[0,0]}
                    end={[1,1]} 
                    colors={['#FFEFE9', '#FFCFE4']} 
                    style={{
                        height: '100%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        opacity: 1,
                        borderRadius: 9
                    }}   
                >
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
                            onPress={() => setModalVisible(true)}
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
                                    borderRadius: 9
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