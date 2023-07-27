import DropShadow from "react-native-drop-shadow";
import { TotalWrapper, TotalText } from "./styledTotal";
import { LinearGradient } from "expo-linear-gradient";

const Total = ({active, total}) => {
    return(
        <TotalWrapper
            active={active}
        >
            <DropShadow
                style={{
                    shadowColor: '#583252',
                    shadowRadius: 3,
                    shadowOpacity: 0.5,
                    shadowOffset: {
                        width: 0,
                        height: 0.5
                    }
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
                    <TotalText>Total: {total}</TotalText>
                    </LinearGradient>
                </DropShadow>
            </TotalWrapper>
       
    )
}
export default Total;