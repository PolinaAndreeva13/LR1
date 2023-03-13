//D:\programming\github\LR1\my-app
import './head/head.css';
import './body/body.css';
import Ccomponent from "./Code";
import img from './formula.png';

function App() {
  return (
    <div>

      <header className='head'>

        Рассчет индекса массы тела без мам, пап, врачей и денег!!!

      </header>

      <div className="body">

        <div className='standart_text' > 

          <p>
            Чтобы ответить на вопрос, нормальный вес у вас или избыточный, необходимо научиться правильно его оценивать.
            Для этого нужно, в первую очередь, рассчитать индекс массы тела (ИМТ).
          </p>

          <p>
            Заполните поля ниже:
          </p>

        </div>

        <div className='calc_style'>
          <p>
          <Ccomponent/>
          </p>
        </div>
        
        <div className='standart_text'>
          <h1>
          Справочная информация
          </h1>

        </div>


        <div className='standart_text'>

        <p>Индекс массы тела рассчитывается по формуле:</p>
        
        <p2><img src= {img}/></p2>

        <p>В соответствии с рекомендациями ВОЗ разработана следующая интерпретация показателей ИМТ:</p>
        </div>

      </div>

    </div>
  );
}

export default App;
