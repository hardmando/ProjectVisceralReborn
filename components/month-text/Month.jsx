import { MonthWrapper } from "./styledMonth";
import { MonthText } from "./styledMonth";
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from 'react-native'
import DropShadow from "react-native-drop-shadow";

const Month = () => {
    var month = new Date().getMonth() + 1;
    var monthName;

    if(month == 1)  monthName = "January"
      else if(month == 2) monthName = "February" 
      else if(month == 3) monthName = "March"
      else if(month == 4) monthName = "April"
      else if(month == 5) monthName = "May"
      else if(month == 6) monthName = "June"
      else if(month == 7) monthName = "July"
      else if(month == 8) monthName = "August"
      else if(month == 9) monthName = "September"
      else if(month == 10) monthName = "October"
      else if(month == 11) monthName = "November"
      else if(month == 12) monthName = "December"

    return(
    <MonthWrapper>
        <DropShadow
            style={{
                shadowColor: "#583252",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.3,
                shadowRadius: 3,
            }}
        >
            <MaskedView
                style={{
                    marginTop: 0,
                    height: 50
                }}
                maskElement={
                    <View
                        style={{
                            // Transparent background because mask is based off alpha channel.
                            backgroundColor: 'transparent',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <MonthText>
                            {monthName}
                        </MonthText>
                    </View>
                }     
            >
                <LinearGradient
                    start={[0,0]}
                    end={[1,1]} 
                    colors={['#FF8ABD', '#FF8A88']} 
                    style={{
                        height: '100%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        opacity: 1,
                        borderRadius: 9
                    }}   
                >
                    <View 
                        style={{width: 100, height: 100}}
                    />
                </LinearGradient>
            </MaskedView>
        </DropShadow>
    </MonthWrapper>
    )
}
export default Month;