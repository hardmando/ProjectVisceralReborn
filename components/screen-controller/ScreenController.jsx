import { useState } from "react";
import HomePage from "../../pages/home-page/HomePage";
import ControlBar from "../control-bar/ControlBar";
import { ScreenControllerWrapper } from "./styledScreenController";
import SettingsPage from "../../pages/settings-page/SettingPage";
import ProfilePage from "../../pages/profile-page/ProfilePage";

const ScreenController = () => {
    const [activeTab, setActiveTab] = useState('home')

    return(
        <ScreenControllerWrapper>
            <HomePage
                active={activeTab === 'home' ? true : false}
            >
            </HomePage>

            <SettingsPage
                active={activeTab === 'settings' ? true : false}
            >
            </SettingsPage>

            <ProfilePage
                active={activeTab === 'profile' ? true : false}
            >
            </ProfilePage>

            <ControlBar 
                activeTab = {activeTab}
                setActiveTab={setActiveTab}
            />
        </ScreenControllerWrapper>
    )
}
export default ScreenController;