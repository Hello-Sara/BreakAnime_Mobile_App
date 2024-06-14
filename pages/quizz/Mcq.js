import React, { useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Axios from 'axios';
import QuestionAnswer from '../../composants/quizz/QuestionAnswer.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mcq = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [tags, setTags] = useState([]);
    const [reversedTags, setReversedTags] = useState([]);lE 

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await Axios.get('https://api.breakanime.ninja/api/mcq');
                setQuestions(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des questions:', error);
            }
        };
        fetchQuestions();
    }, []);

    const handleNextQuestion = async () => {
        console.log('Réponse sélectionnée:', selectedAnswer);
        if (selectedAnswer!== undefined && selectedAnswer !== null) {
            const response = await Axios.get(`https://api.breakanime.ninja/api/mcq/${selectedAnswer.id}/genres`);
            const genres = response.data;
            console.log('Genres:', genres);
            try {
                 genres.genres.forEach(genre => {
                    if (genre.is_reversed) {
                        setReversedTags(prev => {
                            const updated = [...prev, genre.id];
                            console.log('Reversed Tags après mise à jour:', updated);
                            return updated; 
                        });
                    } else {
                        setTags(prev => {
                            const updated = [...prev, genre.id];
                            console.log('Tags après mise à jour:', updated);
                            return updated; 
                        });
                    }
                });
            } catch (error) {
                console.error('Erreur lors de la mise à jour des tags:', error);
            }
        }

        console.log('Index de la question actuelle:', currentQuestionIndex);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            console.log('Quiz terminé');
            const id = await AsyncStorage.getItem('userId');

            navigation.navigate('Recommendation',  { tags: finalizeTags(), id: id })
        }
    };

    const finalizeTags = () => {
        return finalTags = tags.filter(tag => !reversedTags.includes(tag));
    };

    const handleCancel = () => {
        console.log('Quiz annulé');
        navigation.navigate('Quiz');
    };

    const progress = (currentQuestionIndex + 1) / 10;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Annuler</Text>
            </TouchableOpacity>
            <Text style={styles.quizText}>Quizz</Text>
            
            {questions.length > 0 && (
                <View style={styles.questionAnswerContainer}>
                    <QuestionAnswer
                    data={questions[currentQuestionIndex]}
                    onAnswerSelect={setSelectedAnswer}
                    selectedAnswer={selectedAnswer}
                    />
                </View>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.vButton} onPress={handleNextQuestion}>
                    <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
  
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#0B0B0B',
    },
    questionAnswerContainer: {
        marginTop: 40,
    },
    buttonContainer: {
      margin: 20,
      alignItems: 'center', // Centrer le bouton dans le conteneur
    },
    vButton: {
      borderWidth: 1,
      borderColor: '#FEC200',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      color: 'white',
      fontSize: 18,
      width: 303,
      alignItems: 'center',
    },
    buttonText: {
        color: 'white', 
        fontSize: 18, 
    },
    cancelButton: {
        alignSelf: 'flex-end',
        marginRight: 25,
        marginTop: 35,
      },
      cancelButtonText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: '#ECECEC',
      },
      quizText: {
        fontFamily: 'Nuku',
        fontSize: 24,
        color: '#FEC200',
        marginTop: 10,
        alignSelf: 'center',
      },

  });

export default Mcq;