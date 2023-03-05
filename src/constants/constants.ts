import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')

export const ASPECT_RATIO = width / height;

export const LATITUDE_DELTA = 0.06;

export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export const INITIAL_REGION = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
}