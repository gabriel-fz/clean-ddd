import { AnswerQuestionUseCase } from './answer-question'
import { AnswerRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswerRepository = {
  create: async (answer: Answer) => {},
}

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository)
  const content = 'Nova Resposta'

  const answer = await answerQuestion.execute({
    content,
    instructorId: '1',
    questionId: '1',
  })

  expect(answer.content).toEqual(content)
})
