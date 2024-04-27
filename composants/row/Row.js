import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Row = React.memo(({ image, title }) => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.separator} />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 30,
        marginVertical: 8,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
        marginRight: 16,
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Blanc avec une transparence de 50%
    },
});

export default Row;