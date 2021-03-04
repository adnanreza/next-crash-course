import headerStyles from '../styles/Header.module.css'

function Header() {
  const x = 2
  return (
    <div>
      <h1 className={headerStyles.title}><span>WebDev </span>4All</h1>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? 'red' : 'blue'}
          }
        `}
      </style> */}
      <p className={headerStyles.description}>
        Web development tutorials and walkthroughs
      </p>
    </div>
  )
}

export default Header
