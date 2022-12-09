import User from '../../models/User';
import datas from '../../models/datas';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await datas.deleteMany();
  await User.insertMany(data.users);
  await datas.insertMany(data.festivals);

  await db.disconnect();
  res.send({ message: 'user seeded successfully. 사용자가 등록되었습니다.' });
};

export default handler;
