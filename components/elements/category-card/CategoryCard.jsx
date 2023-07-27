import CardButton from "../card-button/CardButton";
import { CategoryCardWrapper, ClosePopUpPressable, PopUpWrapper, PopUpContentWrapper, CardTitle, PopUpInput } from "./styledCategoryCard";
import { Modal, View, Pressable, Text, TextInput } from "react-native";
import { useState } from "react";
import PopUp from "../pop-up/PopUp";
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons'
import DropShadow from "react-native-drop-shadow";

const CategoryCard = ({categoryTotal, categoryName}) => {
    const [modalVisible, setModalVisible] =  useState(false)
    return(
        <CategoryCardWrapper>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
                style={{
                    marginTop: 20,
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
                    <LinearGradient
                        colors={['#FAC6AA', '#FFDFF1']}
                        start={[0,0]}
                        end={[1,1]}
                        style={{
                            width: 300,
                            height: 300,
                            alignContent: 'center',
                            marginTop: 200,
                            marginLeft: 45,
                            borderRadius: 10
                        }}
                    >
                        <PopUpContentWrapper>
                            <PopUpInput 
                                keyboardType="numeric"
                                placeholder="0.00"
                                inputMode="decimal"
                            ></PopUpInput>
                            <ClosePopUpPressable
                                onPress={() => setModalVisible(!modalVisible)}
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
                                        marginTop: 115,
                                    }}
                                >
                                    <LinearGradient
                                        colors={['#FF7480', '#8E4178']}
                                        start={[0,0]}
                                        end={[1,1]} 
                                        style={{
                                            borderRadius: 10,
                                            height: 50,
                                            width: 300,
                                            marginTop: 58,
                                            marginLeft: -50
                                        }}
                                    >
                                        <Icon 
                                            name="close"
                                            size={48}
                                            color= {"#F9E8A9"}
                                            style={{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                            }}
                                        />
                                    </LinearGradient>
                                </DropShadow>
                            </ClosePopUpPressable>

                            <ClosePopUpPressable
                                onPress={() => setModalVisible(!modalVisible)}
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
                                    <LinearGradient
                                        colors={['#FFDFF1', '#FF7480']}
                                        start={[0,0]}
                                        end={[1,1]} 
                                        style={{
                                            borderRadius: 10,
                                            height: 100,
                                            width: 200,
                                            marginTop: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <DropShadow
                                            style={{
                                                shadowColor: '#F9E8A9',
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 1,
                                                shadowRadius: 5,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 30,
                                                    color: '#F9E8A9'
                                                }}
                                            >
                                                Submit
                                            </Text>
                                        </DropShadow>
                                    </LinearGradient>
                                </DropShadow>
                            </ClosePopUpPressable>

                        </PopUpContentWrapper>
                    </LinearGradient>
                </DropShadow>
            </Modal>
            <CardButton 
                setModalVisible={setModalVisible}
                categoryName={categoryName}
                categoryTotal={categoryTotal}
            />
        </CategoryCardWrapper>
    )
}
export default CategoryCard;