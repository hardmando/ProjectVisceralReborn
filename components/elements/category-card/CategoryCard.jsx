import CardButton from "../card-button/CardButton";
import { CategoryCardWrapper, ClosePopUpPressable, PopUpWrapper, PopUpContentWrapper } from "./styledCategoryCard";
import { Modal, View, Pressable, Text } from "react-native";
import { useState } from "react";
import PopUp from "../pop-up/PopUp";

const CategoryCard = () => {
    const [modalVisible, setModalVisible] =  useState(false)

    return(
        <CategoryCardWrapper>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                    style={{
                        marginTop: 20
                    }}
                >
                <PopUpContentWrapper>
                    <Text>Hello World!</Text>
                    <ClosePopUpPressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                    </ClosePopUpPressable>
                </PopUpContentWrapper>
            </Modal>
        <CardButton 
            setModalVisible={setModalVisible}
        />
        </CategoryCardWrapper>
    )
}
export default CategoryCard;