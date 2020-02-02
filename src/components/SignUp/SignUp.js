import React from 'react'

function SignUp () {
  return (
    <div className='SignUp'>
      <form>
        <input name='firstname' type='text' />
        <input name='lastname' type='text' />
        <input name='username' type='text' />
        <input name='password' type='text' />
        <button> Subbmit </button>
      </form>
    </div>
  )
}

export default SignUp
