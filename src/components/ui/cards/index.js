import React, { useState } from 'react';

// assets
import ArrowT from '../../../assets/icons/tArrow.svg';

// styles
import styles from './Cards.module.scss';

// hooks
import { useWindowSize } from '../../../hooks/useWindowSize';

// helper

// components
import Card from './card';
import Arrows from '../arrows';

const infos1 = [
    {
        info: [
            {
                title: 'CAMP A',
                subTitle: 'Secondary School Beach Camp - Torquay',
                texts: [
                    `Depart: Monday 17 February`,
                    `Return: Thursday 20 February`,
                ]
            },
            {
                title: 'CAMP B',
                subTitle: 'Primary School Beach Camp - Torquay',
                texts: [
                    `Depart: Monday 24 February`,
                    `Return: Thursday 27 February`,
                ]
            },
        ]
    },
    {
        info: [
            {
                title: 'CURRICULUM DAYS',
                subTitle: 'Pupil Free Days',
                texts: [
                    `Tuesday 28 January Friday 21 February`,
                    `Wednesday 29 January Friday 28 February`,
                ]
            },
            {
                title: 'PUBLIC HOLIDAYS',
                subTitle: 'School Closed',
                texts: [
                    `Monday 11 March [Labour Day]`,
                ]
            },
        ]
    },
];
const infos2 = [
    {
        info: [
            {
                title: 'CAMP',
                subTitle: 'Bush Camp - Wellington River',
                texts: [
                    `Depart: Monday 18 May`,
                    `Return: Thursday 21 May`,
                ]
            },
            {
                title: 'PUBLIC HOLIDAYS',
                subTitle: 'School Closed',
                texts: [
                    `Friday 19 April [Good Friday]`,
                    `Thursday 25 April [Anzac Day]`,
                    `Monday 10 June [Queen’s Birthday]`,
                ]
            },
        ]
    },
    {
        info: [
            {
                title: 'CURRICULUM DAYS',
                subTitle: 'Pupil Free Days',
                texts: [
                    `Friday 22 May`,
                ]
            }
        ]
    },
];
const infos3 = [
    {
        info: [
            {
                title: 'CAMP',
                subTitle: 'Snow & Bush Camp - Cathederal Ranges',
                texts: [
                    `Depart: Monday 10 August`,
                    `Return: Thursday 13 August`,
                ]
            },
            {
                title: 'CURRICULUM DAYS',
                subTitle: 'Pupil Free Days',
                texts: [
                    `Friday 14 August`,
                ]
            },
        ]
    }
];
const infos4 = [
    {
        info: [
            {
                title: 'CURRICULUM',
                subTitle: 'Pupil Free Days',
                texts: [
                    `Friday 20 November`,
                ]
            },
            {
                title: 'PUBLIC HOLIDAYS',
                subTitle: 'School Closed',
                texts: [
                    `Monday 4 November [Melbourne Cup]`,
                    `Tuesday 5 November [Melbourne Cup]`,
                ]
            },
        ]
    }
];

const Cards = () => {

    const [isShow, setIsShow] = useState(false);
    const [isShowAll, setIsShowAll] = useState(false);
    const { size } = useWindowSize();

    const handleShowAll = function () {
        setIsShowAll(!isShowAll);
    };

    const showMore = () => {
        setIsShow(!isShow);
    };


    return <div className={ styles.cards }>
        <Card
            cardStyle={ { backgroundColor: '#FFB337' } }
            term="TERM 1"
            termCubeTextStyle={ { color: '#FFB337' } }
            startDay={ 'THURSDAY 30 JANUARY' }
            endDay={ 'FRIDAY 27 MARCH' }
            infos={ infos1 }
            cubeText={ 'T1' }
            isShowAll={isShowAll}
            isShow={isShow}
            showMore={showMore}
        />
        <Card
            cardStyle={ { backgroundColor: '#F8E71C' } }
            term="TERM 2"
            termCubeTextStyle={ { color: '#F8E71C' } }
            startDay={ 'TUESDAY 13 APRIL' }
            endDay={ 'FRIDAY 19 JUNE' }
            infos={ infos2 }
            cubeText={ 'T2' }
            isShowAll={isShowAll}
            isShow={isShow}
            showMore={showMore}
        />
        <Card
            cardStyle={ { backgroundColor: '#B8E986' } }
            term="TERM 3"
            termCubeTextStyle={ { color: '#B8E986' } }
            startDay={ 'TUESDAY 13 APRIL' }
            endDay={ 'FRIDAY 19 JUNE' }
            infos={ infos3 }
            cubeText={ 'T3' }
            isShowAll={isShowAll}
            isShow={isShow}
            showMore={showMore}
        />
        <Card
            cardStyle={ { backgroundColor: '#A5CEFF' } }
            term="TERM 4"
            termCubeTextStyle={ { color: '#A5CEFF' } }
            startDay={ 'TUESDAY 13 APRIL' }
            endDay={ 'FRIDAY 19 JUNE' }
            infos={ infos4 }
            cubeText={ 'T4' }
            isShowAll={isShowAll}
            isShow={isShow}
            showMore={showMore}
        />
        { size.width > 768 ? null :
            <Arrows
                img={ ArrowT }
                text={isShowAll ? 'COLLAPSE ALL' : 'EXPEND ALL' }
                style={isShowAll ? { transform: 'rotate(0deg)' } : { transform: 'rotate(180deg)' } }
                showMore={handleShowAll}
            /> }
    </div>;
};

export default Cards;