import {commitMutation} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';


const mutation = graphql`
    mutation CreateQuestionMutation($input: QuestionInput){
        createQuestion(input: $input){
            _id
            title
            answers{
                answer
            }
        }
    }
`;

export function createQuestion(environment, question,) {
    const variables = {
        input: {
            question
        }
    }
    return commitMutation(
        environment,
        {
            mutation,
            variables,
            onCompleted: (response, errors) => {
                console.log(response)
            },
            onError: err => console.log(err)
        }
    );
}

export default {createQuestion};