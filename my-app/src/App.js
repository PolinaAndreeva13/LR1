//D:\programming\github\LR1\my-app
import './head/head.css';
import './body/body.css';
import formula from '/body/BMI_formula_picture.png"';

import Ccomponent from "./Code";

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
        
        <div className='reference_information_style'>
          <h1>
          Справочная информация
          </h1>

        </div>

        <div className='standart_text'>

        <p>Индекс массы тела рассчитывается по формуле:</p>
          <img src='formula'/>

        </div>

      </div>

    </div>
  );
}

export default App;
