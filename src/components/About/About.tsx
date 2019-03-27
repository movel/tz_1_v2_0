import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IAboutProps extends RouteComponentProps {
  source?: string;
}

const About: React.FC<IAboutProps> = props => {
  return (
    <div>
      <h1>PROFILE PAGE</h1>
      
      <img src="img/profile.jpg" alt="profile" />
    </div>
  );
}

export { About };