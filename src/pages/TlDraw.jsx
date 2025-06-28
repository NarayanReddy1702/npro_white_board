

import { Tldraw } from 'tldraw'

const TlDraw = () => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
  return (
    <div className=' w-full h-screen'>
    <div className='w-full h-19 px-10 bg-white shadow flex justify-between items-center'>
      <h1 className='text-xl font-semibold'>Nprocoder</h1>
      <h2 className='text-2xl font-bold text-blue-600' > {storedData}</h2>
      <img className='w-25 object-cover ' src="./images/hn.png" alt="" />
    </div>
    <div style={{ position: 'fixed', top:"10%",left:"0",right:"0",bottom:"0" }}>
			<Tldraw />
		</div>
  </div>
  )
}

export default TlDraw
