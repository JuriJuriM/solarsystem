import React from 'react'
import './Second.scss'
import Structure from '../../assets/img/structure.jpg'
import Sunwith from '../../assets/img/sunwith.jpg'
import Rotation from '../../assets/img/rotation.jpg'
import Axis from '../../assets/img/axis.jpg'
import Tellury from '../../assets/img/tellury.jpg'
import Orbit from '../../assets/img/orbit.jpg'
import Ellipse from '../../assets/img/ellipse.jpg'
import Saturn from '../../assets/img/saturnone.jpg'
import Space from '../../assets/img/space.jpg'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__title'>Структура Солнечной системы</div>
                    <div className='second__structure'>
                        <img src={Structure} alt='Structure' />
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Sunwith} alt='Sunwith' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Центральным объектом Солнечной системы является Солнце — звезда главной последовательности спектрального класса G2V, жёлтый карлик. В Солнце сосредоточена подавляющая часть всей массы системы (около 99,866 %), оно удерживает своим тяготением планеты и прочие тела, принадлежащие к Солнечной системе. Четыре крупнейших объекта — газовые гиганты — составляют 99 % оставшейся массы (при этом большая часть приходится на Юпитер и Сатурн — около 90 %).</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Большинство крупных объектов, обращающихся вокруг Солнца, движется практически в одной плоскости, называемой плоскостью эклиптики. В то же время кометы и объекты пояса Койпера часто обладают большими углами наклона к этой плоскости.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Rotation} alt='Rotation' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Axis} alt='Axis' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Все планеты и большинство других объектов обращаются вокруг Солнца в одном направлении с вращением Солнца (против часовой стрелки, если смотреть со стороны северного полюса Солнца). Есть исключения, такие как комета Галлея. Самой большой угловой скоростью обладает Меркурий — он успевает совершить полный оборот вокруг Солнца всего за 88 земных суток. А для самой удалённой планеты — Нептуна — период обращения составляет 165 земных лет.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Бо́льшая часть планет вращается вокруг своей оси в ту же сторону, что и обращается вокруг Солнца. Исключения составляют Венера и Уран, причём Уран вращается практически «лёжа на боку» (наклон оси около 90°). Для наглядной демонстрации вращения используется специальный прибор — теллурий.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Tellury} alt='Tellury' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Orbit} alt='Orbit' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Многие модели Солнечной системы условно показывают орбиты планет через равные промежутки, однако в действительности, за малым исключением, чем дальше планета или пояс от Солнца, тем больше расстояние между её орбитой и орбитой предыдущего объекта. Например, Венера приблизительно на 0,33 а.е. дальше от Солнца, чем Меркурий, в то время как Сатурн на 4,3 а.е. дальше Юпитера, а Нептун на 10,5 а.е. дальше Урана.</div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Орбиты объектов вокруг Солнца описываются законами Кеплера. Согласно им, каждый объект обращается по эллипсу, в одном из фокусов которого находится Солнце. У более близких к Солнцу объектов (с меньшей большой полуосью) больше угловая скорость вращения, поэтому короче период обращения (год). На эллиптической орбите расстояние объекта от Солнца изменяется в течение его года. Ближайшая к Солнцу точка орбиты объекта называется перигелий, наиболее удалённая — афелий. Каждый объект движется быстрее всего в своём перигелии и медленнее всего — в афелии. Орбиты планет близки к кругу, но многие кометы, астероиды и объекты пояса Койпера имеют сильно вытянутые эллиптические орбиты.</div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Ellipse} alt='Ellipse' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Saturn} alt='Saturn' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Большинство планет Солнечной системы обладает собственными подчинёнными системами. Многие окружены спутниками, некоторые из спутников по размеру превосходят Меркурий. Большинство крупных спутников находится в синхронном вращении, одна их сторона постоянно обращена к планете. Четыре крупнейшие планеты — газовые гиганты — обладают также кольцами, тонкими полосами крошечных частиц, обращающимися по очень близким орбитам практически в унисон.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__solarsystem'>
                        <img src={Space} alt='Space' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second