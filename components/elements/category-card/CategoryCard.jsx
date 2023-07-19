import CardButton from "../card-button/CardButton";
import { CategoryCardWrapper, ClosePopUpPressable } from "./styledCategoryCard";
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
            }}>
            <View>
                <View>
                    <Text>Hello World!</Text>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            onPress={() => setModalVisible(true)}>
            <Text>Show Modal</Text>
        </Pressable>
        <CardButton 
            setModalVisible={setModalVisible}
        />
        </CategoryCardWrapper>
    )
}
export default CategoryCard;