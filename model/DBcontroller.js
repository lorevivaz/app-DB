
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveSidLocally(sid) {
    try {
        await AsyncStorage.setItem('userSid', sid);
        console.log('SID saved successfully');
    } catch (error) {
        console.error('Failed to save SID', error);
    }
}