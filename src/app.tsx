import s from './app.scss';
import kb37 from './assets/37kb.png';
import kb5 from './assets/5kb.png';

const App = () => {
    const title: string = 'A beautiful page!';

    return ( 
        <>
            <h2 className={s.title}>{title}</h2> 
            <img src={kb37} />
            <img src={kb5} />
        </>
    )
}

export default App;
