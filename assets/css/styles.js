import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#18191A',
        alignItems: 'center',
        // marginTop: 30,
    },

    loadingScreen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    bodyContent: {
        marginBottom: 60
    },

    bookBodyWithBorder: {
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#428947',
    },

    bookBodyWithoutBorder: {
        padding: 10,
        marginHorizontal: 10,
        borderBottomWidth: 0,
    },

    bookTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    bookCoverImage: {
        height: 70,
        width: '20%',
        borderRadius: 4,
    },

    bookDescription: {
        width: '80%',
        paddingLeft: 20
    },

    bookDescAndImage: {
        flex: 1, flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10
    },

    headerTitle: {
        fontSize: 20,
        padding: 15,
        color: 'white'
    },

    container: {
        backgroundColor: '#fff',
    },

    mainContent: {
        alignItems: 'center',
        padding: 10,
        paddingBottom: 500,
        justifyContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: '#777',
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        padding: 10,
    },

    list: {
        padding: 20,
        backgroundColor: 'tomato',
        fontSize: 24,
        marginTop: 20,
        paddingBottom: 20,
        marginHorizontal: 10
    }
})
