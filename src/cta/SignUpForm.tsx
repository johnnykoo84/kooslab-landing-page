import { Field, Form, Formik } from 'formik';
import React from 'react';

const SignupForm = () => (
  <div className="rounded bg-white p-6 shadow-md">
    <h1 className="mb-4 text-2xl font-bold">문의하기</h1>
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
          } else {
            console.error('Error sending data');
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
              회사 이름
            </label>
            <Field
              id="company"
              name="company"
              type="text"
              placeholder="주식회사 대한 기업"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
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
              htmlFor="textarea"
              className="block text-sm font-medium text-gray-700"
            >
              온보딩에서 어떤 어려움이 있는지 적어주세요
            </label>
            <Field
              id="question"
              name="question"
              type="textarea"
              placeholder="e.g. 매 번 온보딩 준비에 너무 많은 리소스가 필요해요"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          {/* Repeat similar structure for other fields */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignupForm;
