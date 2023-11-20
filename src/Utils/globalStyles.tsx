import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    boxWithShadow: {
        shadowColor: 'red',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.8,
        shadowRadius: 20,  
        elevation: 5
    }
})