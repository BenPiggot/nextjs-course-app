import nc from 'next-connect';
import notes from '../../../src/data/data';

const handler = nc()
  .post((req, res) => {
    console.log(req.body)
    const note = { ...req.body, id: Date.now()}
    notes.push(note);
    res.json({ data: note })
  })
  .get((req, res) => {
    res.json({ data: notes });
  })

export default handler;