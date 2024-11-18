import _ from "lodash";

const Question = (props) => {
  const { question, currentQues } = props;

  const handleClickCheckbox = (event, questionId, answerId) => {
    props.handleClickCheckbox(questionId, answerId);
  };

  if (_.isEmpty(question)) {
    return <></>;
  }
  return (
    <>
      <div className="q-image">
        {question.image && (
          <img
            src={`data:image/jpeg;base64,${question.image}`}
            className="card-img-top"
            alt="question image"
          />
        )}
      </div>
      <div className="q-description">
        Question {currentQues + 1} : {question.questionDescription} ?
      </div>
      <div className="answers">
        {question.answers &&
          question.answers.length > 0 &&
          question.answers.map((answer, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                onChange={(event) =>
                  handleClickCheckbox(event, question.questionId, answer.id)
                }
                checked={answer.isSelected}
              />
              <label className="form-check-label">{answer.description}</label>
            </div>
          ))}
      </div>
    </>
  );
};

export default Question;
