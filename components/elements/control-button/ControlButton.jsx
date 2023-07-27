import { LinearGradient } from "expo-linear-gradient";
import { ControlButtonWrapper, ControlButtonPressable } from "./styledControlButton";
import DropShadow from "react-native-drop-shadow";
import Icon from 'react-native-vector-icons/Ionicons'

const ControlButton = ({active, tabName, setActiveTab, icon}) => {
    return(
        <ControlButtonWrapper
            active={active}
            >
        <DropShadow
            style={ active ? {
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.7,
                shadowRadius: 5,
            } : {
                shadowOpacity: 0
            }}
        >
            <LinearGradient 
                start={[0,0]}
                end={[1,1]} 
                colors={active ? ['#FBD1CB', '#D57E92'] : ['#DB939A', '#D98180']} 
                style={{
                    height: '100%',
                    alignContent: 'center',
                    justifyContent: 'center',
                    opacity: active ? 1 : 1,
                    borderRadius: active ? 9 : 0,
                }}   
            > 
            <ControlButtonPressable
                onPress={() => setActiveTab(tabName)}
            >
                <DropShadow
                    style={ active ? {
                        shadowColor: "#F9E8A9",
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 2,
                    } : {
                        shadowOffset: {
                            height: 1
                        },
                        shadowColor: "#583252",
                        shadowOpacity: 1
                    }}
                >
                
                <Icon
                    name={icon}
                    size={50} 
                    color= { active ? "#F9E8A9" : "#FBD1CB"}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                />
                
                </DropShadow>
                </ControlButtonPressable>
            </LinearGradient>
            </DropShadow>
    </ControlButtonWrapper>
    )
}
export default ControlButton;