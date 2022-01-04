import { useRecoilState } from 'recoil';

import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { aboutTitle } from './atoms';

const About = () => {
  const [title] = useRecoilState(aboutTitle);
  const [description] = useRecoilState(aboutTitle);

  return (
    <Main meta={<Meta title={title} description={description} />}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </Main>
  );
};

export default About;
