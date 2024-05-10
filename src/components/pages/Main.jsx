import React from 'react'
import './Main.scss'
import Sorarsystem from '../../assets/img/solarsystem.jpg'
import Allsystem from '../../assets/img/allsystem.jpg'
import Solarmassa from '../../assets/img/solarmassa.jpg'
import Planets from '../../assets/img/planets.jpg'
import Biggestplanets from '../../assets/img/biggestplanets.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Солнечная система</div>
                    <div className='main__solarsystem'>
                        <img src={Sorarsystem} alt='SolarSystem' />
                    </div>
                    <div className='main__text-one'>Со́лнечная систе́ма — планетная система, включающая в себя центральную звезду Солнце и все естественные космические объекты на гелиоцентрических орбитах. Она сформировалась путём гравитационного сжатия газопылевого облака примерно 4,57 млрд лет назад.</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Allsystem} alt='All System' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Общая масса Солнечной системы составляет около 1,0014 M☉. Бо́льшая часть её приходится на Солнце; оставшаяся часть практически полностью содержится в восьми отдалённых друг от друга планетах, имеющих близкие к круговым орбиты, лежащие почти в одной плоскости — плоскости эклиптики.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Из-за этого наблюдается противоречащее ожидаемому распределение момента импульса между Солнцем и планетами (так называемая «проблема моментов»): всего 2 % общего момента системы приходится на долю Солнца, масса которого в ~740 раз больше общей массы планет, а остальные 98 % — на ~0,001 общей массы Солнечной системы.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Solarmassa} alt='Solar Massa' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Planets} alt='Planets' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Четыре ближайшие к Солнцу планеты, называемые планетами земной группы, — Меркурий, Венера, Земля и Марс — состоят в основном из силикатов и металлов. Четыре более удалённые от Солнца планеты, называемые планетами-гигантами, — Юпитер, Сатурн, Уран и Нептун — намного более массивны, чем планеты земной группы.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Крупнейшие планеты-гиганты, входящие в состав Солнечной системы, — Юпитер и Сатурн — состоят главным образом из водорода и гелия и поэтому относятся к газовым гигантам; меньшие планеты-гиганты — Уран и Нептун — помимо водорода и гелия, преимущественно содержат воду, метан и аммиак, такие планеты выделяются в отдельный класс «ледяных гигантов».</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Biggestplanets} alt='Biggest planets' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main