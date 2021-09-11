import { StyleSheet, Platform } from "react-native";

export const buttons = StyleSheet.create({

});

export const header = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        top: '10%',
        flex: 1,
        height: 200,
    },
    containerHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    containerHeader2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 21,
        width: 41
    },
});

export const footer = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ccc',
        marginHorizontal: 20,
        borderRadius: 5,
        marginBottom: Platform.OS === 'android' ? 10 : 0,
    },
    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttons: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const login = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },
    text: {
        color: "#033d60",
        marginBottom: 30,
        textAlign: "justify",
        fontSize: 30,

    },
    login: {
        width: 300,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: '#033d60',
        backgroundColor: '#033d60',
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    textLogin: {
        color: "#ccc",
        marginBottom: 30,
        textAlign: "justify",
        textTransform: "uppercase",
        fontSize: 24,
    },
    logo: {
        height: 111,
        width: 219,
        marginBottom: 20
    }
});

export const camera = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    icon: {
        // name: 'camera-reverse-outline',
        // size: 40,
        color: 'yellow'
    }
});