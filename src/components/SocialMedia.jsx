import React from 'react';
import { BsLinkedin, BsGithub, BsDiscord } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target="_blank" rel="noopener noreferrer" href ='https://www.linkedin.com/in/inumella-chaitanya-9b297620b/'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href ='https://github.com/cinumell'>
        <BsGithub />
      </a>
    </div>
    <div>
    <a target="_blank" rel="noopener noreferrer" href ='https://discordapp.com/users/880874334980300820'>
      <BsDiscord />
    </a>
    </div>
  </div>
);

export default SocialMedia;
