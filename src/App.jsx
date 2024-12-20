import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import { ways,differences  } from './data'
import Button from './components/Button/Button'
import { useState } from 'react' 

export default function App() {
const [ contentType, setContentType ] = useState(null)

  //let content = 'Нажми на кнопку'

  function handleClick(type) {
    setContentType(type)
    // content = type
  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3> Автопредприятния России </h3>

          <ul>
            <li>
              <p>
                <strong>Горьковский автомобильный завод -</strong> советское и российское крупное автомобилестроительное предприятие, расположенное в Нижнем Новгороде (с 1932 по 1990 год назывался Горьким.)
              </p>
            </li>
            <li>
              <p>
                <strong>Павловский автобусный завод -</strong> советский и русский производитель автобусов малого и среднего классов. Расположен в городе Павлово Нижегородской области. Входит в группу ГАЗ, которая владеет 93,79 % акций.
              </p>
            </li>
            <li>
              <p>
                <strong>Минский автомобильный завод -</strong> управляющая компания холдинга «БЕЛАВТОМАЗ» (бел. Мінскі аўтамабільны завод) — советская и белорусская автомобилестроительная компания, специализирующаяся на выпуске большегрузной автомобильной, а также автобусной, троллейбусной и прицепной техники.
              </p>
            </li>
            <li>
              <p>
                <WayToTeach 
                title={ways[0].title} 
                description = {ways[0].description}/>
                <WayToTeach { ...ways[1]} />
                <WayToTeach { ...ways[2]} />
                <WayToTeach { ...ways[3]} />
              </p>  
            </li>
          </ul>
        </section>
        <section>
          <h3>Чем мы отличаемся от других</h3>

          <Button isActive={contentType==='way'}
          onClick={() => handleClick('way')}>
            Подход
          </Button>
          <Button isActive={contentType==='easy'}
          onClick={() =>handleClick('easy')}>
            Доступность
          </Button>
          <Button isActive={contentType==='program'}
          onClick={() =>handleClick('program')}>
          Концентрация
          </Button>

        {/* contentType ? (
          <p>{differences[contentType]}</p>
          ) : (
          <p>Нажми на кнопку</p>
          ) */}
        
        {/* !contentType ? <p>Нажми на кнопку</p> : null }
        {contentType ? <p>{differences[contentType]}</p> : null*/}

        {!contentType && <p>Нажми на кнопку</p>}
        {contentType && <p>{differences[contentType]}</p>}



        </section>
      </main>
    </div>
  )
}

