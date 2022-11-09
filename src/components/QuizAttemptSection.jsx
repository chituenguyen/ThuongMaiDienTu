import React from 'react'

const QuizSetion = ({ quiz_number }) => {

  return (
    <>
      <div className='quiz-infor-section grid grid-cols-10 gap-7 mt-5 px-[68px] text-black py-5 box-border'>
        <div className='box-border quiz-info'>
          <div className='p-2 shadow-md bg-gray-100 rounded-sm col-span-1'>
            <h4 className='quiz-number font-black'>Câu hỏi {quiz_number}</h4>
            <div className='state font-light' >
              Chưa trả lời
            </div>
          </div>
        </div>
        <div className='quiz-content-section bg-gray-100 grid gap-4 col-span-9 p-3 shadow-md rounded-sm'>
          <div claredme='quiz-question-section'>
            <div className='quiz-question bg-blue-100 p-2 box-border'>
              <div className="flow-root">
                <div className="my-4">To express an arithmetic expression, there are 5 following classNamees:</div>
              </div>
              <div className="flow-root">
                <div className="my-4">Exp: general arithmetic expression

                  BinExp: an arithmetic expression that contains one binary operators (+,-,*,/) and two operands. To construct a BinExp object, you must pass parameters: first operand, operator, second operand, respectively.

                  UnExp: an arithmetic expression that contains one unary operator (+,-) and one operand. To construct a UnExp object, you must pass the operator first.

                  IntLit: an arithmetic expression that contains one integer number

                  FloatLit: an arithmetic expression that contains one floating point number

                  Define these classes in Python (their parents, attributes, methods) such that their objects can response to eval() message by returning the value of the expression. For example, let object x express the arithmetic expression 3 + 4 * 2.0, x.eval() must return 11.0

                  In this exercise, we use:
                </div>
              </div>
            </div>
          </div>
          <div className='box-border quiz-answers-section '>

            <div className='quiz-answers flex flex-col'>
              <div className='flex items-center mr-4'>
                <input type="radio" id="blue-radio" value="Male" name="answer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring- blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-lg font-extrabold text-black-900 dark:text-black-300">A</label>
              </div>

              <div className="flex items-center mr-4">
                <input type="radio" id="blue-radio" value="Male" name="answer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring- blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-lg font-extrabold text-black-900 dark:text-black-300">B</label>
              </div>

              <div className="flex items-center mr-4">
                <input type="radio" id="blue-radio" value="Male" name="answer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring- blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-lg font-extrabold text-black-900 dark:text-black-300">C</label>
              </div>

              <div className="flex items-center mr-4">
                <input type="radio" id="blue-radio" value="Male" name="answer" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring- blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ml-2 text-lg font-extrabold text-black-900 dark:text-black-300">D</label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

function QuizAttemptSection() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className='test-infor-section flex gap-7 mt-5 px-[68px] text-black py-5 box-border'>
        <div className='col-span-1 w-20 h-20 bg-red-500 rounded-md p-4 items-center'>
          <svg fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
        </div>
        <div className='col-span-9'>
          <p>BKTutor Hồ Chí Minh</p>
          <div className='text-3xl font-extrabold'>BÀI KIỂM TRA DÙNG ĐỂ XÉT TUYỂN GIA SƯ BÁCH KHOA</div>
          <p className='text-blue-800'>Kì 1, tháng 12, năm 2022</p>
        </div>

      </div>
      <div className='box-border quiz-section border-2 shadow-md m-3'>
        <QuizSetion quiz_number={1} />
        <QuizSetion quiz_number={2} />
        <QuizSetion quiz_number={3} />
        <QuizSetion quiz_number={4} />
        <QuizSetion quiz_number={5} />
        <div className='flex justify-center mt-1 mb-4'>
          <div className="flex justify-center">
            <button
              className="focus:outline-none font-bold text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Làm bài kiểm tra xét duyệt gia sư ngay bây giờ
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Kết thúc bài làm
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-red-600 opacity-8 float-right text-3xl leading-none font-bold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          X
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                          Bạn có chắc chắn muốn nộp bài?
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Hủy bỏ
                        </button>
                        <button
                          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Hoàn thành và gửi bài thi
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default QuizAttemptSection