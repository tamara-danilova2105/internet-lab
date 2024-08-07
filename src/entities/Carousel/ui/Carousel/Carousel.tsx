import { Stack } from '@/shared/ui/Stack/Stack';
import { reviews } from '../../lib/data';
import { CarouselItem } from '../CarouselItem/CarouselItem';
import { useState } from 'react';
import styles from './Carousel.module.scss';
import { arrowNextIcon, arrowPrevIcon } from '@/shared/assets/svg/arrowIcons';

const SLIDE_WIDTH = 341;
const SLIDERS_TO_SHOW = 3;
const TOTAL_SLIDES = Math.ceil(reviews.length / SLIDERS_TO_SHOW);
const REVIEWS_CONTAINER_WIDTH = SLIDE_WIDTH * reviews.length;

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log(currentSlide, TOTAL_SLIDES);
    

    const nextSlide = () => {
        if (currentSlide < TOTAL_SLIDES - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const stylesReviews = {
        transform: `translateX(-${currentSlide * SLIDE_WIDTH * SLIDERS_TO_SHOW}px)`,
        width: `${REVIEWS_CONTAINER_WIDTH}px`
    };

    return (
        <section className={styles.section}>
            <Stack 
                className={styles.main} 
                align='center'
            >
                <button 
                    className={`${styles.btn} ${currentSlide === 0 && styles.disabled_btn}`} 
                    onClick={prevSlide}
                >
                    {arrowPrevIcon()}
                </button>
                <div className={styles.reviews_container}>
                    <Stack 
                        className={styles.reviews} gap='16' 
                        style={stylesReviews}
                    >
                        {reviews.map(el => 
                            <CarouselItem key={el.id} element={el} />
                        )}
                    </Stack>
                </div>
                <button 
                    className={`${styles.btn} ${currentSlide === (TOTAL_SLIDES - 1) && styles.disabled_btn}`} 
                    onClick={nextSlide}
                >
                    {arrowNextIcon()}
                </button>
            </Stack>
            <div className={styles.pagination}>
                {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
                    <span
                        key={index}
                        className={currentSlide === index ? styles.active : ''}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
};
