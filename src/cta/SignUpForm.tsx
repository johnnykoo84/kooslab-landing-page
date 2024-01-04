import { Field, Form, Formik } from 'formik';
import React from 'react';

const SignupForm = () => (
  <div className="mx-auto mt-6 max-w-md rounded bg-white py-6 sm:max-w-xl lg:max-w-2xl">
    <h1 className="mb-4 text-2xl font-bold">
      신규 입사자 온보딩 가이드와 템플릿 자료를 이메일 주소로 보내드립니다.
    </h1>
    <Formik
      initialValues={{
        email: '',
        company: '',
        subject:
          '경력직, 임원 온보딩에서 가장 어려움을 겪고 계신 부분을 적어주세요.',
      }}
      onSubmit={async (values) => {
        console.log('click value', values);
        fetch('/api/slack', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((response) => {
          if (response.ok) {
            console.log('Data sent to Slack');
            alert(
              '신청이 완료되었습니다. 24시간 안으로 이메일을 확인해주세요.',
            );
          } else {
            console.error('Error sending data');
            alert(
              '신청이 실패하였습니다. 다시 시도해 주시거나 johnnykoo@kooslab.net으로 문의 주세요.',
            );
          }
        });
        // await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              회사 및 지점 이름
            </label>
            <Field
              id="company"
              name="company"
              type="text"
              placeholder="주식회사 대한 기업 or 별다방 강남점"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              대표님 / 사장님 / 담당자 성함
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>

            <Field
              id="email"
              name="email"
              type="email"
              placeholder="홍길동@daehan.com"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              휴대폰 번호
            </label>

            <Field
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="01012345678"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="textarea"
              className="block text-sm font-medium text-gray-700"
            >
              신규 직원 업무 안내 시 어떤 어려움이 있는지 간략히 적어주세요
            </label>
            <Field
              id="question"
              name="question"
              type="textarea"
              placeholder="e.g. 매 번 신규 직원 출근 준비에 너무 많은 시간과 준비가 필요해요"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            <div className="flex items-center p-2">
              <Field
                id="agreement"
                name="agreement"
                type="checkbox"
                className="mt-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
              <label
                htmlFor="agreement"
                className="block p-2 text-sm font-medium text-gray-700"
              >
                [마케팅 동의] 업무 가이드와 템플릿 활용에 대해 직접 안내 받고
                싶습니다. (선택 사항)
              </label>
            </div>
          </div>
          {/* Repeat similar structure for other fields */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md border border-transparent bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            확인
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
