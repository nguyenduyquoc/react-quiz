import _ from "lodash";

const Question = (props) => {
  const { question, currentQues } = props;

  console.log(question);

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
            <div class="form-check" key={index}>
              <input class="form-check-input" type="checkbox" value="" />
              <label class="form-check-label">{answer.description}</label>
            </div>
          ))}
      </div>
    </>
  );
};

export default Question;
