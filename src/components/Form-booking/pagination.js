const Pagination = ({ count, step }) => {
  let page = []

  for (let i = 0; i <= count.length - 1; i++) {
    page.push(i)
  }

  return (
    <div className='step__wrapper'>
      {page.map(i => {
        return (
          <div key={i} className={i < step + 1 ? 'step active' : 'step '}></div>
        )
      })}
    </div>
  )

}

export default Pagination;