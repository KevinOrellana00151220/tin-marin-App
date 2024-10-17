import { API_HOST } from '../constants/URL';

export function getAllQuizzes() {
    const url = `${API_HOST}/quizzes`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        });
}

export function getQuizById(idQuiz) {
    const url = `${API_HOST}/quizzes/${idQuiz}`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        });
}