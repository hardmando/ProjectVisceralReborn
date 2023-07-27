import { SettingsPageTextPlaceholder, SettingsPageWrapper } from "./styledSettingPage";
import Icon from 'react-native-vector-icons/Ionicons'

const SettingsPage = ({active}) => {
    return(
        <SettingsPageWrapper
        active={active}
        >
            <SettingsPageTextPlaceholder>
                Work in progress
            </SettingsPageTextPlaceholder>
            <Icon
                    name="settings"
                    size={50} 
                    color= { "#FBD1CB"}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        marginTop: 10
                    }}
                />
        </SettingsPageWrapper>
    )
} 
export default SettingsPage;