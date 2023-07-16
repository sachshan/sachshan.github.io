import './App.scss';

const App = ()=>{

    return (<div className='main'>

        <div className='header'>
            <p className='hName'>Shantanu Sachdeva</p>
            <p className='hLink'>Work</p>
            <p className='hLink'>Resume</p>
            <p className='hLink'>Contact</p>
        </div>

        <hr className='line'></hr>

        <div className='intro'>
            <img  className='iPic' src="310420925_1762450334148009_7619859612996784866_n.jpg" alt="Profile Picture"></img>

            <div className='iText'>
                <p className='iHead'>Hello! My name is Shantanu Sachdeva. I am a hard-working and diligent Software Engineering Systems graduate student at Northeastern University.</p>
                <p className='iPara'>I like to challenge myself and take up projects outside my comfort zone, as they push me to develop new skills and improve my understanding of Software engineering knowledge.</p>
            </div>
        </div>

        </div>)

}

export default App;