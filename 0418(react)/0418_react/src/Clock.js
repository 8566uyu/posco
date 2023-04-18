function Clock() {
  return <div className='clock-container'>
    {/* .toLocaleTimeString() 현재 사용자의 문화권에 맞는 시간을ㄹ 표기해주는 것*/}
    <h1>현재 시간은 : {new Date().toLocaleTimeString()}</h1>
  </div>
}

export default Clock;
