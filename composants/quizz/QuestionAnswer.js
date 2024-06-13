import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Answer from './Answer';

const QuestionAnswer = ({ data, onAnswerSelect }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const handleAnswerSelect = (index) => {
    setSelectedAnswerIndex(index);
    if (onAnswerSelect) {
      onAnswerSelect(data.answers[index]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{data.question}</Text>
      <View style={styles.answersContainer}>
        {data.answers.map((answer, index) => (
          <Answer
            key={index}
            letter={String.fromCharCode(65 + index)}
            answer={answer.answer}
            isSelected={selectedAnswerIndex === index}
            onPress={() => handleAnswerSelect(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 42,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,   
  },
  answersContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default QuestionAnswer;