import { ProfilePageWrapper, ProfilePageTextPlaceholder } from "./styledProfilePage";
import Icon from 'react-native-vector-icons/Ionicons'

const ProfilePage = ({active}) => {
    
    return(
        <ProfilePageWrapper
        active={active}
        >
            <ProfilePageTextPlaceholder>
                Work in progress
            </ProfilePageTextPlaceholder>
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
        </ProfilePageWrapper>
    )
}
export default ProfilePage;