import DropShadow from "react-native-drop-shadow";
import { CardButtonWrapper } from "./styledCardButton";

const CardButton = ({setModalVisible}) => {
    return(
        <DropShadow
        style={{
            shadowColor: "#000",
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
            </CardButtonWrapper>
        </DropShadow>
    )
}
export default CardButton;