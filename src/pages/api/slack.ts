import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log('@@@@@@@@@@@@@', req.body);
    try {
      const SLACK_WEBHOOK_URL =
        'https://hooks.slack.com/services/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';

      const data = {
        text: `New message from ${req.body.company}`,
        attachments: [
          {
            title: 'Contact details',
            fields: [
              { title: 'Company', value: req.body.company },
              { title: 'Email', value: req.body.email },
              { title: 'Question', value: req.body.question },
              // Add more fields as needed
            ],
          },
        ],
      };

      const response = await axios.post(SLACK_WEBHOOK_URL, data, {
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
