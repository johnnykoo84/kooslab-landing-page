import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log('@@@@@@@@@@@@@', req.body);
    try {
      const { SLACK_WEBHOOK_URL } = process.env;
      console.log('@@ this is SLACK WEBHOOK URL I am using', SLACK_WEBHOOK_URL);
      const { company, email, name, mobile, question, agreement } = req.body;
      const agree = agreement ? 'yes' : 'no';

      const data = {
        text: `New message from ${company}`,
        attachments: [
          {
            title: 'Contact details',
            fields: [
              { title: 'Company', value: company },
              { title: 'Name', value: name },
              { title: 'Email', value: email },
              { title: 'Mobile', value: mobile },
              { title: 'Question', value: question },
              { title: 'Agreement', value: agree },
              // Add more fields as needed
            ],
          },
        ],
      };

      const response = await axios.post(SLACK_WEBHOOK_URL ?? '', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.error('status 200 with response', response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error('Error sending data', error);
      res.status(500).json({ error: 'Error sending data' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
