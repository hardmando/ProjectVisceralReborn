import {StyledControlBarWrapper } from './styledControlBar';
import { useState } from 'react'
import ControlButton from '../elements/control-button/ControlButton';
import Total from '../total/Total';

const ControlBar = ({activeTab,  setActiveTab}) => {

    return (
        <StyledControlBarWrapper>
            <Total 
                active={activeTab === 'home' ? true : false}
                
                />
            <ControlButton
                active={activeTab === 'settings' ? true : false}
                title="Settings"
                tabName='settings'
                setActiveTab={setActiveTab}
                icon='cog'
            />
            <ControlButton
                active={activeTab === 'home' ? true : false}
                title="Home"
                tabName='home'
                setActiveTab={setActiveTab}
                icon='home'
            />
            <ControlButton
                active={activeTab === 'profile' ? true : false}
                title="Profile"
                tabName='profile'
                setActiveTab={setActiveTab}
                icon='person'
            />
        </StyledControlBarWrapper>
    );
}
export default ControlBar;