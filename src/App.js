import React from 'react'
import LinkedIn from 'react-icons/lib/ti/social-linkedin'
import FaGithub from 'react-icons/lib/fa/github'
import MdEmail from 'react-icons/lib/md/email'
import Twitter from 'react-icons/lib/ti/social-twitter'
import Medium from 'react-icons/lib/fa/medium'
import Instagram from 'react-icons/lib/fa/instagram'
import ReactFitText from 'react-fittext'

const styles = {
  li: {
    display: 'inline',
    padding:'0.5rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign:'center',
    position:'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  ul: {
    margin:0,
    padding:0,
    paddingBottom:'50px'
  },
  heading: {
    paddingTop: '40px',
    fontSize: '4rem',
    fontFamily: 'Josefin Sans'
  },
  icon: {
    width: '4rem',
    height: '4rem'
  },
  a: {
    color: 'black'
  }
}

export default () => (
  <div style={styles.container}>
    <ReactFitText minFontSize={16} maxFontSize={126}>
      <h2 style={styles.heading}>Nathan Malishev</h2>
    </ReactFitText>
    <ul style={styles.ul}>
      <SocialMedia href="https://www.linkedin.com/in/nathan-malishev-1726a210b/" >
        <LinkedIn style={styles.icon} />
      </SocialMedia>
      <SocialMedia href="https://github.com/nathanmalishev" >
        <FaGithub style={styles.icon} />
      </SocialMedia>
      <SocialMedia href="mailto:nathan.malishev@gmail.com" >
        <MdEmail style={styles.icon} />
      </SocialMedia>
      <SocialMedia href="https://twitter.com/NathanMalishev" >
        <Twitter style={styles.icon} />
      </SocialMedia>
      <SocialMedia href="https://medium.com/@nathan.malishev" >
        <Medium style={styles.icon} />
      </SocialMedia>
      <SocialMedia href="https://www.instagram.com/nathanmalishev/" >
        <Instagram style={styles.icon} />
      </SocialMedia>
    </ul>
  </div>
)

const SocialMedia = ({href, children}) => (
  <li style={styles.li}>
    <a href={href} style={styles.a}>
      {children}
    </a>
  </li>
)


