import s from './app.scss';

const App = () => {
    const title: string = 'A beautiful page!';
    
    return ( 
        <h2 className={s.title}>{title}</h2>  
    )
}

export default App;
