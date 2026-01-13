import { StyleSheet } from "react-native"

const globalStyle = StyleSheet.create({
    header: {
        marginLeft: 27,
        marginRight: 17,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    messageIcon: { padding: 14, backgroundColor: '#F9FAFB', borderRadius: 100 },
    notificationNumber: {
        backgroundColor: '#F35BAC',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 10,
        height: 10,
        borderRadius: 10,
        alignItems: 'center',
        position: 'absolute',
        right: 10,
        top: 12

    },
    twoNumber: {
        color: '#FFFFFF',
        fontSize: 6,
        fontFamily: 'Inter_18pt-Light',
        fontWeight: 700,
    }, 
    userStoryConatiner : {
       marginTop: 20,
       marginHorizontal:20 
    }
})

export default globalStyle;