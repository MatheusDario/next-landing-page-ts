import { Text } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
    cupiditate alias. Quas quibusdam illum fugiat veritatis, rem nostrum eius,
    doloribus commodi numquam perferendis animi, dolore harum culpa explicabo distinctio ab.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};
export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
